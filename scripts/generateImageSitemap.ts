import fs from 'fs';
import path from 'path';

interface ImageSitemapEntry {
  url: string;
  images: {
    loc: string;
    caption?: string;
    title?: string;
    license?: string;
  }[];
}

const generateImageSitemap = () => {
  const siteUrl = 'https://boisterous-paprenjak-cb7a87.netlify.app'; // Your actual domain
  
  const pages: ImageSitemapEntry[] = [
    {
      url: `${siteUrl}/`,
      images: [
        {
          loc: `${siteUrl}/sean-smith-product-designer-headshot.webp`,
          caption: 'Sean Smith - Senior Product Designer professional headshot photo',
          title: 'Sean Smith Professional Headshot - UX Designer San Francisco',
        },
        {
          loc: `${siteUrl}/computis-crypto-tax-dashboard-preview.webp`,
          caption: 'Computis crypto tax engine dashboard interface design preview',
          title: 'Computis Dashboard Design - Crypto Tax Automation Platform',
        },
        {
          loc: `${siteUrl}/ezemrx-ehr-ipad-interface-mockup.webp`,
          caption: 'ezEMRx Electronic Health Records iPad interface mockup design',
          title: 'ezEMRx EHR Interface - Healthcare Software Design',
        }
      ]
    },
    {
      url: `${siteUrl}/case-studies`,
      images: [
        {
          loc: `${siteUrl}/computis-case-study-thumbnail.webp`,
          caption: 'Computis crypto tax automation platform case study thumbnail',
          title: 'Computis Case Study - Crypto Tax Engine UX Design',
        },
        {
          loc: `${siteUrl}/ezemrx-case-study-thumbnail.webp`,
          caption: 'ezEMRx Electronic Health Records system case study thumbnail',
          title: 'ezEMRx Case Study - Healthcare EHR Software Design',
        },
        {
          loc: `${siteUrl}/medico-case-study-thumbnail.webp`,
          caption: 'Medico hospital management system case study thumbnail',
          title: 'Medico Case Study - Hospital Management System UX',
        },
        {
          loc: `${siteUrl}/moneyfarm-case-study-thumbnail.webp`,
          caption: 'MoneyFarm AI-powered personal finance app case study thumbnail',
          title: 'MoneyFarm Case Study - AI Personal Finance App Design',
        }
      ]
    },
    {
      url: `${siteUrl}/case-studies/computis-crypto-tax-engine`,
      images: [
        {
          loc: `${siteUrl}/computis-hero-dashboard-interface.webp`,
          caption: 'Computis crypto tax automation platform hero dashboard interface',
          title: 'Computis Platform Overview - Tax Engine Dashboard',
        },
        {
          loc: `${siteUrl}/computis-user-flow-diagram.webp`,
          caption: 'Computis user flow diagram showing tax calculation process',
          title: 'Computis User Flow - Tax Calculation Process Design',
        }
      ]
    },
    {
      url: `${siteUrl}/case-studies/ezemrx-redesigning-ehr`,
      images: [
        {
          loc: `${siteUrl}/ezemrx-before-after-comparison.webp`,
          caption: 'ezEMRx EHR interface before and after redesign comparison',
          title: 'ezEMRx Redesign - Before and After Interface Comparison',
        }
      ]
    },
    {
      url: `${siteUrl}/about`,
      images: [
        {
          loc: `${siteUrl}/sean-smith-designer-workspace.webp`,
          caption: 'Sean Smith designer workspace showing design process and tools',
          title: 'Sean Smith Designer Workspace - UX Design Process',
        }
      ]
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
${page.images.map(image => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      ${image.caption ? `<image:caption><![CDATA[${image.caption}]]></image:caption>` : ''}
      ${image.title ? `<image:title><![CDATA[${image.title}]]></image:title>` : ''}
      ${image.license ? `<image:license>${image.license}</image:license>` : ''}
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'image-sitemap.xml'), sitemap);
  console.log('✅ Image sitemap generated successfully at public/image-sitemap.xml');
  console.log(`📊 Generated sitemap with ${pages.reduce((acc, page) => acc + page.images.length, 0)} images across ${pages.length} pages`);
};

// Run the function
if (import.meta.url === `file://${process.argv[1]}`) {
  generateImageSitemap();
}

export default generateImageSitemap;