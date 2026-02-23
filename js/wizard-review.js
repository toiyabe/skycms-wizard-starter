// Review step specific JavaScript
// Handles the object-based summarySections data structure

const summarySections = [
    {
        Title: "Storage",
        Items: [
            { Provider: "Azure Blob Storage" },
            { Connection: "Pre-configured" },
            { PublicUrl: "/" }
        ]
    },
    {
        Title: "Administrator",
        Items: [
            { Email: "admin@example.com" },
            { Password: "Strong and confirmed" }
        ]
    },
    {
        Title: "Publisher",
        Items: [
            { WebsiteUrl: "https://www.example.com" },
            { Design: "Bootstrap 5 design" },
            { StaticWebsiteMode: "Enabled" }
        ]
    },
    {
        Title: "Optional Services",
        Items: [
            { Email: "Skipped" },
            { Cdn: "Skipped" }
        ]
    }
];

function renderSummarySections() {
    const container = document.querySelector('.row.g-3.mb-3');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    summarySections.forEach(section => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        const article = document.createElement('article');
        article.className = 'wizard-tile h-100';
        
        const title = document.createElement('h4');
        title.textContent = section.Title;
        
        const list = document.createElement('ul');
        list.className = 'wizard-list mb-0';
        
        section.Items.forEach(item => {
            const li = document.createElement('li');
            
            // Convert object to "Key: Value" format
            const entries = Object.entries(item);
            if (entries.length > 0) {
                const [key, value] = entries[0];
                li.innerHTML = `<strong>${key}:</strong> ${value}`;
            }
            
            list.appendChild(li);
        });
        
        article.appendChild(title);
        article.appendChild(list);
        col.appendChild(article);
        container.appendChild(col);
    });
}

// On DOM ready
document.addEventListener('DOMContentLoaded', () => {
    renderSummarySections();
});
