import { readFileSync, writeFileSync } from 'fs';

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
      </div>`;

const content = readFileSync('client/pages/MedicoCaseStudy.tsx', 'utf8');
const lines = content.split('\n');

// Find the last closing braces
const lastBraceIndex = lines.lastIndexOf('}');

// Insert scroll button before the last closing brace and div
const newContent = [
  ...lines.slice(0, lastBraceIndex - 2),
  scrollButton,
  ...lines.slice(lastBraceIndex - 2)
].join('\n');

writeFileSync('client/pages/MedicoCaseStudy.tsx', newContent, 'utf8');
console.log('Added scroll button!');
