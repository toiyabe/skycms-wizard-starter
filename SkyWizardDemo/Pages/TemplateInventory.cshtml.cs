using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SkyWizardDemo.Pages
{
    public class TemplateInventoryModel : PageModel
    {
        public List<TemplateItem> Templates { get; set; } = new List<TemplateItem>();

        public void OnGet()
        {
            // Sample data for demonstration
            Templates = new List<TemplateItem>
            {
                new TemplateItem
                {
                    Id = 1,
                    Name = "Homepage Template",
                    Description = "Main landing page with hero section and featured content",
                    PageCount = 1,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-10)
                },
                new TemplateItem
                {
                    Id = 2,
                    Name = "Standard Page",
                    Description = "Basic content page with sidebar",
                    PageCount = 5,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-20)
                },
                new TemplateItem
                {
                    Id = 3,
                    Name = "Blog Listing",
                    Description = "Blog posts listing with pagination",
                    PageCount = 1,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-5)
                },
                new TemplateItem
                {
                    Id = 4,
                    Name = "Blog Post",
                    Description = "Individual blog post with comments",
                    PageCount = 23,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-2)
                },
                new TemplateItem
                {
                    Id = 5,
                    Name = "Contact Form",
                    Description = "Contact page with form and map",
                    PageCount = 1,
                    IsLiveEditorEnabled = false,
                    LastModified = DateTime.Now.AddDays(-30)
                },
                new TemplateItem
                {
                    Id = 6,
                    Name = "Services Template",
                    Description = "Services showcase with icons and descriptions",
                    PageCount = 1,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-15)
                },
                new TemplateItem
                {
                    Id = 7,
                    Name = "Legal Page",
                    Description = "Terms, privacy, and legal documents",
                    PageCount = 2,
                    IsLiveEditorEnabled = false,
                    LastModified = DateTime.Now.AddDays(-45)
                },
                new TemplateItem
                {
                    Id = 8,
                    Name = "FAQ Template",
                    Description = "Frequently asked questions with accordion",
                    PageCount = 1,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-12)
                },
                new TemplateItem
                {
                    Id = 9,
                    Name = "Gallery Template",
                    Description = "Image gallery with lightbox",
                    PageCount = 3,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-8)
                },
                new TemplateItem
                {
                    Id = 10,
                    Name = "Pricing Table",
                    Description = "Pricing plans comparison table",
                    PageCount = 1,
                    IsLiveEditorEnabled = true,
                    LastModified = DateTime.Now.AddDays(-6)
                }
            };
        }
    }

    public class TemplateItem
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int PageCount { get; set; }
        public bool IsLiveEditorEnabled { get; set; }
        public DateTime LastModified { get; set; }
    }
}
