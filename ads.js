/* --- AD CONFIGURATION MASTER FILE --- */

const adConfig = {
    // 1. MASTER SWITCH
    // Set to 'false' to hide ALL ads instantly (clean site mode).
    enabled: true, 

    // 2. HERO CAROUSEL (Big Slider at the Top)
    // Add as many slides as you want inside the [ brackets ].
    hero: [
        {
            tag: "FEATURED",                // Small text above title
            title: "Deploy Apps <br>Fast.", // Main Headline (<br> is a line break)
            desc: "Scale from zero to billion users in seconds.", 
            btnText: "Start Free Trial",    // Button Text
            btnLink: "https://google.com",  // Button Link
            bgImage: "https://placehold.co/1200x400/0f172a/FFFFFF?text=Featured+Ad", // Background Image URL
            accent: "#3b82f6"               // Color of the button and tag (Hex Code)
        },
        {
            tag: "AI POWERED",
            title: "Write Code <br>With AI.",
            desc: "Your intelligent pair programmer.",
            btnText: "Get Plugin",
            btnLink: "#",
            bgImage: "https://placehold.co/1200x400/312e81/FFFFFF?text=AI+Ad",
            accent: "#a855f7"
        }
    ],

    // 3. SIDEBAR AD (Small box in the left menu)
    sidebar: {
        image: "https://placehold.co/200x200/1e293b/FFFFFF?text=Sidebar+Ad",
        link: "https://example.com/sidebar-offer"
    },

    // 4. NATIVE ADS (In-Feed Cards)
    // These cards appear every 4 items in the grid.
    // 'category' determines where it shows: 'all', 'dev', 'social', 'business', etc.
    native: [
        {
            category: "all", // SHOWS ON EVERY PAGE
            title: "Launch Your Startup",
            desc: "Get $5,000 in cloud credits and deploy instantly.",
            cta: "Apply Now",
            link: "https://example.com/credits",
            icon: "fa-rocket" // FontAwesome Icon name
        },
        {
            category: "dev", // SHOWS ONLY IN 'DEVELOPER' TAB
            title: "Best VS Code Theme",
            desc: "Download the #1 rated dark theme for coding.",
            cta: "Install",
            link: "#",
            icon: "fa-code"
        },
        {
            category: "social", // SHOWS ONLY IN 'SOCIAL' TAB
            title: "Grow Your TikTok",
            desc: "Get 10k followers in 30 days with this guide.",
            cta: "Get Guide",
            link: "#",
            icon: "fa-tiktok"
        }
    ],

    // 5. STICKY FOOTER AD (Bar at the bottom)
    stickyFooter: {
        enabled: true, // Set to false to hide just the footer
        text: "⚡ <b>Limited Deal:</b> Get 50% OFF Omni-Tools Pro Account!", // You can use HTML like <b>
        btnText: "Claim Offer",
        link: "https://example.com/offer",
        bgColor: "#dc2626" // Red background color
    }
};
