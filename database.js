// =========================================
// GOOGLE ANALYTICS (GA4) INJECTION
// =========================================
(function() {
    // YOUR TRACKING ID
    const GA_ID = 'G-1MQNF15L2X'; 

    // 1. Load the Google Script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    // 2. Initialize Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
})();

// =========================================
// PWA & SEO HEAD INJECTION (New Feature)
// =========================================
(function() {
    // 1. Add Manifest for PWA (App Install)
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'manifest.json';
    document.head.appendChild(link);

    // 2. Add Mobile Theme Color (Updated to Dark Zinc)
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#09090b';
    document.head.appendChild(meta);
})();

const toolsDB = [
    // =========================================
    // CATEGORY 1: IMAGE RESIZE (Traffic Pillar)
    // =========================================
    // Add your tools here...
    // Example: { "name": "SSC Photo Resizer", "url": "resize-image-20kb-ssc", "cat": "image-resize", "icon": "fa-image", "desc": "Resize to 20KB for SSC Exams.", "tag": "SSC" },


    // =========================================
    // CATEGORY 2: SIGNATURE RESIZE (High Intent)
    // =========================================
    // Add your tools here...


    // =========================================
    // CATEGORY 3: PDF TOOLS (Evergreen)
    // =========================================
    // Add your tools here...


    // =========================================
    // CATEGORY 4: PASSWORD TOOLS (Scalable)
    // =========================================
    // Add your tools here...


    // =========================================
    // CATEGORY 5: CONVERTERS (JPG <-> PDF)
    // =========================================
    // Add your tools here...

];

// =====================================================================
// AUTOMATION SCRIPT: INJECTS "RELATED TOOLS" AFTER THE CALCULATOR
// =====================================================================
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Check if we are on a Tool Page (not the homepage)
    if (document.querySelector(".grid-container") || document.querySelector("#tools-grid")) {
        return; // Stop if we are on the dashboard
    }

    // --- 1. PREPARE THE RELATED TOOLS SECTION ---
    const currentPath = window.location.pathname;
    let currentTool = toolsDB.find(t => currentPath.includes(t.url));
    let related = [];
    let titleText = "You might also like:";

    if (currentTool) {
        // Get tools from same category, exclude current
        related = toolsDB.filter(t => t.cat === currentTool.cat && t.url !== currentTool.url);
    } 
    
    // Fill with "HOT" tools if we don't have enough
    if (!currentTool || related.length < 3) {
        if (!currentTool) titleText = "Popular Tools:";
        const fillers = toolsDB.filter(t => t.tag === 'HOT' || t.tag === 'VIRAL');
        related = related.concat(fillers); 
    }

    // Shuffle and pick 3
    related = related.sort(() => 0.5 - Math.random()).slice(0, 3);

    // --- 2. INJECT RELATED TOOLS (STYLED FOR GOLD THEME) ---
    if (related.length > 0) {
        const relatedSection = document.createElement("div");
        relatedSection.className = "related-tools-section";
        // Styling to make it fit nicely
        relatedSection.style.cssText = "max-width: 800px; margin: 0 auto 40px auto; padding-top: 20px;";
        
        let cardsHTML = related.map(t => `
            <a href="${t.url}.html" style="text-decoration:none; background:#0c0c0e; padding:15px; border-radius:12px; display:flex; align-items:center; gap:15px; border:1px solid #1f1f22; margin-bottom:10px; transition:0.2s;" onmouseover="this.style.borderColor='#f59e0b'" onmouseout="this.style.borderColor='#1f1f22'">
                <div style="width:40px; height:40px; background:rgba(245, 158, 11, 0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#f59e0b;">
                    <i class="fa-solid ${t.icon}"></i>
                </div>
                <div>
                    <div style="color:#ededef; font-weight:600; font-size:0.95rem;">${t.name}</div>
                    <div style="color:#a1a1aa; font-size:0.8rem;">${t.desc}</div>
                </div>
            </a>
        `).join("");

        relatedSection.innerHTML = `
            <h3 style="color:#ededef; font-size:1.1rem; margin-bottom:20px;">${titleText}</h3>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:15px;">
                ${cardsHTML}
            </div>
        `;
        
        const calcCard = document.querySelector(".calc-card") || document.querySelector(".card") || document.querySelector(".tool-card");
        
        if (calcCard) {
            calcCard.parentNode.insertBefore(relatedSection, calcCard.nextSibling);
        } else {
            document.body.appendChild(relatedSection);
        }
    }

    // --- 3. ALWAYS INJECT FOOTER (STYLED FOR GOLD THEME) ---
    if (!document.querySelector("footer")) {
        const footer = document.createElement("footer");
        footer.style.cssText = "text-align: center; padding: 50px 20px; color: #a1a1aa; font-size: 0.85rem; border-top: 1px solid #1f1f22; margin-top: 50px; background:#09090b;";
        footer.innerHTML = `
            <div style="margin-bottom: 15px;">
                <span style="font-weight: 700; color: #ededef;">OmniTools</span> &copy; 2026
            </div>
            <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <a href="privacy.html" style="color: #a1a1aa; text-decoration: none;">Privacy Policy</a>
                <a href="terms.html" style="color: #a1a1aa; text-decoration: none;">Terms of Service</a>
                <a href="contact.html" style="color: #a1a1aa; text-decoration: none;">Contact</a>
                <a href="index.html" style="color: #a1a1aa; text-decoration: none;">All Tools</a>
            </div>
        `;
        document.body.appendChild(footer);
    }
});
