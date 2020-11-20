const regex = /^([\w\d\.-]+)@([\w\d-]+)\.([a-z]{2,8})(\.[a-z]{2,5})?$/;
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', (e) => {
    if (!regex.test(emailInput.value) && (!emailInput.classList.contains('error'))) {
        emailInput.classList.add('error');
        e.preventDefault();
    } else {
        if (emailInput.classList.contains('error')) {
            emailInput.classList.remove('error');
        }
        return;
    }
});
