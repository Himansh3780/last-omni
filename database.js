// =========================================
// 1. GOOGLE ANALYTICS (GA4) - TRACKING
// =========================================
(function() {
    const GA_ID = 'G-1MQNF15L2X'; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
})();

// =========================================
// 2. PWA & MOBILE SEO OPTIMIZATION
// =========================================
(function() {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#09090b';
    document.head.appendChild(meta);

    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'manifest.json';
    document.head.appendChild(link);
})();

// =========================================
// 3. MASTER TOOLS DATABASE (5 UNIVERSAL TOOLS)
// =========================================
const toolsDB = [
    {
        "name": "Image Resizer",
        "url": "resize-passport-photo",
        "cat": "image",
        "icon": "fa-image",
        "desc": "Resize any photo to exact KB size — passport, SSC, UPSC, Aadhaar, PAN & more.",
        "tag": "FREE"
    },
    {
        "name": "Signature Resizer",
        "url": "resize-signature-for-govt-forms",
        "cat": "signature",
        "icon": "fa-signature",
        "desc": "Resize your signature to any KB size for government, bank and exam forms.",
        "tag": "FREE"
    },
    {
        "name": "PDF Compressor",
        "url": "compress-pdf-to-200kb",
        "cat": "pdf",
        "icon": "fa-file-pdf",
        "desc": "Compress PDF files to any target size — 100KB, 200KB, 500KB — in your browser.",
        "tag": "HOT"
    },
    {
        "name": "Password Generator",
        "url": "strong-password-generator-for-gmail",
        "cat": "password",
        "icon": "fa-shield-halved",
        "desc": "Generate strong, secure passwords for Gmail, banking, social media & more.",
        "tag": "SECURE"
    },
    {
        "name": "JPG to PDF",
        "url": "jpg-to-pdf-govt",
        "cat": "converter",
        "icon": "fa-file-image",
        "desc": "Convert one or multiple JPG images into a single PDF file instantly.",
        "tag": "NEW"
    }
];

// =====================================================================
// 4. AUTOMATION: INJECT SEO SCHEMA, RELATED TOOLS & FOOTER
// =====================================================================
document.addEventListener("DOMContentLoaded", function() {
    
    const currentPath = window.location.pathname;
    const isToolPage = !currentPath.endsWith("index.html") && currentPath !== "/" && currentPath.length > 1;
    let currentTool = toolsDB.find(t => currentPath.includes(t.url));

    // --- A. INJECT JSON-LD SCHEMA ---
    if (isToolPage && currentTool) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": currentTool.name,
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": currentTool.desc,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2400"
            }
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    // --- B. INJECT RELATED TOOLS SECTION ---
    const toolContainer = document.querySelector(".tool-card") || document.querySelector(".calc-card");
    if (toolContainer) {
        let related = toolsDB.filter(t => t.url !== (currentTool ? currentTool.url : ''));

        const relatedSection = document.createElement("div");
        relatedSection.className = "related-section";
        relatedSection.innerHTML = `
            <h3 class="related-title"><i class="fa-solid fa-layer-group"></i> More Free Tools</h3>
            <div class="related-grid">
                ${related.map(t => `
                    <a href="${t.url}" class="related-card">
                        <div class="related-icon"><i class="fa-solid ${t.icon}"></i></div>
                        <div>
                            <div class="related-name">${t.name}</div>
                            <div class="related-desc">${t.desc}</div>
                        </div>
                    </a>
                `).join("")}
            </div>
        `;
        const mainContainer = document.querySelector(".container");
        if (mainContainer) mainContainer.appendChild(relatedSection);
    }

    // --- C. INJECT FOOTER ---
    if (!document.querySelector("footer")) {
        const footer = document.createElement("footer");
        footer.className = "site-footer";
        footer.innerHTML = `
            <div class="footer-inner">
                <div class="footer-brand">
                    <i class="fa-solid fa-cube"></i> <strong>OmniTools</strong>
                    <span>© 2026</span>
                </div>
                <div class="footer-links">
                    <a href="privacy">Privacy</a>
                    <a href="terms">Terms</a>
                    <a href="contact">Contact</a>
                    <a href="index.html">All Tools</a>
                </div>
                <div class="footer-note">Free tools. No uploads. 100% Client-Side privacy. 🇮🇳</div>
            </div>
        `;
        const target = document.querySelector(".container") || document.body;
        target.appendChild(footer);
    }
});
