#!/usr/bin/env node
/**
 * Pre-launch check for a clinic site built from this template.
 *   npm run check:launch
 * Fails (exit 1) on anything that must not go live; warns on things a human should confirm.
 * Why: a reference clinic site shipped its accessibility statement with "[יש לעדכן]" still in it.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const files = ['src/site.config.ts', 'src/content/he.ts', 'src/content/en.ts'];
const errors = [];
const warnings = [];

const DEMO = [
  'example-clinic.co.il', 'example.co.il', '03-000-000', '972500000000', '+97230000000',
  "'12345'", "'6789'", 'מיכל אורן', 'Michal Oren', 'Rothschild', 'רוטשילד', '[יש לעדכן]', 'TODO',
];
const ADS = [
  // Physicians Regulations (Prohibited Advertising) 2008
  ['המלצות', 'testimonials are not allowed'], ['testimonial', 'testimonials are not allowed'],
  ['הטוב ביותר', 'superlatives are not allowed'], ['the best', 'superlatives are not allowed'],
  ['מוביל', 'superlatives are not allowed'], ['leading', 'superlatives are not allowed'],
  ['הנחה', 'discounts are not allowed'], ['discount', 'discounts are not allowed'],
  ['₪', 'prices are not allowed'], ['מחיר', 'prices are not allowed'],
  ['תמונות לפני', 'before/after photos are not allowed'], ['before-and-after photo', 'before/after photos are not allowed'],
  ['אחוזי הצלחה', 'success rates need Ministry approval'], ['success rate', 'success rates need Ministry approval'],
];

for (const f of files) {
  const lines = readFileSync(join(root, f), 'utf8').split('\n');
  lines.forEach((line, i) => {
    const code = line.replace(/\/\/.*$/, '').replace(/^\s*\*.*$/, '');
    for (const d of DEMO) if (code.includes(d)) errors.push(`${f}:${i + 1}  demo value still present: ${d}`);
    for (const [w, why] of ADS) if (code.toLowerCase().includes(w.toLowerCase())) warnings.push(`${f}:${i + 1}  "${w}" – ${why}`);
    if (/מומח[הי]ת?|Specialist/.test(code) && /specialty/.test(code))
      warnings.push(`${f}:${i + 1}  specialist title – confirm it is approved by the Ministry of Health`);
  });
}

for (const f of ['src/content/he.ts', 'src/content/en.ts']) {
  if (readFileSync(join(root, f), 'utf8').includes('UPDATE after testing'))
    warnings.push(`${f}  statement.tested: list only the browsers and screen readers really tested, then delete the UPDATE comment`);
}

const cfg = readFileSync(join(root, 'src/site.config.ts'), 'utf8');
if (/showcase:\s*true/.test(cfg)) errors.push('site.config.ts  showcase: true – turn it off for a real clinic');
if (/images\.unsplash\.com|images\.pexels\.com/.test(cfg)) warnings.push('site.config.ts  stock photos are still hotlinked – use the clinic\'s own photos in /public/images');
if (/formEndpoint:\s*''/.test(cfg) && /bookingUrl:\s*''/.test(cfg)) warnings.push('site.config.ts  no formEndpoint or bookingUrl – the form will open an email draft');
const date = cfg.match(/statementUpdated:\s*'(\d{4}-\d{2}-\d{2})'/)?.[1];
if (!date) errors.push('site.config.ts  accessibility.statementUpdated is missing');
else if ((Date.now() - new Date(date).getTime()) / 864e5 > 365) warnings.push(`site.config.ts  accessibility statement last reviewed ${date} – review it again`);
if (!/coordinatorPhone:\s*'[^']+'/.test(cfg) || !/coordinatorEmail:\s*'[^']+'/.test(cfg)) errors.push('site.config.ts  accessibility contact phone and email are required');

const out = (label, list) => list.length && console.log(`\n${label} (${list.length})\n  ${list.join('\n  ')}`);
out('✗ Must fix before launch', errors);
out('! Confirm with a person', warnings);
console.log(errors.length ? '\nNot ready to launch.\n' : '\nNo blocking issues. Also run the manual checks in README.md.\n');
process.exit(errors.length ? 1 : 0);
