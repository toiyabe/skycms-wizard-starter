// Editor Setup - Form handling
document.addEventListener('DOMContentLoaded', function() {
    const isReadOnly = false;
    const isMultiTenant = false;
    
    const form = document.querySelector('form');
    const staticWebPagesCheckbox = document.getElementById('staticWebPages');
    const blobUrlInput = document.getElementById('blobPublicUrl');

    // Handle static web pages toggle
    if (staticWebPagesCheckbox) {
        staticWebPagesCheckbox.addEventListener('change', function() {
            if (this.checked && blobUrlInput) {
                blobUrlInput.value = '/';
            }
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const publisherUrl = document.getElementById('publisherUrl')?.value;
            const blobPublicUrl = document.getElementById('blobPublicUrl')?.value;
            
            console.log('Saving settings:', {
                publisherUrl,
                blobPublicUrl,
                staticWebPages: staticWebPagesCheckbox?.checked,
                requiresAuth: document.getElementById('requiresAuth')?.checked
            });
            
            // Show success message
            alert('Settings saved successfully!');
        });
    }
});
