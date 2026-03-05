# Liquid Glass Theme Migration Guide

This guide explains how to integrate the new liquid glass themed screens into an existing SkyCMS or ASP.NET Core Razor Pages project.

---

## 📋 Overview

The liquid glass theme has been applied to the following new screens:
- **Page Inventory** - Web page management interface
- **Publish Website** - Website deployment interface
- **Template Inventory** - Page template management
- **Editor Setup** - Configuration settings
- **CDN Setup** - Content Delivery Network configuration

Each screen features:
- ✨ Beautiful glassmorphic design with light/bright theme
- 🎯 **Unique container classnames** for easy CSS targeting
- 📱 Responsive layout
- ♿ Accessible markup
- 🎨 Font Awesome icons with check marks (not text markers)

---

## 🎨 Unique Classnames Reference

Each screen has a unique top-level container classname for targeted styling:

| Screen | Body Class | Container Class |
|--------|-----------|-----------------|
| Page Inventory | `wizard-step-page-inventory` | `page-inventory-container` |
| Publish Website | `wizard-step-publish-website` | `publish-website-container` |
| Template Inventory | `wizard-step-template-inventory` | `template-inventory-container` |
| Editor Setup | `wizard-step-editor-setup` | `editor-setup-container` |
| CDN Setup | `wizard-step-cdn-setup` | `cdn-setup-container` |
| Demo Home | `wizard-step-demo-home` | `demo-home-container` |

**Example CSS targeting:**
```css
/* Target specific screen */
.page-inventory-container {
  /* Custom styles for page inventory only */
}

/* Or target by body class */
body.wizard-step-publish-website {
  /* Custom background for publish screen */
}
```

---

## 📁 Files Created in SkyWizardDemo

### Razor Pages (Pages/)
```
Pages/
├── PageInventory.cshtml          # NEW - Web page management
├── PublishWebsite.cshtml          # NEW - Publishing interface
├── TemplateInventory.cshtml       # NEW - Template management
├── EditorSetup.cshtml             # NEW - Editor configuration
├── CdnSetup.cshtml                # NEW - CDN configuration
└── Index.cshtml                   # UPDATED - Navigation hub
```

### JavaScript Files (wwwroot/js/)
```
wwwroot/js/
├── page-inventory.js              # NEW - Tabulator table integration
├── publish-website.js             # NEW - SignalR publishing progress
├── editor-setup.js                # NEW - Form handling
└── cdn-setup.js                   # NEW - CDN form handling
```

### Styles & Assets (wwwroot/)
```
wwwroot/
├── theme/css/sky-hero-d.css       # COPIED - Main theme stylesheet
└── img/                           # COPIED - Background images & assets
```

---

## 🚀 Migration Steps

### Step 1: Copy Theme Files

Copy the liquid glass theme files to your project:

```bash
# Copy theme CSS
Copy-Item -Path "theme/css/sky-hero-d.css" -Destination "YourProject/wwwroot/theme/css/" -Force

# Copy images
Copy-Item -Path "img/*" -Destination "YourProject/wwwroot/img/" -Recurse -Force
```

### Step 2: Install Client Libraries

Add the required client-side libraries using LibMan or CDN:

**Option A: Using LibMan (Recommended)**
```bash
# Navigate to your project
cd YourProject

# Restore libraries from libman.json
libman restore
```

**Option B: Using CDN (Quick Start)**

The layout already includes CDN references, but for offline support:
- Bootstrap 5.3.2
- Font Awesome 6.5.2
- jQuery 3.7.1
- Tabulator 5.5.2
- Luxon 3.4.4

### Step 3: Copy Layout File

Ensure you have the `_LayoutSetup.cshtml` file:

```bash
Copy-Item -Path "SkyWizardDemo/Pages/Shared/_LayoutSetup.cshtml" -Destination "YourProject/Pages/Shared/" -Force
```

Key features of the layout:
- References `~/theme/css/sky-hero-d.css`
- Includes Font Awesome 6.5.2
- Bootstrap 5.3.2
- Dynamic body class from ViewData

### Step 4: Copy Page Files

Copy the new screen files to your Pages directory:

```bash
# Copy all new pages
Copy-Item -Path "SkyWizardDemo/Pages/PageInventory.cshtml" -Destination "YourProject/Pages/"
Copy-Item -Path "SkyWizardDemo/Pages/PublishWebsite.cshtml" -Destination "YourProject/Pages/"
Copy-Item -Path "SkyWizardDemo/Pages/TemplateInventory.cshtml" -Destination "YourProject/Pages/"
Copy-Item -Path "SkyWizardDemo/Pages/EditorSetup.cshtml" -Destination "YourProject/Pages/"
Copy-Item -Path "SkyWizardDemo/Pages/CdnSetup.cshtml" -Destination "YourProject/Pages/"
```

### Step 5: Copy JavaScript Files

```bash
# Copy JS functionality
Copy-Item -Path "SkyWizardDemo/wwwroot/js/page-inventory.js" -Destination "YourProject/wwwroot/js/"
Copy-Item -Path "SkyWizardDemo/wwwroot/js/publish-website.js" -Destination "YourProject/wwwroot/js/"
Copy-Item -Path "SkyWizardDemo/wwwroot/js/editor-setup.js" -Destination "YourProject/wwwroot/js/"
Copy-Item -Path "SkyWizardDemo/wwwroot/js/cdn-setup.js" -Destination "YourProject/wwwroot/js/"
```

### Step 6: Update Navigation (Optional)

Update your main navigation or create a demo page like `Index.cshtml` to link to the new screens.

---

## 🔧 Integration with Existing Projects

### For SkyCMS Projects

If integrating into an existing SkyCMS installation:

1. **Update Controllers/Page Models**: Connect the pages to your existing data services
2. **Replace API Endpoints**: Update placeholder endpoints in JS files with your actual API routes
3. **Add Authorization**: Apply `[Authorize]` attributes as needed
4. **Update Routes**: Ensure routing matches your existing structure

### Example Integration Points

**PageInventory.cshtml** - Connect to your article repository:
```csharp
@inject IArticleRepository ArticleRepo

// Replace sample data in JS with actual API endpoint:
ajaxURL: "@Url.Action("GetArticleList", "Editor")?publishedOnly=false"
```

**PublishWebsite.cshtml** - Connect to your publishing service:
```csharp
@inject IPublishingService Publisher

// Update JS endpoints:
const response = await fetch('@Url.Action("PublishStaticPages", "Editor")', {...});
```

**EditorSetup.cshtml** - Bind to your configuration model:
```csharp
@model EditorConfig

<input asp-for="PublisherUrl" class="form-control" />
```

---

## 🎨 Customization

### Targeting Specific Screens

Use the unique classnames to customize individual screens:

```css
/* Custom styles for Page Inventory */
.page-inventory-container .wizard-card {
  /* Override card styles */
}

/* Custom styles for Publish Website */
.publish-website-container .btn-sky-primary {
  /* Override button styles */
}
```

### Theme Color Adjustments

The theme uses CSS variables defined in `sky-hero-d.css`:

```css
:root {
  --wizard-text: #10233d;
  --wizard-muted: #39597d;
  --wizard-card-bg: rgba(233, 241, 251, 0.58);
  --wizard-primary-a: #3996ff;
  --wizard-primary-b: #2a74ff;
  /* ... more variables */
}
```

Override these in your own stylesheet for custom branding.

---

## 📦 Dependencies

### Required NuGet Packages

For full functionality (server-side):
```xml
<PackageReference Include="Microsoft.AspNetCore.SignalR" Version="1.1.0" />
```

### Required Client Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| Bootstrap | 5.3.2 | UI Framework |
| Font Awesome | 6.5.2 | Icons |
| jQuery | 3.7.1 | DOM manipulation |
| Tabulator | 5.5.2 | Data tables (Page/Template Inventory) |
| Luxon | 3.4.4 | Date handling |
| SignalR | Latest | Real-time progress (Publish Website) |

---

## ✅ Testing Checklist

After migration, verify:

- [ ] All pages load with correct liquid glass theme
- [ ] Font Awesome icons display correctly (check marks, not text)
- [ ] Forms submit and validate properly
- [ ] Tabulator tables render (Page/Template Inventory)
- [ ] Publishing progress bar updates (if SignalR is configured)
- [ ] Responsive layout works on mobile
- [ ] All navigation links work
- [ ] CSS variables apply correctly
- [ ] Unique container classnames are present

---

## 🐛 Troubleshooting

### Issue: Theme doesn't apply

**Check:**
1. `sky-hero-d.css` is copied to `wwwroot/theme/css/`
2. `_LayoutSetup.cshtml` references the CSS file correctly
3. Pages use `Layout = "_LayoutSetup"`
4. ViewData["BodyClass"] is set

### Issue: Icons don't show

**Check:**
1. Font Awesome CDN link in `_LayoutSetup.cshtml`
2. Icon classes use `fa-solid`, `fa-brands`, etc.
3. Network allows CDN access

### Issue: Tabulator table doesn't load

**Check:**
1. Tabulator CSS and JS files are loaded
2. Luxon.js is loaded before Tabulator
3. Element ID `#pagelist-table` exists
4. `page-inventory.js` is included in Scripts section

### Issue: Background images missing

**Check:**
1. Images copied to `wwwroot/img/`
2. Paths in CSS: `url("../../img/HeroBackground.jpg")`
3. File names match exactly (case-sensitive)

---

## 🌟 Features by Screen

### Page Inventory
- Tabulator data table with sorting/filtering
- Inline edit/view/clone actions
- Send to trash functionality
- Sample data included for demo

### Publish Website
- Publishing progress with animated bar
- SignalR integration for real-time updates
- CDN refresh status
- Success notifications

### Template Inventory
- Template listing with actions
- Live editor status badges
- Design/Code/Pages navigation
- Delete confirmation

### Editor Setup
- Publisher URL configuration
- Blob storage URL settings
- Static pages toggle
- Environment variable notifications

### CDN Setup
- Multi-provider support (Cloudflare, Azure, Sucuri, CloudFront)
- Form validation
- IAM permissions guidance
- Test functionality

---

## 📝 Notes

- All screens use **bright/light glassmorphism** as per design requirements
- Status indicators use **Font Awesome check icons** (✓) not text markers
- Each screen has a **unique container classname** for easy CSS targeting
- Theme is **fully responsive** and works on all device sizes
- Code follows **accessibility best practices**

---

## 🔗 Related Files

- Original screens location: `originals/Views/`
- Theme source: `theme/scss/sky-hero.scss`
- Demo project: `SkyWizardDemo/`
- Setup wizard screens: `SkyWizardDemo/Pages/Setup/`

---

## 📞 Support

For questions or issues with the liquid glass theme:
1. Check the theme CSS in `sky-hero-d.css`
2. Review the unique classnames reference above
3. Verify all dependencies are installed
4. Check browser console for JavaScript errors

---

**Last Updated:** March 2026  
**Version:** 1.0  
**Theme:** Liquid Glass (Light/Bright)
