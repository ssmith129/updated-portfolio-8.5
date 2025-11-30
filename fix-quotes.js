import { readFileSync, writeFileSync } from 'fs';

const filePath = 'client/pages/MedicoCaseStudy.tsx';
let content = readFileSync(filePath, 'utf8');

// Replace smart quotes with regular quotes
content = content.replace(/"/g, '"');  // left double quote
content = content.replace(/"/g, '"');  // right double quote
content = content.replace(/'/g, "'");  // left single quote
content = content.replace(/'/g, "'");  // right single quote

writeFileSync(filePath, content, 'utf8');
console.log('Fixed smart quotes in MedicoCaseStudy.tsx');
