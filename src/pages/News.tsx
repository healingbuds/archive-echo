import GSAPReveal from '../components/GSAPReveal';

const News = () => {
  const articles = [
    {
      title: 'Unlocking the Future: Next Steps After Minting Your NFT',
      excerpt: 'Minting your NFT is just the beginning of your journey into a revolutionary platform that combines blockchain technology with the medical cannabis industry. We\'re excited to share the next phases of our roadmap.',
      categories: ['Dr. Green'],
      featured: true,
    },
    {
      title: 'Sniper Spotlight with Ricardo Capone from Dr. Green Cannabis',
      excerpt: 'For the last five years, we\'ve been involved heavily in the medical cannabis space in Portugal. We have facilities where we grow medical cannabis for distribution to institutions that utilize it.',
      categories: ['Dr. Green', 'NFT', 'Medical Cannabis'],
    },
    {
      title: 'Ricardo Capone: Pioneering Technological Solutions in the Cannabis Industry',
      excerpt: 'Financial setbacks have never deterred billionaire Maximillian White. After losing $39 million in the Cypriot banking collapse, White turned his resilience into a new venture: the cannabis industry.',
      categories: ['Dr. Green'],
    },
    {
      title: 'Marlon Wayans Answers Hard-Hitting Questions As He Joins Billionaire In Cannabis Venture',
      excerpt: 'Marlon Wayans has never stepped into a cannabis venture like this. When presented with the offer to do so from Dr. Green, he felt that Dr. Green was the first company to approach him that actually knew what they were doing.',
      categories: ['Cannabis', 'Dr. Green'],
    },
    {
      title: 'Maximillian White "Elon Musk of weed" will legalise cannabis around the world',
      excerpt: 'Billionaire Maximillian White dubbed the "Elon Musk of weed" vouches to legalise marijuana around the globe. The founder of Dr. Green aims to be the number-one supplier of recreational cannabis around the world.',
      categories: ['Cannabis', 'Dr. Green'],
    },
    {
      title: 'Blockleaders Spotlight with Hofit Golan: Blockchain to disrupt Health and Medicine',
      excerpt: 'Influencer Hofit Golan is making significant strides in the realm of health and technology by delving into ground breaking innovations in personalized wellness and plant medicine.',
      categories: ['Dr. Green', 'NFT', 'Medical Cannabis'],
    },
    {
      title: 'Blockchain and NFTs Aid Cannabis Industry Transparency',
      excerpt: 'Blockchain could help the related industries achieve that by increasing the transparency in the legal cannabis sector – that\'s according to Blockleaders.',
      categories: ['Dr. Green', 'NFT', 'Medical Cannabis'],
    },
    {
      title: 'The Role of Cannabis in Treating PTSD: An Evidence-Based Review',
      excerpt: 'Post-Traumatic Stress Disorder (PTSD) affects millions of people worldwide, especially those who\'ve experienced traumatic events like military combat, violence, or accidents.',
      categories: ['Cannabis', 'Medical Cannabis', 'Marijuana', 'Dr. Green'],
    },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">News / Updates</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Dr. Green In The <span className="text-primary">Press</span>
            </h1>
          </GSAPReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Featured Article */}
          {articles.filter(a => a.featured).map((article) => (
            <GSAPReveal key={article.title}>
              <div className="news-card mb-12 max-w-4xl mx-auto group">
                <div className="aspect-video bg-gradient-to-br from-secondary/30 to-background" />
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-foreground/60 mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.categories.map((cat) => (
                      <span key={cat} className="text-xs text-primary/80 bg-primary/10 px-3 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GSAPReveal>
          ))}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, index) => (
              <GSAPReveal key={article.title} delay={index * 80}>
                <div className="news-card h-full group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-secondary/30 to-background" />
                  <div className="p-4">
                    <h3 className="font-display text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-foreground/50 line-clamp-3 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.categories.slice(0, 2).map((cat) => (
                        <span key={cat} className="text-[10px] text-primary/80 bg-primary/10 px-2 py-1 rounded">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
