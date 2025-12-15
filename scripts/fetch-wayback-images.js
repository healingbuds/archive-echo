#!/usr/bin/env node
// Fetch image assets archived in the Wayback Machine for a site and save into an output directory.
// Usage: node scripts/fetch-wayback-images.js drgreennft.netlify.app public/archived-assets [limit]

import fs from 'fs'
import https from 'https'
import { pipeline } from 'stream'
import { promisify } from 'util'
import path from 'path'

const streamPipeline = promisify(pipeline)

const args = process.argv.slice(2)
const site = args[0] || 'drgreennft.netlify.app'
const outDir = args[1] || 'public/archived-assets'
const limit = parseInt(args[2] || '200', 10)

const allowedExt = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']

function mkdirp(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true})
}

async function fetchJSON(url){
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = ''
      res.on('data', d => data += d)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) } catch(e){ reject(e) }
      })
    }).on('error', reject)
  })
}

async function download(url, dest){
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if(res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)){
        return reject(new Error('Bad status code ' + res.statusCode + ' for ' + url))
      }
      const fileStream = fs.createWriteStream(dest)
      res.pipe(fileStream)
      fileStream.on('finish', () => fileStream.close(resolve))
      fileStream.on('error', reject)
    }).on('error', reject)
  })
}

async function main(){
  try{
    mkdirp(outDir)
    console.log('Querying Wayback CDX for images for', site)
    const cdxUrl = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(site)}/*&output=json&filter=statuscode:200&mime=image/*&limit=${limit}`
    const list = await fetchJSON(cdxUrl)
    if(!Array.isArray(list) || list.length <= 1){
      console.log('No archived images found for', site)
      return
    }
    // first row is header
    const rows = list.slice(1)
    console.log('Found', rows.length, 'entries (limited to', limit, ')')

    let count = 0
    for(const r of rows){
      // CDX format: [original, timestamp, original] or similar. Commonly: [urlkey, timestamp, original, mime, statuscode, digest, length]
      // To be safe, find timestamp and original url
      const timestamp = r[1] || r[0]
      const original = r[2] || r[1] || r[0]
      if(!original) continue
      const urlObj = new URL(original, 'https://example.com')
      const ext = path.extname(urlObj.pathname).toLowerCase()
      if(!allowedExt.includes(ext)) continue

      const filename = path.basename(urlObj.pathname) || ('img-' + timestamp)
      const safeName = `${timestamp}-${filename}`.replace(/[^a-zA-Z0-9._-]/g, '_')
      const outPath = path.join(outDir, safeName)
      // Wayback URL - use the 'if_' variant to retrieve a captured copy
      const wayback = `https://web.archive.org/web/${timestamp}if_/${original}`
      try{
        if(fs.existsSync(outPath)){
          console.log('skip (exists)', outPath)
        } else {
          console.log('downloading', wayback, '->', outPath)
          await download(wayback, outPath)
        }
        count++
      }catch(e){
        console.warn('failed to download', wayback, e.message)
      }
    }
    console.log('Downloaded', count, 'images to', outDir)
  }catch(e){
    console.error('Wayback fetch failed', e && e.message)
    process.exit(0) // don't fail build on network issues; just continue
  }
}

main()
