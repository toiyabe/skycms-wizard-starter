using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SkyWizardDemo.Pages
{
    public class PageInventoryModel : PageModel
    {
        public List<PageItem> Pages { get; set; } = new List<PageItem>();

        public void OnGet()
        {
            // Sample data for demonstration
            Pages = new List<PageItem>
            {
                new PageItem
                {
                    Id = 1,
                    Title = "Home",
                    Url = "/",
                    Template = "Homepage Template",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-2),
                    Author = "John Doe"
                },
                new PageItem
                {
                    Id = 2,
                    Title = "About Us",
                    Url = "/about",
                    Template = "Standard Page",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-5),
                    Author = "Jane Smith"
                },
                new PageItem
                {
                    Id = 3,
                    Title = "Services",
                    Url = "/services",
                    Template = "Services Template",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-10),
                    Author = "John Doe"
                },
                new PageItem
                {
                    Id = 4,
                    Title = "Contact",
                    Url = "/contact",
                    Template = "Contact Form",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-1),
                    Author = "Sarah Johnson"
                },
                new PageItem
                {
                    Id = 5,
                    Title = "Blog",
                    Url = "/blog",
                    Template = "Blog Listing",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-3),
                    Author = "Mike Wilson"
                },
                new PageItem
                {
                    Id = 6,
                    Title = "Privacy Policy",
                    Url = "/privacy",
                    Template = "Legal Page",
                    Status = "Draft",
                    LastModified = DateTime.Now.AddHours(-6),
                    Author = "Jane Smith"
                },
                new PageItem
                {
                    Id = 7,
                    Title = "Terms of Service",
                    Url = "/terms",
                    Template = "Legal Page",
                    Status = "Draft",
                    LastModified = DateTime.Now.AddHours(-8),
                    Author = "Jane Smith"
                },
                new PageItem
                {
                    Id = 8,
                    Title = "FAQ",
                    Url = "/faq",
                    Template = "FAQ Template",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-7),
                    Author = "Sarah Johnson"
                },
                new PageItem
                {
                    Id = 9,
                    Title = "Portfolio",
                    Url = "/portfolio",
                    Template = "Gallery Template",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-15),
                    Author = "Mike Wilson"
                },
                new PageItem
                {
                    Id = 10,
                    Title = "Pricing",
                    Url = "/pricing",
                    Template = "Pricing Table",
                    Status = "Published",
                    LastModified = DateTime.Now.AddDays(-4),
                    Author = "John Doe"
                }
            };
        }
    }

    public class PageItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
        public string Template { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateTime LastModified { get; set; }
        public string Author { get; set; } = string.Empty;
    }
}
