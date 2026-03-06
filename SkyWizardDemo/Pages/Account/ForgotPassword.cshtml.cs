using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace SkyWizardDemo.Pages.Account
{
    public class ForgotPasswordModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; } = new InputModel();

        public bool EmailSent { get; set; }

        public class InputModel
        {
            [Required]
            [EmailAddress]
            public string Email { get; set; } = string.Empty;
        }

        public void OnGet()
        {
            EmailSent = false;
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Demo: Implement actual password reset logic here
            EmailSent = true;
            return Page();
        }
    }
}
