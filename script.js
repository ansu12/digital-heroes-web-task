document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        let isValid = true;

        // Form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Validation helpers
        const showError = (input, show) => {
            const errorMsg = document.getElementById(`${input.id}Error`);
            if (show) {
                input.classList.add('input-error');
                errorMsg.style.display = 'block';
                isValid = false;
            } else {
                input.classList.remove('input-error');
                errorMsg.style.display = 'none';
            }
        };

        const isValidEmail = (email) => {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        };

        // Name validation
        showError(nameInput, nameInput.value.trim() === '');

        // Email validation
        showError(emailInput, !isValidEmail(emailInput.value.trim()));

        // Message validation
        showError(messageInput, messageInput.value.trim() === '');

        // If everything is valid, simulate success
        if (isValid) {
            successMessage.classList.remove('hidden');
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });
});