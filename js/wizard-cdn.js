(function () {
  const form = document.getElementById("cdnForm");
  const providerSelect = document.getElementById("cdnProvider");

  const sections = {
    Azure: document.getElementById("azureConfig"),
    Cloudflare: document.getElementById("cloudflareConfig"),
    Cloudfront: document.getElementById("cloudfrontConfig"),
    Sucuri: document.getElementById("sucuriConfig")
  };
  const nextUrl = form ? form.dataset.nextUrl || "./review.html" : "./review.html";

  if (!form || !providerSelect) {
    return;
  }

  function updateProviderOptions() {
    const provider = providerSelect.value;

    Object.entries(sections).forEach(([key, section]) => {
      if (!section) {
        return;
      }
      section.classList.toggle("wizard-hidden", provider !== key);
    });
  }

  providerSelect.addEventListener("change", updateProviderOptions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = nextUrl;
  });

  updateProviderOptions();
})();
