using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace SkyWizardDemo.Pages.Account.Manage
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public InputModel Input { get; set; } = new InputModel();

        public string? StatusMessage { get; set; }

        public bool IsEmailConfirmed { get; set; }

        public bool HasAuthenticator { get; set; }

        public class InputModel
        {
            [EmailAddress]
            [Display(Name = "Email")]
            public string Email { get; set; } = string.Empty;

            [Phone]
            [Display(Name = "Phone number")]
            public string? PhoneNumber { get; set; }
        }

        public void OnGet()
        {
            // Demo: Load user data
            Input.Email = "demo@example.com";
            Input.PhoneNumber = "";
            IsEmailConfirmed = true;
            HasAuthenticator = false;
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Demo: Save changes
            StatusMessage = "Your profile has been updated";
            return RedirectToPage();
        }

        public IActionResult OnPostDeleteAccount()
        {
            // Demo: Delete account logic
            return RedirectToPage("/Index");
        }
    }
}
