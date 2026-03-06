// Page Inventory - Tabulator integration
const publisherUrl = "https://example.com";
const tblHeight = window.innerHeight - 300;
let pageSize = Math.round(tblHeight / 50) + 1;

function dateTime(cell, formatterParams, onRendered) {
    return getLocalTime(cell.getValue());
}

function dateFilterFunction(headerValue, rowValue, rowData, filterParams) {
    if (rowValue === null || rowValue === "") {
        return false;
    }
    return headerValue === rowValue.split("T")[0];
}

function openArticleVersions(e, cell) {
    const data = cell.getRow().getData();
    console.log('Opening article:', data.ArticleNumber);
    // window.location.href = "/Editor/Versions/" + data.ArticleNumber;
}

const menuBar = function(cell, formatterParams) {
    const data = cell.getRow().getData();
    let html = "<div class='btn-group btn-group-sm' role='group'>";
    html += "<a href='#' title='Edit page' class='btn btn-sm btn-success'><i class='fa-solid fa-pen-to-square'></i></a>";
    html += "<a href='#' title='View on website' class='btn btn-sm btn-secondary'><i class='fa-solid fa-arrow-up-right-from-square'></i></a>";
    html += "<a href='#' title='Clone page' class='btn btn-sm btn-secondary'><i class='fa-solid fa-copy'></i></a>";
    html += "</div>";
    return html;
};

const trashBtn = function(cell, formatterParams) {
    const data = cell.getRow().getData();
    if (data.IsDefault === true) {
        return "";
    }
    return "<button type='button' title='Send to trash' class='btn btn-sm btn-secondary'><i class='fa-solid fa-trash'></i></button>";
};

// Initialize Tabulator when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Tabulator !== 'undefined' && document.getElementById('pagelist-table')) {
        const pageTable = new Tabulator("#pagelist-table", {
            height: tblHeight + "px",
            pagination: true,
            paginationMode: "local",
            paginationSize: pageSize,
            layout: "fitColumns",
            data: getSampleData(),
            columns: [
                { title: "Actions", field: "IsDefault", formatter: menuBar, width: 176, headerSort: false },
                { 
                    title: "Published", 
                    field: "LastPublished", 
                    cellClick: openArticleVersions,
                    width: 180,
                    sorter: "datetime"
                },
                { 
                    title: "Updated", 
                    field: "Updated", 
                    cellClick: openArticleVersions,
                    width: 180,
                    sorter: "datetime"
                },
                { title: "Title", field: "Title", sorter: "string", cellClick: openArticleVersions },
                { title: "Trash", field: "ArticleNumber", formatter: trashBtn, width: 56, headerSort: false }
            ]
        });
    }
});

function getSampleData() {
    return [
        {
            ArticleNumber: 1,
            Title: "Home Page",
            UrlPath: "root",
            LastPublished: "2024-01-15T10:30:00",
            Updated: "2024-01-15T10:30:00",
            IsDefault: true
        },
        {
            ArticleNumber: 2,
            Title: "About Us",
            UrlPath: "about",
            LastPublished: "2024-01-14T14:20:00",
            Updated: "2024-01-14T14:20:00",
            IsDefault: false
        },
        {
            ArticleNumber: 3,
            Title: "Contact",
            UrlPath: "contact",
            LastPublished: "2024-01-13T09:15:00",
            Updated: "2024-01-13T09:15:00",
            IsDefault: false
        }
    ];
}

function getLocalTime(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleString();
}
