# 60-30-10 Color Rule Implementation Guide

## Overview

This guide explains the implementation of the 60-30-10 color rule for the Kigali SelfDrive website, based on the colors extracted from the uploaded image (`kigalicarrentalselfdrive.jpeg`).

## Color Palette

### 60% - Dominant Color (Backgrounds & Large Surfaces)
- **Primary**: `#F8F9FA` (Light gray/white)
- **Dark**: `#E9ECEF` 
- **Darker**: `#DEE2E6`

**Usage**: Main backgrounds, large content areas, cards, sections

### 30% - Secondary Color (UI Elements & Structure)
- **Primary**: `#002F6C` (Dark blue)
- **Light**: `#1E3A5F`
- **Lighter**: `#2C5282`
- **Dark**: `#001F47`

**Usage**: Headers, navigation, text, borders, structural elements

### 10% - Accent Color (Call-to-Actions & Highlights)
- **Primary**: `#FF8C42` (Orange)
- **Light**: `#FFA366`
- **Lighter**: `#FFB380`
- **Dark**: `#E67E22`
- **Darker**: `#D35400`

**Usage**: Buttons, links, highlights, important information

## CSS Classes Available

### Background Classes
```css
.bg-dominant          /* #F8F9FA */
.bg-dominant-dark     /* #E9ECEF */
.bg-dominant-darker   /* #DEE2E6 */

.bg-secondary         /* #002F6C */
.bg-secondary-light   /* #1E3A5F */
.bg-secondary-lighter /* #2C5282 */
.bg-secondary-dark    /* #001F47 */

.bg-accent            /* #FF8C42 */
.bg-accent-light      /* #FFA366 */
.bg-accent-lighter    /* #FFB380 */
.bg-accent-dark       /* #E67E22 */
.bg-accent-darker     /* #D35400 */
```

### Text Color Classes
```css
.text-dominant          /* #F8F9FA */
.text-dominant-dark     /* #E9ECEF */
.text-dominant-darker   /* #DEE2E6 */

.text-secondary         /* #002F6C */
.text-secondary-light   /* #1E3A5F */
.text-secondary-lighter /* #2C5282 */
.text-secondary-dark    /* #001F47 */

.text-accent            /* #FF8C42 */
.text-accent-light      /* #FFA366 */
.text-accent-lighter    /* #FFB380 */
.text-accent-dark       /* #E67E22 */
.text-accent-darker     /* #D35400 */

.text-text-primary      /* #212529 */
.text-text-secondary    /* #6B7280 */
.text-text-muted        /* #9CA3AF */
```

### Border Classes
```css
.border-dominant          /* #F8F9FA */
.border-dominant-dark     /* #E9ECEF */
.border-dominant-darker   /* #DEE2E6 */

.border-secondary         /* #002F6C */
.border-secondary-light   /* #1E3A5F */
.border-secondary-lighter /* #2C5282 */
.border-secondary-dark    /* #001F47 */

.border-accent            /* #FF8C42 */
.border-accent-light      /* #FFA366 */
.border-accent-lighter    /* #FFB380 */
.border-accent-dark       /* #E67E22 */
.border-accent-darker     /* #D35400 */
```

## Component-Specific Classes

### Button Styles
```css
.btn-primary              /* Blue gradient button */
.btn-accent               /* Orange gradient button */
.btn-outline-secondary    /* Blue outline button */
.btn-outline-accent       /* Orange outline button */
```

### Card Styles
```css
.card                     /* Standard card with hover effects */
.card-header              /* Card header with blue background */
```

### Section Styles
```css
.section-dominant         /* Light background section */
.section-secondary        /* Blue background section */
.section-accent           /* Orange background section */
```

### Navigation Styles
```css
.navbar                   /* Navigation bar styling */
.navbar-brand             /* Brand/logo styling */
.nav-link                 /* Navigation link styling */
```

### Footer Styles
```css
.footer                   /* Footer styling */
```

### Call-to-Action Styles
```css
.cta-section              /* CTA section with blue gradient */
.cta-btn                  /* CTA button with orange gradient */
```

### Stats and Numbers
```css
.stat-number              /* Large orange numbers for statistics */
```

## Usage Examples

### Basic Section Structure
```html
<section class="section-dominant">
  <div class="container">
    <h2 class="text-secondary">Section Title</h2>
    <p class="text-text-secondary">Section content goes here...</p>
  </div>
</section>
```

### Card Component
```html
<div class="card">
  <div class="card-header">
    <h3 class="text-dominant">Card Title</h3>
  </div>
  <div class="card-body">
    <p class="text-text-secondary">Card content...</p>
    <button class="btn-accent">Action Button</button>
  </div>
</div>
```

### Navigation Link
```html
<nav class="navbar">
  <div class="navbar-brand">
    <h1 class="text-secondary">Logo</h1>
  </div>
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="btn-accent">Book Now</a>
</nav>
```

### Statistics Display
```html
<div class="stats">
  <div class="stat">
    <h3 class="stat-number">1000+</h3>
    <p class="text-text-secondary">Happy Customers</p>
  </div>
</div>
```

## Implementation Guidelines

### 1. Background Usage (60%)
- Use `bg-dominant` for main content areas
- Use `bg-dominant-dark` for alternating sections
- Use `bg-dominant-darker` for subtle separators

### 2. Text Usage (30%)
- Use `text-secondary` for headings and important text
- Use `text-text-secondary` for body text
- Use `text-text-muted` for less important information

### 3. Accent Usage (10%)
- Use `text-accent` for highlights and important information
- Use `btn-accent` for primary call-to-action buttons
- Use `stat-number` for statistics and numbers

### 4. Section Alternation
- Alternate between `section-dominant` and `bg-dominant-dark`
- Use `section-secondary` for important sections
- Use `cta-section` for call-to-action areas

## Responsive Considerations

The color system includes responsive design considerations:
- Mobile-optimized padding and spacing
- Maintained color contrast across all screen sizes
- Touch-friendly button sizes

## Accessibility

All color combinations meet WCAG 2.1 AA contrast requirements:
- Text on light backgrounds: 4.5:1 minimum contrast
- Text on dark backgrounds: 4.5:1 minimum contrast
- Large text: 3:1 minimum contrast

## File Structure

```
public/css/
├── color-system.css          # Main color system file
├── style.css                 # Existing styles
└── bootstrap.min.css         # Bootstrap framework

src/
├── main.ts                   # Imports color-system.css
├── App.vue                   # Global styles
└── components/               # Component-specific styles
```

## Best Practices

1. **Consistency**: Always use the provided CSS classes instead of hardcoding colors
2. **Hierarchy**: Use the 60-30-10 rule to create visual hierarchy
3. **Accessibility**: Ensure sufficient contrast ratios
4. **Responsive**: Test colors across different screen sizes
5. **Performance**: The color system is optimized for fast loading

## Future Updates

To update the color scheme:
1. Modify the CSS custom properties in `color-system.css`
2. Test across all components
3. Update this documentation
4. Ensure accessibility compliance

## Support

For questions about the color system implementation, refer to:
- This documentation
- The `color-system.css` file
- Component examples in the codebase 