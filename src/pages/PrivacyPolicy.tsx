import GSAPReveal from '@/components/GSAPReveal';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <GSAPReveal>
          <p className="text-foreground/60 text-sm mb-4">Effective Date: 13/02/2024</p>
          <h1 className="text-4xl md:text-5xl font-display mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>
        </GSAPReveal>

        <div className="prose prose-invert prose-lg max-w-4xl">
          <GSAPReveal delay={0.1}>
            <p className="text-foreground/80 mb-6">
              Upcann Software FZCO ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This privacy policy explains how we collect, use, share, and protect your personal information when you visit our website https://drgreennft.com (the "Site"), use our services, or interact with us.
            </p>
          </GSAPReveal>

          <GSAPReveal delay={0.15}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-foreground/80 mb-4">We collect information about you in various ways when you use our Site and services. This includes:</p>
            <p className="text-foreground/80 mb-4"><strong>Personal Information:</strong> This may include your name, email address, phone number, and any other information you provide to us.</p>
            <p className="text-foreground/80 mb-4"><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our Site and hold certain information, enabling us to improve your user experience.</p>
            <p className="text-foreground/80 mb-4"><strong>Analytics Information:</strong> We use third-party analytics tools, such as Google Analytics, to help us measure traffic and usage trends for our services.</p>
            <p className="text-foreground/80 mb-4"><strong>Social Media Information:</strong> When you interact with our services through various social media platforms, such as Facebook, Instagram, Twitter, Discord, Telegram, LinkedIn, Pinterest, and YouTube, we may receive information from these platforms.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.2}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground/80 mb-4">We use the information we collect for several purposes, including:</p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>To provide and maintain our services;</li>
              <li>To notify you about changes to our services;</li>
              <li>To allow you to participate in interactive features of our Site when you choose to do so;</li>
              <li>To provide customer support;</li>
              <li>To gather analysis or valuable information so that we can improve our Site and services;</li>
              <li>To monitor the usage of our Site;</li>
              <li>For marketing and advertising purposes, including using Mailchimp for email marketing and using Facebook Pixel, Google Analytics for remarketing efforts;</li>
              <li>To share with our related companies for marketing and to improve our services.</li>
            </ul>
          </GSAPReveal>

          <GSAPReveal delay={0.25}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">3. Sharing Your Information</h2>
            <p className="text-foreground/80 mb-4">We may share your personal information with our related companies and third parties to fulfill the purposes described in this privacy policy. This includes:</p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Sharing with our related companies for marketing and service improvement purposes;</li>
              <li>Sharing data with third-party platforms such as Facebook, Instagram, Twitter, Discord, Telegram, LinkedIn, Pinterest, and YouTube for marketing and analytics;</li>
              <li>Third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, information technology and related infrastructure provision, customer service, email delivery, and auditing services.</li>
            </ul>
          </GSAPReveal>

          <GSAPReveal delay={0.3}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">4. Data Security</h2>
            <p className="text-foreground/80 mb-4">We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.35}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">5. Your Data Protection Rights</h2>
            <p className="text-foreground/80 mb-4">Depending on your location, you may have certain rights under data protection laws. These may include the right to access, correct, delete, or restrict the use of your personal information, as well as the right to data portability and the right to withdraw consent.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.4}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-foreground/80 mb-4">We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.45}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">7. Contact Us</h2>
            <p className="text-foreground/80 mb-4">If you have any questions about this privacy policy, please contact us at <a href="mailto:admin@drgreennft.com" className="text-primary hover:underline">admin@drgreennft.com</a></p>
          </GSAPReveal>

          <GSAPReveal delay={0.5}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">Data Protection Officer (DPO) and Representatives</h2>
            <p className="text-foreground/80 mb-4">We have appointed <strong>LHI Consulting</strong> as our <strong>Global Data Protection Officer (DPO)</strong> and <strong>Data Protection Representative</strong> for the European Union (EU) and the United Kingdom (UK) to ensure compliance with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the UK General Data Protection Regulation (UK GDPR).</p>
            <p className="text-foreground/80 mb-4">If you have any questions or concerns about how we handle your personal data, you may contact <strong>LHI Consulting</strong> directly at:</p>
            <p className="text-foreground/80 mb-4"><strong>Email:</strong> <a href="mailto:info@LHIconsult.com" className="text-primary hover:underline">info@LHIconsult.com</a></p>
            <p className="text-foreground/80 mb-4"><strong>Address:</strong> LHI Holdings Ltd, 4th Floor Silverstream House, 45 Fitzroy Street, London, W1T 6EB</p>
          </GSAPReveal>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;