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
   { 
        "name": "Resize to 20KB (SSC)", 
        "url": "resize-image-20kb-for-ssc-form", 
        "cat": "image-resize", 
        "icon": "fa-id-badge", 
        "desc": "Resize photo to 20KB for SSC CGL/CHSL forms.", 
        "tag": "SSC" 
    },
    { 
        "name": "Resize to 50KB (SSC)", 
        "url": "resize-image-50kb-for-ssc-form", 
        "cat": "image-resize", 
        "icon": "fa-id-card", 
        "desc": "Resize photo to 50KB (High Quality) for SSC exams.", 
        "tag": "SSC" 
    },
    { 
        "name": "Resize to 100KB (SSC)", 
        "url": "resize-image-100kb-for-ssc-form", 
        "cat": "image-resize", 
        "icon": "fa-image", 
        "desc": "Resize photo to 100KB (Max Quality) for SSC exams.", 
        "tag": "SSC" 
    },
    { 
        "name": "Resize to 20KB (UPSC)", 
        "url": "resize-image-20kb-for-upsc-form", 
        "cat": "image-resize", 
        "icon": "fa-user-tie", 
        "desc": "Resize photo to 350x350px (Square) for UPSC Civil Services.", 
        "tag": "UPSC" 
    },
    { 
        "name": "Resize to 50KB (UPSC)", 
        "url": "resize-image-50kb-for-upsc-form", 
        "cat": "image-resize", 
        "icon": "fa-user-check", 
        "desc": "Resize photo to 50KB (Square 350px) for UPSC exams.", 
        "tag": "UPSC" 
    },
    { 
        "name": "Resize to 20KB (Railway)", 
        "url": "resize-image-20kb-for-railway-form", 
        "cat": "image-resize", 
        "icon": "fa-train", 
        "desc": "Resize photo to 20KB for RRB NTPC, ALP & Group D.", 
        "tag": "RRB" 
    },
    { 
        "name": "Resize for Aadhaar", 
        "url": "resize-image-for-aadhaar-card", 
        "cat": "image-resize", 
        "icon": "fa-fingerprint", 
        "desc": "Resize photo/docs for Aadhaar card update.", 
        "tag": "UIDAI" 
    },
    { 
        "name": "Resize for PAN Card", 
        "url": "resize-image-for-pan-card", 
        "cat": "image-resize", 
        "icon": "fa-address-card", 
        "desc": "Resize photo to 30KB for PAN application.", 
        "tag": "NSDL" 
    },
    { 
        "name": "Passport Photo Maker", 
        "url": "resize-passport-photo", 
        "cat": "image-resize", 
        "icon": "fa-id-badge", 
        "desc": "Convert any image to standard 3.5x4.5cm passport size.", 
        "tag": "FREE" 
    },
    { 
        "name": "Resize for Driving License", 
        "url": "resize-image-for-driving-license", 
        "cat": "image-resize", 
        "icon": "fa-id-card-clip", 
        "desc": "Resize photo/signature to 10-20KB for DL/LL.", 
        "tag": "RTO" 
    },
    // =========================================
    // CATEGORY 2: SIGNATURE RESIZE (High Intent)
    // =========================================
   { 
        "name": "Signature Resize (SSC)", 
        "url": "resize-signature-20kb-for-ssc", 
        "cat": "signature", 
        "icon": "fa-file-signature", 
        "desc": "Resize signature to 10-20KB for SSC CGL/CHSL.", 
        "tag": "SSC" 
    },
    { 
        "name": "Signature Resize 50KB", 
        "url": "resize-signature-50kb-for-ssc", 
        "cat": "signature", 
        "icon": "fa-pen-nib", 
        "desc": "Resize signature to 50KB (High Quality) for exams.", 
        "tag": "HQ" 
    },
    { 
        "name": "Signature Resize (UPSC)", 
        "url": "resize-signature-20kb-for-upsc", 
        "cat": "signature", 
        "icon": "fa-pen-clip", 
        "desc": "Resize signature to 20KB (350x150px) for UPSC.", 
        "tag": "UPSC" 
    },
    { 
        "name": "Resize Signature (Govt)", 
        "url": "resize-signature-for-govt-forms", 
        "cat": "signature", 
        "icon": "fa-file-contract", 
        "desc": "Universal signature resizer (10-20KB) for Bank/SSC exams.", 
        "tag": "ALL" 
    },
    { 
        "name": "Signature Resize (Universal)", 
        "url": "resize-signature-for-exam-applications", 
        "cat": "signature", 
        "icon": "fa-file-signature", 
        "desc": "Universal signature resizer for all exam applications.", 
        "tag": "ALL" 
    },
    { 
        "name": "Signature Cleaner", 
        "url": "resize-signature-with-white-background", 
        "cat": "signature", 
        "icon": "fa-wand-magic-sparkles", 
        "desc": "Auto-remove grey background from signature photos.", 
        "tag": "NEW" 
    },


    // =========================================
    // CATEGORY 3: PDF TOOLS (Evergreen)
    // =========================================
     { 
        "name": "Compress PDF 100KB", 
        "url": "compress-pdf-to-100kb-for-ssc", 
        "cat": "pdf", 
        "icon": "fa-file-pdf", 
        "desc": "Reduce PDF size to 100KB for SSC/Govt uploads.", 
        "tag": "SSC" 
    },
    { 
        "name": "Compress PDF 200KB", 
        "url": "compress-pdf-to-200kb", 
        "cat": "pdf", 
        "icon": "fa-file-zipper", 
        "desc": "Compress PDF to 200KB for SSC, UPSC & PSC.", 
        "tag": "HOT" 
    },
    { 
        "name": "Compress PDF (UPSC)", 
        "url": "compress-pdf-for-upsc", 
        "cat": "pdf", 
        "icon": "fa-file-shield", 
        "desc": "Compress PDF to 300KB for UPSC Civil Services.", 
        "tag": "UPSC" 
    },
    { 
        "name": "Compress PDF (Railway)", 
        "url": "compress-pdf-for-railway-form", 
        "cat": "pdf", 
        "icon": "fa-train", 
        "desc": "Compress PDF to 300KB for RRB (NTPC/ALP).", 
        "tag": "RRB" 
    },
    { 
        "name": "Compress PDF (Govt)", 
        "url": "compress-pdf-for-govt-forms", 
        "cat": "pdf", 
        "icon": "fa-file-invoice", 
        "desc": "Universal PDF compressor for Government applications.", 
        "tag": "ALL" 
    },
    { 
        "name": "Compress PDF (Resume)", 
        "url": "compress-pdf-for-job-application", 
        "cat": "pdf", 
        "icon": "fa-briefcase", 
        "desc": "Optimize PDF resume/CV for job portals (LinkedIn/Naukri).", 
        "tag": "JOB" 
    },
    { 
        "name": "Compress PDF (Aadhaar)", 
        "url": "compress-pdf-for-aadhaar-upload", 
        "cat": "pdf", 
        "icon": "fa-fingerprint", 
        "desc": "Compress PDF to 2MB for UIDAI document update.", 
        "tag": "UIDAI" 
    },
    { 
        "name": "High Quality PDF Compress", 
        "url": "compress-pdf-no-quality-loss", 
        "cat": "pdf", 
        "icon": "fa-file-circle-check", 
        "desc": "Reduce PDF size without losing quality (HD).", 
        "tag": "HD" 
    },

    // =========================================
    // CATEGORY 4: PASSWORD TOOLS (Scalable)
    // =========================================
   { 
        "name": "Gmail Password Gen", 
        "url": "strong-password-generator-for-gmail", 
        "cat": "password", 
        "icon": "fa-google", 
        "desc": "Generate strong, secure passwords for Google accounts.", 
        "tag": "SECURE" 
    },
    { 
        "name": "Instagram Password Gen", 
        "url": "strong-password-generator-for-instagram", 
        "cat": "password", 
        "icon": "fa-instagram", 
        "desc": "Secure password generator for Instagram accounts.", 
        "tag": "SECURE" 
    },
    { 
        "name": "Facebook Password Gen", 
        "url": "strong-password-generator-for-facebook", 
        "cat": "password", 
        "icon": "fa-facebook", 
        "desc": "Create hack-proof passwords for your Facebook account.", 
        "tag": "SECURE" 
    },
    { 
        "name": "Banking Password Gen", 
        "url": "strong-password-generator-for-online-banking", 
        "cat": "password", 
        "icon": "fa-building-columns", 
        "desc": "Generate ultra-secure passwords for net banking.", 
        "tag": "BANK" 
    },
    { 
        "name": "UPI PIN & Pass Gen", 
        "url": "secure-password-generator-for-upi-apps", 
        "cat": "password", 
        "icon": "fa-mobile-screen-button", 
        "desc": "Generate secure App Passwords and 4/6 digit UPI PINs.", 
        "tag": "UPI" 
    },
    { 
        "name": "Student Password Gen", 
        "url": "strong-password-generator-for-students", 
        "cat": "password", 
        "icon": "fa-graduation-cap", 
        "desc": "Secure & Memorable password generator for students.", 
        "tag": "EDU" 
    },
    { 
        "name": "WiFi Password Gen", 
        "url": "secure-wifi-password-generator", 
        "cat": "password", 
        "icon": "fa-wifi", 
        "desc": "Generate WPA2/WPA3 keys (ASCII & Hex).", 
        "tag": "WPA2" 
    },

    // =========================================
    // CATEGORY 5: CONVERTERS (JPG <-> PDF)
    // =========================================
    { 
        "name": "JPG to PDF (Govt)", 
        "url": "jpg-to-pdf-govt", 
        "cat": "pdf", 
        "icon": "fa-images", 
        "desc": "Convert & compress JPGs to PDF for government forms.", 
        "tag": "NEW" 
    },
    { 
        "name": "JPG to PDF (Exams)", 
        "url": "jpg-to-pdf-for-exam-applications", 
        "cat": "pdf", 
        "icon": "fa-file-pen", 
        "desc": "Convert answer sheets/photos to PDF for exams.", 
        "tag": "STUDENT" 
    },
    { 
        "name": "JPG to PDF (Aadhaar)", 
        "url": "jpg-to-pdf-for-aadhaar", 
        "cat": "pdf", 
        "icon": "fa-id-card", 
        "desc": "Combine Front & Back photos to PDF for UIDAI.", 
        "tag": "UIDAI" 
    },
    { 
        "name": "PDF to JPG (SSC)", 
        "url": "pdf-to-jpg-for-ssc-form", 
        "cat": "pdf", 
        "icon": "fa-file-image", 
        "desc": "Convert PDF marksheets to JPG for SSC upload.", 
        "tag": "SSC" 
    },
    { 
        "name": "PDF to JPG (UPSC)", 
        "url": "pdf-to-jpg-for-upsc-documents", 
        "cat": "pdf", 
        "icon": "fa-file-image", 
        "desc": "Convert UPSC PDF documents to JPG images.", 
        "tag": "UPSC" 
    },
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
