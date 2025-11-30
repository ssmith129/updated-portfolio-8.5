const fs = require('fs');

const filePath = 'client/pages/MedicoCaseStudy.tsx';
let content = fs.readFileSync(filePath, 'utf8');

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

// Replace the last three lines with the new content
const lines = content.split('\n');
const lastThreeLines = lines.slice(-3).join('\n');

if (lastThreeLines.includes('</div>\n```\n\n);\n}')) {
  const newContent = lines.slice(0, -3).join('\n') + '\n' + scrollButton;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Scroll button added successfully!');
} else {
  console.log('Could not find expected ending. File ending:', lastThreeLines);
}
