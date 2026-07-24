document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
    const successBanner = document.getElementById('formSuccess');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isFormValid = true;

        const nameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('emailAddr');
        const msgInput = document.getElementById('projectMsg');

        // Field Validation Function
        const validateField = (input, errorId, condition) => {
            const errorElement = document.getElementById(errorId);
            if (condition) {
                input.classList.add('invalid');
                if (errorElement) errorElement.style.display = 'block';
                isFormValid = false;
            } else {
                input.classList.remove('invalid');
                if (errorElement) errorElement.style.display = 'none';
            }
        };

        // Regex for valid email
        const isValidEmail = (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        // Run validations
        validateField(nameInput, 'nameError', nameInput.value.trim() === '');
        validateField(emailInput, 'emailError', !isValidEmail(emailInput.value.trim()));
        validateField(msgInput, 'msgError', msgInput.value.trim() === '');

        // Handle success
        if (isFormValid) {
            successBanner.classList.remove('hidden');
            form.reset();

            setTimeout(() => {
                successBanner.classList.add('hidden');
            }, 5000);
        }
    });
});
