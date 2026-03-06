using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SkyWizardDemo.Pages
{
    public class FileExplorerModel : PageModel
    {
        public List<string> CurrentPath { get; set; } = new List<string>();
        public List<FileItem> Items { get; set; } = new List<FileItem>();

        public void OnGet()
        {
            // Sample breadcrumb path
            CurrentPath = new List<string> { "Images", "2024" };

            // Sample files and folders
            Items = new List<FileItem>
            {
                new FileItem
                {
                    Name = "Products",
                    IsFolder = true,
                    Type = "Folder",
                    Size = "-",
                    Modified = DateTime.Now.AddDays(-10)
                },
                new FileItem
                {
                    Name = "Banners",
                    IsFolder = true,
                    Type = "Folder",
                    Size = "-",
                    Modified = DateTime.Now.AddDays(-15)
                },
                new FileItem
                {
                    Name = "hero-banner.jpg",
                    IsFolder = false,
                    IsImage = true,
                    Type = "Image",
                    Size = "2.4 MB",
                    Modified = DateTime.Now.AddDays(-2)
                },
                new FileItem
                {
                    Name = "logo.png",
                    IsFolder = false,
                    IsImage = true,
                    Type = "Image",
                    Size = "156 KB",
                    Modified = DateTime.Now.AddDays(-5)
                },
                new FileItem
                {
                    Name = "about-us.jpg",
                    IsFolder = false,
                    IsImage = true,
                    Type = "Image",
                    Size = "1.8 MB",
                    Modified = DateTime.Now.AddDays(-7)
                },
                new FileItem
                {
                    Name = "team-photo.jpg",
                    IsFolder = false,
                    IsImage = true,
                    Type = "Image",
                    Size = "3.2 MB",
                    Modified = DateTime.Now.AddDays(-12)
                },
                new FileItem
                {
                    Name = "styles.css",
                    IsFolder = false,
                    IsImage = false,
                    Type = "CSS",
                    Size = "45 KB",
                    Modified = DateTime.Now.AddDays(-1)
                },
                new FileItem
                {
                    Name = "script.js",
                    IsFolder = false,
                    IsImage = false,
                    Type = "JavaScript",
                    Size = "28 KB",
                    Modified = DateTime.Now.AddDays(-3)
                },
                new FileItem
                {
                    Name = "favicon.ico",
                    IsFolder = false,
                    IsImage = false,
                    Type = "Icon",
                    Size = "4 KB",
                    Modified = DateTime.Now.AddDays(-30)
                },
                new FileItem
                {
                    Name = "contact-form.html",
                    IsFolder = false,
                    IsImage = false,
                    Type = "HTML",
                    Size = "12 KB",
                    Modified = DateTime.Now.AddDays(-8)
                }
            };
        }
    }

    public class FileItem
    {
        public string Name { get; set; } = string.Empty;
        public bool IsFolder { get; set; }
        public bool IsImage { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Size { get; set; } = string.Empty;
        public DateTime Modified { get; set; }
    }
}
