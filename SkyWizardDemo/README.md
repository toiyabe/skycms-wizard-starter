# SkyWizardDemo Migration Guide

This guide explains how to migrate **only the new setup wizard pages** into an existing ASP.NET Core Razor Pages project.

## What to copy

From this project (`SkyWizardDemo`) to your target Razor project:

### 1) Razor pages and shared layout/partials

Copy these files:

- `Pages/Setup/Welcome.cshtml`
- `Pages/Setup/Storage.cshtml`
- `Pages/Setup/Admin.cshtml`
- `Pages/Setup/Publisher.cshtml`
- `Pages/Setup/Email.cshtml`
- `Pages/Setup/Cdn.cshtml`
- `Pages/Setup/Review.cshtml`
- `Pages/Shared/_LayoutSetup.cshtml`
- `Pages/Shared/_WizardProgress.cshtml`

> These are content-only `.cshtml` pages (no PageModel required).

### 2) Static assets

Copy these files/folders:

- `wwwroot/theme/css/sky-hero-d.css`
- `wwwroot/js/wizard-admin.js`
- `wwwroot/js/wizard-storage.js`
- `wwwroot/js/wizard-email.js`
- `wwwroot/js/wizard-cdn.js`
- `wwwroot/img/HeroBackground.jpg`
- `wwwroot/img/clouds-subtle.svg`

## Requirements in your target project

1. The project must be a Razor Pages app with:
   - `builder.Services.AddRazorPages();`
   - `app.MapRazorPages();`
2. Static files must be enabled (typical templates already do this).

## Route to start wizard

After copying, browse directly to:

- `/Setup/Welcome`

Optional: redirect home page to wizard start.

Example (`Pages/Index.cshtml.cs`):

```csharp
public IActionResult OnGet()
{
    return RedirectToPage("/Setup/Welcome");
}
```

## Layout behavior

Wizard pages set:

- `Layout = "_LayoutSetup"`
- `ViewData["BodyId"]`
- `ViewData["BodyClass"]`

Do not remove these; they are used for per-step backgrounds and theme targeting.

## Notes when integrating into an existing site

1. Keep your existing default `_Layout.cshtml` unchanged.
2. `_LayoutSetup.cshtml` is isolated for wizard pages only.
3. If your app uses CSP, allow these external styles/scripts used by the wizard layout:
   - Bootstrap CDN
   - Font Awesome CDN
   - Google Fonts (Manrope via CSS import)

## Quick verification checklist

- `/Setup/Welcome` opens with hero background.
- Step navigation/progress renders on all steps.
- Storage helper text and welcome checklist are clearly visible on the bright theme.
- Email/CDN conditional sections toggle correctly.
