# IRIS-AI Website Design Guidelines

## Design Approach
**Hybrid System**: Combining Linear's clean typography and hierarchy with Stripe's restrained aesthetic and modern SaaS landing page patterns. This approach balances academic credibility with technological innovation showcase.

**Key Principles:**
- Establish trust through professional polish and clarity
- Highlight innovation through modern, dynamic layouts
- Ensure information accessibility while maintaining visual interest
- Create distinct visual hierarchy between technical and impact-focused sections

---

## Typography

**Font Families** (via Google Fonts):
- Primary: Inter (headlines, UI elements) - weights 400, 500, 600, 700
- Secondary: JetBrains Mono (technical terms, code snippets) - weight 400

**Hierarchy:**
- Hero Title: 3xl/4xl/6xl (responsive), weight 700, tight leading
- Section Headers: 2xl/3xl/4xl, weight 600
- Product/Feature Titles: xl/2xl, weight 600
- Body Text: base/lg, weight 400, relaxed leading for readability
- Captions/Metadata: sm, weight 500
- Technical Terms: JetBrains Mono, sm/base

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mt-12, gap-8)

**Container Strategy:**
- Full-width sections with inner max-w-7xl for content
- Text-heavy sections: max-w-4xl for optimal reading
- Multi-column grids: max-w-6xl

**Vertical Rhythm:**
- Section padding: py-16 (mobile) / py-24 (desktop)
- Component spacing: gap-8 to gap-16
- Hero section: min-h-screen with content vertically centered

---

## Page Structure & Sections

### 1. Hero Section (Full viewport)
- Large hero image: Aerial view of South African agricultural landscape with irrigation systems visible
- Overlay: Subtle gradient (dark to transparent) for text legibility
- Content: Project title, tagline, lead organization badge, dual CTAs
- Floating stats bar at bottom: "2025-2027 | ZAR XX Million | 3 Core Products"
- Buttons on image: Blurred background treatment

### 2. Project Overview (2-column on desktop)
- Left: Concise mission statement with pull quote styling
- Right: Context cards (60-70% water use stat, semi-arid challenges)
- Visual element: Simple animated water flow illustration or infographic

### 3. Core Products (3-column grid)
- Cards with distinct visual treatments:
  - Compliance Dashboard: Icon (shield/check), title, 3-4 bullet features
  - Farmer Advisory: Icon (mobile/chat), title, features, accessibility note
  - Open Source: Icon (code/github), title, licensing info
- Hover effect: Slight lift and border emphasis

### 4. Technology & Methodology (Staggered 2-column layout)
- Left: Data sources with satellite icons (Sentinel-2, Sentinel-1, Landsat)
- Right: AI Architecture explanation with simple flowchart visual
- Bottom: Validation methods in compact 3-column grid

### 5. Impact Metrics (4-column on desktop, 2 on tablet, 1 on mobile)
- Animated counters: 30% reduction, 20% efficiency, 100% coverage
- Each metric: Large number, descriptive label, micro icon
- Background: Subtle gradient or pattern differentiation

### 6. Timeline Visualization
- Horizontal timeline: 2025 → 2027 milestones
- Interactive markers showing project phases
- Current phase highlighted

### 7. Team Section (3-column grid)
- Team member cards: Photo placeholder, name, title, expertise tags
- Organization logos below (UJ, Geomatics by MT)
- Consistent card styling with subtle shadows

### 8. Resources & Publications (2-column)
- Left: Publication links with document icons
- Right: Call-to-action for code repository access
- Note about upcoming releases

### 9. Contact & Footer
- Contact info with location, email, department details
- Quick links grid (4 columns): About, Technology, Team, Resources
- Social proof: Partner logos, certification badges
- Copyright and licensing info

---

## Component Library

**Navigation:**
- Fixed header with blur effect on scroll
- Logo/title left, navigation links center, CTA button right
- Mobile: Hamburger menu with slide-out panel

**Cards:**
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadow (shadow-md, shadow-lg on hover)
- Padding: p-6 to p-8
- Hover: transform scale-105 transition

**Buttons:**
- Primary CTA: Large (px-8 py-4), rounded-lg, weight 600
- Secondary: Outlined variant with hover fill
- Text links: Underline decoration on hover
- Blurred backgrounds when over images

**Icons:**
- Library: Lucide React icons
- Sizes: 16px (inline), 24px (cards), 48px (feature sections)
- Stroke width: 2 for consistency

**Stats/Metrics:**
- Large numbers with animated count-up effect
- Supporting label beneath
- Icon or visual accent

**Timeline:**
- Horizontal line with marker dots
- Year labels above, milestone descriptions below
- Progress indicator for current phase

---

## Images

**Required Images:**
1. **Hero**: Wide aerial photograph of South African agricultural irrigation (pivot systems, fields) - placement: full-width background, 60-70vh minimum
2. **Technology Section**: Satellite imagery comparison (Sentinel-2 optical vs SAR) - placement: inline, max-w-2xl
3. **Team Members**: Professional headshots (3 placeholders) - placement: circular crop, 200x200px
4. **Partner Logos**: University of Johannesburg, Geomatics by MT - placement: footer, 120px height

**Image Treatment:**
- Hero: Gradient overlay for text contrast
- All images: Subtle rounded corners (rounded-lg)
- Lazy loading for performance

---

## Responsive Behavior

**Breakpoints:**
- Mobile: base (stack all columns)
- Tablet: md (2-column grids where applicable)
- Desktop: lg (3-4 column grids)

**Mobile Optimizations:**
- Reduce section padding to py-12
- Stack navigation to hamburger menu
- Single column for all grids
- Reduce typography scale by 1-2 steps
- Touch-friendly tap targets (min 44px)

---

## Animations & Interactions

**Scroll Behavior:**
- Smooth scroll navigation
- Intersection Observer for fade-in on scroll (sections appear with slight upward motion)
- Parallax effect on hero image (subtle, 0.5 speed)

**Micro-interactions:**
- Button hover: Slight scale, shadow increase
- Card hover: Lift effect (translateY -4px)
- Counter animations: Count-up when visible
- Link underlines: Animated width expansion

**Performance:**
- CSS transforms only (avoid layout thrashing)
- Limit parallax to hero only
- Disable animations on mobile if performance concerns

---

## Accessibility

- Semantic HTML5 throughout
- ARIA labels for interactive elements
- Keyboard navigation support for all interactions
- Focus states visible and distinct
- Color contrast minimum WCAG AA
- Alt text for all images
- Skip-to-content link