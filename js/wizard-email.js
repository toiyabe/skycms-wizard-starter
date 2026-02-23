(function () {
  const form = document.getElementById("emailForm");
  const providerSelect = document.getElementById("emailProvider");
  const senderEmail = document.getElementById("senderEmail");

  const sections = {
    SendGrid: document.getElementById("sendGridOptions"),
    AzureCommunication: document.getElementById("azureCommOptions"),
    SMTP: document.getElementById("smtpOptions")
  };
  const nextUrl = form ? form.dataset.nextUrl || "./cdn.html" : "./cdn.html";

  if (!form || !providerSelect || !senderEmail) {
    return;
  }

  function setRequired(container, required) {
    if (!container) {
      return;
    }

    const inputs = container.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.required = required;
    });
  }

  function updateProviderOptions() {
    const provider = providerSelect.value;
    const isConfigured = provider !== "none";

    Object.entries(sections).forEach(([key, section]) => {
      if (!section) {
        return;
      }

      const show = provider === key;
      section.classList.toggle("wizard-hidden", !show);
      setRequired(section, show);
    });

    senderEmail.required = isConfigured;
  }

  providerSelect.addEventListener("change", updateProviderOptions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      window.location.href = nextUrl;
    } else {
      form.reportValidity();
    }
  });

  updateProviderOptions();
})();
