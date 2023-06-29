const nameInput = document.querySelector('input#name');

nameInput.addEventListener('input', (event) => {
    const name = event.target.value;
    const alphabeticRegex = /[A-Z/a-z]/;

    if (!alphabeticRegex.test(name)) {
        nameInput.setCustomValidity("Voer a.u.b alleen letters in.");
    } else {
        nameInput.setCustomValidity("");
    }
});


const phoneNumberInput = document.querySelector('input#phone');

phoneNumberInput.addEventListener('input', (event) => {
    const phoneNumber = event.target.value;
    const phoneNumberPatternValue = /[1-10]/;

    if (!phoneNumberPatternValue.test(phoneNumber)) {
        phoneNumberInput.setCustomValidity("Voer a.u.b een geldig telefoonnummer in.");
    } else {
        phoneNumberInput.setCustomValidity("");
    }
});