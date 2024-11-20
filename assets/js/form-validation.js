document.addEventListener('DOMContentLoaded', function() {
  // Get all forms that need validation
  const forms = document.querySelectorAll('.needs-validation');

  // Function to validate email
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      // Check reCAPTCHA
      const recaptchaResponse = form.querySelector('.g-recaptcha-response');
      if (recaptchaResponse && !recaptchaResponse.value) {
        event.preventDefault();
        alert('Please complete the reCAPTCHA verification.');
        return;
      }

      // Add loading state to submit button
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.classList.add('btn-loading');
        submitButton.disabled = true;
      }

      form.classList.add('was-validated');
    }, false);

    // Real-time email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.addEventListener('input', function(e) {
        if (isValidEmail(e.target.value)) {
          e.target.classList.remove('is-invalid');
          e.target.classList.add('is-valid');
        } else {
          e.target.classList.remove('is-valid');
          e.target.classList.add('is-invalid');
        }
      });
    }
  });
});
