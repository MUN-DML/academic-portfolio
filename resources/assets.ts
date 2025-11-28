/**
 * Centralized registry for static assets (Images, PDFs, Videos).
 * 
 * NOTE: 
 * - This file (assets.ts) should stay in your source 'resources' folder.
 * - The ACTUAL files (.jpg, .pdf) should be in your 'public' folder.
 */

// Profile Image
// Matches: public/resources/pics/profile.jpg
export const ProfileImage = "resources/pics/profile.jpg";

// Academic Papers (PDFs)
export const Papers = {
  Paper1: "resources/pdfs/robust-vision-transformers.pdf",
  Paper2: "resources/pdfs/diffusion-latent-space.pdf",
  Paper3: "resources/pdfs/human-ai-collaboration.pdf",
};

// External Links (Code, Websites, Videos)
export const ExternalResources = {
  Paper1_Code: "https://github.com/username/repo",
  Paper1_Website: "https://project-page.com",
  Paper3_Video: "https://youtube.com/watch?v=demo",
};