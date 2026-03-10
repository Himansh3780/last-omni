import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOOLS_DIR = join(__dirname, '..', 'src', 'pages', 'tools');
const PUBLIC_DIR = join(__dirname, '..', 'public');
const DOMAIN = 'https://omnitools.in';

async function getFolders(dir) {
    const items = await fs.promises.readdir(dir, { withFileTypes: true });
    return items.filter(item => item.isDirectory()).map(item => item.name);
}

async function generateSitemap() {
    const categories = await getFolders(TOOLS_DIR);
    const paths = ['/'];

    for (const category of categories) {
        const categoryPath = join(TOOLS_DIR, category);
        const tools = await getFolders(categoryPath);
        
        // Handling nested 'generic' or 'png' subcategories for images
        if (category === 'image') {
            const subCats = await getFolders(categoryPath);
            for (const sub of subCats) {
                const subPath = join(categoryPath, sub);
                const subTools = await getFolders(subPath);
                for (const tool of subTools) {
                    paths.push(`/${category}-generic/${tool}`);
                }
            }
        } else {
            for (const tool of tools) {
                paths.push(`/${category}/${tool}`);
            }
        }
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url>
    <loc>${DOMAIN}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    await writeFile(join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log('✅ sitemap.xml generated successfully in /public');
}

generateSitemap().catch(console.error);
