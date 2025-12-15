import GSAPReveal from '@/components/GSAPReveal';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <GSAPReveal>
          <h1 className="text-4xl md:text-5xl font-display mb-8">
            Cookie <span className="text-primary">Policy</span>
          </h1>
        </GSAPReveal>

        <div className="prose prose-invert prose-lg max-w-4xl">
          <GSAPReveal delay={0.1}>
            <p className="text-foreground/80 mb-6">
              This Cookies Policy explains in detail what cookies are, how we use them, and your choices regarding cookies when you visit our website.
            </p>
          </GSAPReveal>

          <GSAPReveal delay={0.15}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">What are cookies?</h2>
            <p className="text-foreground/80 mb-4">Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners. Cookies help improve your browsing experience by remembering your preferences and settings.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.2}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">How we use cookies</h2>
            <p className="text-foreground/80 mb-4">We use cookies for various purposes to enhance your experience on our website:</p>
            
            <p className="text-foreground/80 mb-4"><strong>Google Analytics:</strong> We utilize Google Analytics cookies to analyze website traffic and user behavior. This helps us understand how visitors navigate our site, which pages are most popular, and how we can improve our content and user experience.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Webmaster Tools:</strong> Cookies provided by Webmaster Tools assist us in monitoring and optimizing the performance of our website. They help us identify technical issues and improve the site's functionality.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Facebook Pixel:</strong> Our website may include the Facebook Pixel, which enables us to track conversions from Facebook ads, optimize ad campaigns, and reach targeted audiences. The Facebook Pixel uses cookies to collect data about user interactions with our website.</p>
            
            <p className="text-foreground/80 mb-4"><strong>LinkedIn Cookie:</strong> Cookies from LinkedIn may be used to track conversions and to personalize advertising campaigns based on user interests and interactions with our website.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Twitter Cookie:</strong> We use Twitter cookies to track conversions from Twitter ads and to deliver personalized ads to users based on their interests and browsing behavior.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Mailchimp Cookie:</strong> If you subscribe to our newsletter, Mailchimp cookies may be utilized to track email campaign performance and user interactions with our emails. This helps us improve our email marketing efforts and tailor content to your interests.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Instagram:</strong> Cookies from Instagram enable us to embed Instagram content on our website and track user interactions with our Instagram posts and stories.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Discord:</strong> If we integrate Discord functionalities into our website, cookies from Discord may be used to provide seamless interaction with Discord features and services.</p>
            
            <p className="text-foreground/80 mb-4"><strong>OpenSea:</strong> Cookies from OpenSea may enhance the user experience when interacting with blockchain-based services or marketplace features integrated into our website.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Microsoft:</strong> Cookies provided by Microsoft may serve various purposes such as authentication, security, and personalization of content based on user preferences.</p>
            
            <p className="text-foreground/80 mb-4"><strong>YouTube:</strong> We embed YouTube videos on our website, and YouTube cookies are used to track user interactions with these videos, personalize recommendations, and measure video performance.</p>
            
            <p className="text-foreground/80 mb-4"><strong>Bing:</strong> Cookies from Bing may be employed for search engine analytics and to improve search result relevance based on user behaviour and preferences.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.25}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">Your choices regarding cookies</h2>
            <p className="text-foreground/80 mb-4">You have the option to accept or decline cookies through your web browser settings. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that blocking cookies may impact your ability to access certain features and content on our website.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.3}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">Changes to our Cookies Policy</h2>
            <p className="text-foreground/80 mb-4">We reserve the right to update or modify this Cookies Policy at any time without prior notice. Any changes will be effective immediately upon posting on this page. We encourage you to review this policy periodically to stay informed about how we use cookies and your choices regarding them.</p>
          </GSAPReveal>

          <GSAPReveal delay={0.35}>
            <h2 className="text-2xl font-display text-primary mt-8 mb-4">Contact Us</h2>
            <p className="text-foreground/80 mb-4">If you have any questions about our cookies policy, please contact us at <a href="mailto:admin@drgreennft.com" className="text-primary hover:underline">admin@drgreennft.com</a></p>
          </GSAPReveal>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;