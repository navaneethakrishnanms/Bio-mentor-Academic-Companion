/* ═══════════════════════════════════════════════════════
   BioMentor AI — Runtime Configuration
   
   - Local dev (automatic): http://localhost:8000/api
   - Deployed on Vercel: Set to your Render / Railway backend URL
   ═══════════════════════════════════════════════════════ */

// Auto-detect local development; change the fallback URL when deploying to Vercel
if (!window.BIOMENTOR_API_URL) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.BIOMENTOR_API_URL = 'http://localhost:8000/api';
    } else {
        // Replace with your actual Render backend URL after deploying to Render:
        window.BIOMENTOR_API_URL = 'https://biomentor-ai-backend.onrender.com/api';
    }
}
