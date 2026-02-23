(function () {
  const form = document.getElementById("adminForm");
  const email = document.getElementById("adminEmail");
  const password = document.getElementById("adminPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const submitBtn = document.getElementById("adminNextBtn");
  const passwordMatch = document.getElementById("passwordMatch");

  const ruleLength = document.getElementById("ruleLength");
  const ruleUpper = document.getElementById("ruleUpper");
  const ruleLower = document.getElementById("ruleLower");
  const ruleNumber = document.getElementById("ruleNumber");
  const ruleSpecial = document.getElementById("ruleSpecial");
  const nextUrl = form ? form.dataset.nextUrl || "./publisher.html" : "./publisher.html";

  if (!form || !email || !password || !confirmPassword || !submitBtn) {
    return;
  }

  function markRule(node, valid) {
    if (!node) {
      return;
    }

    if (!node.dataset.baseText) {
      node.dataset.baseText = node.textContent.trim();
    }

    const baseText = node.dataset.baseText;
    node.innerHTML = valid
      ? '<i class="fa-solid fa-circle-check me-2" aria-hidden="true"></i>' + baseText
      : baseText;
    node.classList.toggle("is-valid-rule", valid);
  }

  function validatePassword(value) {
    const checks = {
      length: value.length >= 8,
      upper: /[A-Z]/.test(value),
      lower: /[a-z]/.test(value),
      number: /\d/.test(value),
      special: /[!@#$%^&*]/.test(value)
    };

    markRule(ruleLength, checks.length);
    markRule(ruleUpper, checks.upper);
    markRule(ruleLower, checks.lower);
    markRule(ruleNumber, checks.number);
    markRule(ruleSpecial, checks.special);

    return checks.length && checks.upper && checks.lower && checks.number && checks.special;
  }

  function validateForm() {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const passwordValid = validatePassword(password.value);
    const matches = password.value.length > 0 && password.value === confirmPassword.value;

    if (confirmPassword.value.length > 0) {
      passwordMatch.innerHTML = matches
        ? '<i class="fa-solid fa-circle-check me-1" aria-hidden="true"></i>Passwords match'
        : "Passwords do not match";
      passwordMatch.style.color = matches ? "#237a50" : "#b4233f";
    } else {
      passwordMatch.textContent = "";
    }

    submitBtn.disabled = !(emailValid && passwordValid && matches);
  }

  [email, password, confirmPassword].forEach((el) => {
    el.addEventListener("input", validateForm);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!submitBtn.disabled) {
      window.location.href = nextUrl;
    }
  });

  validateForm();
})();
