# Tiara Website - Image Specifications & Dimensions

This document provides dimensions, file sizes, and **exact section locations** for all visuals in the Tiara website project. Use this as a reference when designing new images.

---

## 📄 INDEX.HTML (Homepage)

### 🎯 Header Section (All Pages)
**Location:** Top navigation bar, appears on all pages

#### Logo - White Version
- **File:** `images/Tiara---White-Logo.png`
- **Dimensions:** 547 x 130 pixels
- **File Size:** 6.9 KB
- **Format:** PNG
- **Aspect Ratio:** ~4:1 (wide)
- **Used In:**
  - **Menu overlay:** Mobile/desktop menu header (line 75)
  - **Header:** Main navigation logo (line 123)
- **Context:** White logo for dark backgrounds

#### Logo - Dark Version
- **File:** `images/Tiara-Logo.png`
- **Dimensions:** 445 x 106 pixels
- **File Size:** 5.6 KB
- **Format:** PNG
- **Aspect Ratio:** ~4:1 (wide)
- **Used In:**
  - **Header:** Dark logo variant (appears on scroll, line 123)
  - **Footer:** Footer logo (line 319)
- **Context:** Dark logo for light backgrounds

#### Menu Icon (Light)
- **File:** `images/menu.svg`
- **Dimensions:** 13 x 6 pixels
- **File Size:** 187 bytes
- **Format:** SVG
- **Used In:**
  - **Mobile menu button:** Top left (line 119)
  - **Desktop menu button:** Top right (line 147)
- **Context:** Hamburger menu icon

---

### 🏠 Section 01: Hero Section
**Location:** First section below header, main landing area
**Class:** `home-section-01`

#### Hero Background Image
- **File:** `images/hero.png`
- **Dimensions:** 1921 x 1080 pixels
- **File Size:** 3.8 MB
- **Format:** PNG
- **Aspect Ratio:** ~16:9 (landscape)
- **Used In:**
  - **Background:** Hero section background (set via CSS, not directly in HTML)
  - **About Page:** Hero background (`about.html` line 115)
  - **Contact Page:** Hero background (`contact.html` line 115)
- **Note:** Large file size - consider optimizing or using WebP format

#### Hero Symbol/Icon
- **File:** `images/Icon-.png`
- **Dimensions:** 79 x 177 pixels
- **File Size:** 2.3 KB
- **Format:** PNG
- **Aspect Ratio:** ~1:2 (tall)
- **Used In:**
  - **Hero Section:** Symbol displayed above main heading (line 162)
- **Context:** Decorative symbol in hero content area

---

### 📖 Section 02: About/Ritual Section
**Location:** Second section, introduction text
**Class:** `home-section-02`
**ID:** None

#### Arrow Icon (Button)
- **File:** `images/long-arrow-right.svg`
- **Dimensions:** 12 x 12 pixels
- **File Size:** 198 bytes
- **Format:** SVG
- **Used In:**
  - **"VIEW more" Button:** Arrow icon in button (lines 184-185)
  - **Contact Page:** "Book Appointment" buttons (lines 132-133, 143-144)
- **Context:** Right-pointing arrow in circular button

---

### 💆 Section 03: Services Section
**Location:** Third section, service offerings grid
**Class:** `home-section-03`
**ID:** `#services`

#### Service Image (Used 4 Times)
- **File:** `images/services/service4.png`
- **Dimensions:** 500 x 728 pixels
- **File Size:** 224 KB
- **Format:** PNG
- **Aspect Ratio:** ~2:3 (portrait)
- **Used In:**
  - **Service Card 1:** "Facial Treatments" (line 195)
  - **Service Card 2:** "Hair Styling" (line 202)
  - **Service Card 3:** "Spa Therapies" (line 209)
  - **Service Card 4:** "Beauty Rituals" (line 216)
- **Responsive Sizes Used:** 500w, 507w
- **Note:** ⚠️ Same image used for all 4 services - create unique images for each service type

---

### 🎨 Section 04: Philosophy/Materials Section
**Location:** Fourth section, tabbed content area
**Class:** `home-section-04`
**ID:** None

#### Visual 3 - "Calm"
- **File:** `images/philosophy/Visual 3.png`
- **Dimensions:** 662 x 1081 pixels
- **File Size:** 369 KB
- **Format:** PNG
- **Aspect Ratio:** ~3:5 (portrait)
- **Used In:**
  - **Tab Thumbnail:** Right sidebar tab navigation (line 229)
  - **Tab Content:** Full-size display in left content area (line 242)
- **Tab Label:** "CALM"
- **Content Title:** "THE RITUAL OF CARE"
- **Responsive Sizes Used:** 500w, 662w

#### Visual 4 - "Balance"
- **File:** `images/philosophy/Visual 4.png`
- **Dimensions:** 661 x 1080 pixels
- **File Size:** 931 KB
- **Format:** PNG
- **Aspect Ratio:** ~3:5 (portrait)
- **Used In:**
  - **Tab Thumbnail:** Right sidebar tab navigation (line 232)
  - **Tab Content:** Full-size display in left content area (line 254)
- **Tab Label:** "BALANCE"
- **Content Title:** "Life grown in silence"
- **Note:** No responsive variants specified in HTML

#### Visual 5 - "Authenticity"
- **File:** `images/philosophy/Visual 5.png`
- **Dimensions:** 1388 x 694 pixels
- **File Size:** 1.4 MB
- **Format:** PNG
- **Aspect Ratio:** ~2:1 (landscape)
- **Used In:**
  - **Tab Thumbnail:** Right sidebar tab navigation (line 235) - **DEFAULT ACTIVE TAB**
  - **Tab Content:** Full-size display in left content area (line 266)
- **Tab Label:** "AUTHENTICITY"
- **Content Title:** "Water that remembers the earth"
- **Responsive Sizes Used:** 500w, 800w, 1080w, 1388w
- **Note:** ⚠️ Different aspect ratio from Visual 3 & 4 (landscape vs portrait)

---

### 🛍️ Section 06: Products Section
**Location:** Fifth section, product gallery
**Class:** `home-section-06`
**ID:** `#products`

#### Product Image (Used 4 Times)
- **File:** `images/products/product.png`
- **Dimensions:** 1614 x 1378 pixels
- **File Size:** 995 KB
- **Format:** PNG
- **Aspect Ratio:** ~1:1 (square, slightly wider)
- **Used In:**
  - **Product Gallery Item 1:** First product card (line 293)
  - **Product Gallery Item 2:** Second product card (line 298)
  - **Product Gallery Item 3:** Third product card (line 303)
  - **Product Gallery Item 4:** Fourth product card (line 308)
- **Responsive Sizes Used:** 500w, 800w, 1080w, 1600w, 2000w
- **Note:** ⚠️ Same product image repeated 4 times - consider creating unique product images

---

### 🦶 Footer Section (All Pages)
**Location:** Bottom of page, appears on all pages
**Class:** `footer`

#### Footer Logo
- **File:** `images/Tiara-Logo.png` (same as header dark logo)
- **Used In:** Footer logo (line 319)

---

## 📄 ABOUT.HTML (About Page)

### 🎯 Header Section
**Same as homepage** - See Header Section above

### 🏠 Section 01: Hero Section
**Location:** First section below header
**Class:** `about-section-01`

#### Hero Background Image
- **File:** `images/hero.png` (same as homepage)
- **Used In:** Background image via inline CSS (line 115)
- **Context:** "ABOUT TIARA BEAUTY" heading overlay

---

### 📖 Section 02: Introduction Section
**Location:** Second section, text content
**Class:** `home-section-02`
**ID:** `#section`

#### Tiara Icon
- **File:** `images/Tiara-Icon.png`
- **Dimensions:** 47 x 106 pixels
- **File Size:** 1.4 KB
- **Format:** PNG
- **Aspect Ratio:** ~1:2 (tall)
- **Used In:**
  - **About Page:** Introduction section symbol (line 122)
- **Context:** Small icon displayed above text content

---

### 🌿 Section 03: Root of Identity Section
**Location:** Third section, image with text
**Class:** `about-section-03`

#### Orla12 Image (Banana Tree) - Main
- **File:** `images/orla12.webp`
- **Dimensions:** 2000 x 3000 pixels
- **File Size:** 1.6 MB
- **Format:** WebP
- **Aspect Ratio:** 2:3 (portrait)
- **Used In:**
  - **About Page:** Main hero image in "Root of Identity" section (line 133)
- **Content Title:** "THE ROOT OF OUR IDENTITY"
- **Responsive Variants:**
  - `images/orla12-p-500.webp` - 500 x 750 pixels (89 KB)
  - `images/orla12-p-800.webp` - 800 x 1200 pixels (206 KB)
  - `images/orla12-p-1080.webp` - 1080 x 1620 pixels (314 KB)
  - `images/orla12-p-1600.webp` - 1600 x 2400 pixels (483 KB)
  - `images/orla12.webp` - 2000 x 3000 pixels (1.6 MB) - Main

---

### 👥 Section 06: Team Section
**Location:** Fourth section, team gallery
**Class:** `home-section-06`
**ID:** None

#### Team Photoshoot (Used 4 Times)
- **File:** `images/team/photoshoot.jpg`
- **Dimensions:** 640 x 800 pixels
- **File Size:** 41 KB
- **Format:** JPEG
- **Aspect Ratio:** 4:5 (portrait)
- **Used In:**
  - **Team Gallery Item 1:** First team photo (line 155)
  - **Team Gallery Item 2:** Second team photo (line 156)
  - **Team Gallery Item 3:** Third team photo (line 157)
  - **Team Gallery Item 4:** Fourth team photo (line 158)
- **Section Title:** "Meet the Tiara Artisans"
- **Responsive Sizes Used:** 500w, 800w, 1080w, 1600w, 2000w
- **Note:** ⚠️ Low resolution - consider higher quality version (at least 1080w). Same image repeated 4 times.

---

### 🦶 Footer Section
**Same as homepage** - See Footer Section above

---

## 📄 CONTACT.HTML (Contact Page)

### 🎯 Header Section
**Same as homepage** - See Header Section above

### 🏠 Section 01: Hero Section
**Location:** First section below header
**Class:** `store-section-01`

#### Hero Background Image
- **File:** `images/hero.png` (same as homepage)
- **Used In:** Background image with gradient overlay via inline CSS (line 115)
- **Context:** "Where Beauty Meets You" heading overlay

#### Arrow Icon (Button)
- **File:** `images/long-arrow-right.svg` (same as homepage)
- **Used In:** "Find Tiara's sanctuaries..." button (lines 132-133, 143-144)

### 🦶 Footer Section
**Same as homepage** - See Header Section above

---

## 🔧 Global UI Elements (All Pages)

### Favicon
- **File:** `images/favicon.png`
- **Dimensions:** 32 x 32 pixels
- **File Size:** 557 bytes
- **Format:** PNG
- **Used In:** Browser tab icon (all pages, in `<head>`)

### Web Clip (Apple Touch Icon)
- **File:** `images/webclip.png`
- **Dimensions:** 256 x 256 pixels
- **File Size:** 5.7 KB
- **Format:** PNG
- **Used In:** iOS home screen icon (all pages, in `<head>`)

### Menu Icon (Dark)
- **File:** `images/menu-dark.svg`
- **Dimensions:** 12 x 6 pixels
- **File Size:** 179 bytes
- **Format:** SVG
- **Note:** Defined but may not be actively used (check CSS for dark menu variant)

---

## 📊 Visual Usage Summary by Section

### Homepage (index.html)
1. **Hero Section** → `Icon-.png` (symbol)
2. **About/Ritual Section** → `long-arrow-right.svg` (button)
3. **Services Section** → `service4.png` (×4 service cards)
4. **Philosophy Section** → `Visual 3.png`, `Visual 4.png`, `Visual 5.png` (tabbed content)
5. **Products Section** → `product.png` (×4 product cards)

### About Page (about.html)
1. **Hero Section** → `hero.png` (background)
2. **Introduction Section** → `Tiara-Icon.png` (symbol)
3. **Root of Identity** → `orla12.webp` + responsive variants (main image)
4. **Team Section** → `team/photoshoot.jpg` (×4 team photos)

### Contact Page (contact.html)
1. **Hero Section** → `hero.png` (background with gradient)
2. **Store List** → `long-arrow-right.svg` (×2 booking buttons)

### Global (All Pages)
- **Header** → `Tiara---White-Logo.png`, `Tiara-Logo.png`, `menu.svg`
- **Footer** → `Tiara-Logo.png`
- **Browser** → `favicon.png`, `webclip.png`

---

## 📊 Summary by Category

### Large Visuals (Hero/Background)
- **Hero Background:** `hero.png` - **1921 x 1080** (16:9 landscape)
  - Used on: Homepage, About Page, Contact Page
- **Orla12:** `orla12.webp` - **2000 x 3000** (2:3 portrait) - with responsive variants
  - Used on: About Page only

### Philosophy Visuals
- **Visual 3 (Calm):** **662 x 1081** (3:5 portrait) - Homepage Philosophy Section
- **Visual 4 (Balance):** **661 x 1080** (3:5 portrait) - Homepage Philosophy Section
- **Visual 5 (Authenticity):** **1388 x 694** (2:1 landscape) ⚠️ Different aspect ratio - Homepage Philosophy Section

### Product/Service Visuals
- **Products:** `product.png` - **1614 x 1378** (~1:1 square) - Homepage Products Section (×4)
- **Services:** `service4.png` - **500 x 728** (2:3 portrait) - Homepage Services Section (×4)

### Team Visuals
- **Team Photo:** `photoshoot.jpg` - **640 x 800** (4:5 portrait) ⚠️ Low resolution - About Page Team Section (×4)

### Branding
- **Logos:** `Tiara---White-Logo.png` (547×130), `Tiara-Logo.png` (445×106) - Header/Footer (all pages)
- **Icons:** `Icon-.png` (79×177), `Tiara-Icon.png` (47×106) - Hero/About sections
- **UI Icons:** `menu.svg`, `long-arrow-right.svg` - Navigation/Buttons (all pages)

---

## 🎨 Design Recommendations

### For New Visuals:

1. **Philosophy Section (Homepage):**
   - Visual 3 & 4: Maintain **662 x 1081** (3:5 portrait) for consistency
   - Visual 5: Consider if landscape format is intentional, or create portrait version to match others
   - **Location:** `home-section-04` - Tabbed content area

2. **Services Section (Homepage):**
   - Create unique images for each service at **500 x 728** (2:3 portrait)
   - Or create higher resolution base: **1000 x 1456** for better quality
   - **Location:** `home-section-03` - Service cards grid
   - **Services:** Facial Treatments, Hair Styling, Spa Therapies, Beauty Rituals

3. **Products Section (Homepage):**
   - Maintain **~1:1 square** format (1614 x 1378 or similar)
   - Consider creating multiple product images instead of repeating one
   - **Location:** `home-section-06` - Product gallery

4. **Team Section (About Page):**
   - Upgrade to higher resolution: **1080 x 1350** minimum (maintaining 4:5 aspect ratio)
   - Create multiple team photos if needed
   - **Location:** `home-section-06` - Team gallery

5. **Hero Background (All Pages):**
   - Optimize `hero.png` (currently 3.8MB)
   - Consider WebP format for better compression
   - **Used on:** Homepage, About Page, Contact Page

6. **File Format Recommendations:**
   - Use **WebP** for large images (better compression)
   - Use **PNG** for logos and graphics with transparency
   - Use **SVG** for icons and simple graphics
   - Use **JPEG** for photos (but ensure high quality)

7. **Responsive Image Strategy:**
   - Create multiple sizes: 500w, 800w, 1080w, 1600w, 2000w
   - Use WebP format for better compression
   - Maintain aspect ratios across all sizes

---

## 📝 Critical Notes

- ⚠️ **Service images:** Same image (`service4.png`) used for all 4 services - create unique visuals
- ⚠️ **Product images:** Same image (`product.png`) repeated 4 times - create unique product photos
- ⚠️ **Team photos:** Same image (`photoshoot.jpg`) repeated 4 times - create multiple team photos
- ⚠️ **Team photo resolution:** Low (640×800) - upgrade to at least 1080×1350
- ⚠️ **Philosophy Visual 5:** Different aspect ratio (landscape) vs others (portrait) - consider consistency
- ⚠️ **Hero image size:** Very large (3.8MB) - optimize or convert to WebP
- ✅ **Orla12 series:** Good example of responsive image implementation with WebP format

---

## 🔍 Quick Reference: Image Locations

| Image File | Page | Section | Specific Location |
|------------|------|---------|-------------------|
| `hero.png` | All | Hero | Background image |
| `Icon-.png` | Homepage | Hero | Symbol above heading |
| `service4.png` | Homepage | Services | 4 service cards |
| `Visual 3.png` | Homepage | Philosophy | Tab 1 (Calm) |
| `Visual 4.png` | Homepage | Philosophy | Tab 2 (Balance) |
| `Visual 5.png` | Homepage | Philosophy | Tab 3 (Authenticity) - Default |
| `product.png` | Homepage | Products | 4 product cards |
| `orla12.webp` | About | Root Section | Main image |
| `Tiara-Icon.png` | About | Intro | Symbol above text |
| `photoshoot.jpg` | About | Team | 4 team photos |
| `Tiara---White-Logo.png` | All | Header | Menu & header logo |
| `Tiara-Logo.png` | All | Header/Footer | Dark logo variant |
| `menu.svg` | All | Header | Menu button icon |
| `long-arrow-right.svg` | All | Buttons | Arrow in buttons |
