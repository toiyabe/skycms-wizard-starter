// Password validation for registration
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('Input_Password');
    const passwordRules = document.getElementById('passwordRules');

    if (passwordInput && passwordRules) {
        passwordInput.addEventListener('input', function() {
            validatePassword(this.value);
        });
    }

    function validatePassword(password) {
        const rules = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password)
        };

        const ruleElements = passwordRules.querySelectorAll('li');
        const ruleKeys = ['length', 'uppercase', 'lowercase', 'number', 'special'];

        ruleElements.forEach((element, index) => {
            const ruleKey = ruleKeys[index];
            const icon = element.querySelector('i');
            
            if (rules[ruleKey]) {
                element.classList.add('is-valid-rule');
                if (icon) {
                    icon.className = 'fa-solid fa-circle-check me-1';
                }
            } else {
                element.classList.remove('is-valid-rule');
                if (icon) {
                    icon.className = 'fa-regular fa-circle me-1';
                }
            }
        });
    }
});
