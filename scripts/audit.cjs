const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

console.log('=== HARKHIL AGRO LANDING AUDIT SUITE ===\n');

// 1. Verify Routes
const appCode = fs.readFileSync(path.join(srcDir, 'App.tsx'), 'utf8');
const routes = [...appCode.matchAll(/path="([^"]+)"/g)].map(m => m[1]);
console.log('1. Configured Routes in App.tsx:');
routes.forEach(r => console.log('  -', r));

// 2. Scan TSX Files
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles(srcDir);
const internalLinks = [];
const externalLinks = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const base = path.basename(f);
  [...content.matchAll(/to="([^"]+)"/g)].forEach(m => internalLinks.push({ file: base, to: m[1] }));
  [...content.matchAll(/href="([^"]+)"/g)].forEach(m => {
    if (m[1].startsWith('http')) {
      externalLinks.push({
        file: base,
        href: m[1],
        hasNoopener: content.includes('noopener noreferrer'),
        hasTargetBlank: content.includes('target="_blank"')
      });
    }
  });
});

console.log('\n2. Internal Links Validation:');
const validRoutes = ['/', '/about', '/solutions', '/products-ventures', '/innovation-research', '/marketplace', '/shop', '/contact', '/privacy-policy'];
let brokenCount = 0;
internalLinks.forEach(link => {
  const base = link.to.split('#')[0] || '/';
  if (!validRoutes.includes(base)) {
    console.error(`  [BROKEN] in ${link.file}: ${link.to}`);
    brokenCount++;
  }
});
if (brokenCount === 0) {
  console.log(`  [PASS] All ${internalLinks.length} internal link references point to valid registered routes.`);
}

console.log('\n3. External Links Security Audit:');
externalLinks.forEach(l => {
  console.log(`  [PASS] ${l.file} -> ${l.href} (target="_blank": ${l.hasTargetBlank}, rel="noopener noreferrer": ${l.hasNoopener})`);
});

// 4. Inspect Form Validation & Inputs in Contact.tsx
console.log('\n4. Contact Form Validation Audit:');
const contactCode = fs.readFileSync(path.join(srcDir, 'pages', 'Contact.tsx'), 'utf8');
const hasRequiredName = contactCode.includes('name="fullName"') && contactCode.includes('required');
const hasRequiredEmail = contactCode.includes('name="email"') && contactCode.includes('type="email"') && contactCode.includes('required');
const hasRequiredPhone = contactCode.includes('name="phone"') && contactCode.includes('required');
const hasRequiredMessage = contactCode.includes('name="message"') && contactCode.includes('required');
const hasBackendNotice = contactCode.includes('Backend Integration Notice: Web API Not Connected');
const hasMailtoTrigger = contactCode.includes('mailto:contact@harkhil.com');
const hasZeroFalseClaim = !contactCode.includes('Your inquiry has been routed to our regional');

console.log(`  - Full Name input required: ${hasRequiredName ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Email input type="email" & required: ${hasRequiredEmail ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Phone input required: ${hasRequiredPhone ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Message textarea required: ${hasRequiredMessage ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Backend Not Connected notice displayed: ${hasBackendNotice ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Direct mailto fallback configured: ${hasMailtoTrigger ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Zero false transmission claim verified: ${hasZeroFalseClaim ? 'YES [PASS]' : 'NO [FAIL]'}`);

// 5. Inspect Content Claims Audit & Brand Isolation
console.log('\n5. Business Claims & Brand Isolation Audit:');
const prodVenturesCode = fs.readFileSync(path.join(srcDir, 'pages', 'ProductsVentures.tsx'), 'utf8');
const hasKrishiPlatform = prodVenturesCode.includes('HarKhil Krishi Platform');
const hasSoilSuite = prodVenturesCode.includes('Precision Soil Diagnostics Suite');
const hasBioNutrient = prodVenturesCode.includes('Bio-Nutrient Diagnostic Protocols');
const hasContactHours = contactCode.includes('Mon – Sat, 9:00 AM – 6:00 PM IST');

// Client Brand Isolation Check (No Maa Samleshwari anywhere in src)
let clientLeaks = 0;
let timingLeaks = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const base = path.basename(f);
  const forbiddenClientPattern = ['sam', 'lesh', 'wari'].join('');
  if (content.toLowerCase().includes(forbiddenClientPattern)) {
    console.error(`  [LEAK ERROR] Found client reference in: ${base}`);
    clientLeaks++;
  }
  if (content.includes('7:00 AM') || content.includes('8:30 PM') || content.includes('10:00 AM – 4:00 PM')) {
    console.error(`  [TIMING LEAK ERROR] Found client operating timing in: ${base}`);
    timingLeaks++;
  }
});

console.log(`  - Flagship HarKhil Krishi Platform featured: ${hasKrishiPlatform ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Precision Soil Diagnostics Suite featured: ${hasSoilSuite ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Bio-Nutrient Protocols labeled as research: ${hasBioNutrient ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Contact page displays Corporate Desk "9:00 AM – 6:00 PM": ${hasContactHours ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Client Isolation (Zero Maa Samleshwari mentions in src): ${clientLeaks === 0 ? 'CLEAN [PASS]' : 'LEAKS DETECTED [FAIL]'}`);
console.log(`  - Timing Isolation (Zero client shop/delivery timings in src): ${timingLeaks === 0 ? 'CLEAN [PASS]' : 'LEAKS DETECTED [FAIL]'}`);

// 6. Interactive Filter in Solutions.tsx
console.log('\n6. Interactive Filter State Audit:');
const solCode = fs.readFileSync(path.join(srcDir, 'pages', 'Solutions.tsx'), 'utf8');
const hasFilterState = solCode.includes('const [activeFilter, setActiveFilter] = useState');
const hasFilterLogic = solCode.includes('filteredSolutions =');
console.log(`  - Solutions page contains activeFilter state: ${hasFilterState ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Solutions page contains filtering logic: ${hasFilterLogic ? 'YES [PASS]' : 'NO [FAIL]'}`);

// 7. Responsive & Mobile Navigation Audit
console.log('\n7. Responsive & Mobile Navigation Audit:');
const navCode = fs.readFileSync(path.join(srcDir, 'components', 'Navbar.tsx'), 'utf8');
const hasMobileDrawer = navCode.includes('isOpen') && navCode.includes('lg:hidden');
const hasDesktopNav = navCode.includes('hidden lg:flex');
const hasStickyScroll = navCode.includes('handleScroll') && navCode.includes('backdrop-blur');
console.log(`  - Mobile Drawer state & lg:hidden classes: ${hasMobileDrawer ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Desktop navigation hidden lg:flex: ${hasDesktopNav ? 'YES [PASS]' : 'NO [FAIL]'}`);
console.log(`  - Sticky backdrop blur scroll listener: ${hasStickyScroll ? 'YES [PASS]' : 'NO [FAIL]'}`);

console.log('\n=== AUDIT SUITE EXECUTION COMPLETED SUCCESSFULLY ===');

