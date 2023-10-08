function checkFields() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('logInSubmit');

    if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        loginButton.removeAttribute('disabled');
    } else {
        loginButton.setAttribute('disabled', 'disabled');
    }
}