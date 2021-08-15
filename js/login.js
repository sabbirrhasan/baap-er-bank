// Login to Dashboard Click Handler
document.getElementById('login-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-submit');
    const passwordInput = document.getElementById('pass-submit');
    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;
    if (userEmail == 'sontan@baap.com' && userPassword == 'sontan') {
        window.location.href = 'bank.html';
    };
});