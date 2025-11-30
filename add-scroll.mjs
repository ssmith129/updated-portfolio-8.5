import { readFileSync, writeFileSync } from 'fs';

const filePath = 'client/pages/MedicoCaseStudy.tsx';
const content = readFileSync(filePath, 'utf8');

const scrollButton = `
{/* Scroll to Top Button */}
<div className="fixed bottom-20 left-0 right-0 z-50 pointer-events-none">
<div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative pointer-events-none">
<button
onClick={scrollToTop}
className={\`absolute right-4 sm:right-8 lg:right-12 p-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 pointer-events-auto \${
showScrollTop
? "opacity-100 translate-y-0"
: "opacity-0 translate-y-16 pointer-events-none"
}\`}
aria-label="Scroll to top"
>
<ArrowUp className="w-6 h-6" />
</button>
</div>
</div>
</div>
\`\`\`

);
}`;

const lines = content.split('\n');
const newContent = lines.slice(0, -3).join('\n') + '\n' + scrollButton;
writeFileSync(filePath, newContent, 'utf8');
console.log('Success!');
