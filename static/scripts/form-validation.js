const nameInput = document.querySelector('input#name');
const phoneNumberInput = document.querySelector('input#phone');
const chickensInput = document.querySelector('input#chickens');
const dateInput = document.querySelector('input#date-input');
const inputTime = document.querySelector('select#time-input');

// Check name
nameInput.addEventListener('keyup', (event) => {
    const name = event.target.value;
    const alphabeticRegex = /^[A-Za-z\s]+$/;

    if (!alphabeticRegex.test(name)) {
        nameInput.setCustomValidity("Please enter letters only.");
    } else {
        nameInput.setCustomValidity("");
    }
});

// Check phone number
phoneNumberInput.addEventListener('keyup', (event) => {
    const phoneNumber = event.target.value;
    const phoneNumberPattern = /^\+?[0-9]{6,14}$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
        phoneNumberInput.setCustomValidity("Please enter a valid phone number.");
    } else {
        phoneNumberInput.setCustomValidity("");
    }
});

// Check number of chickens
chickensInput.addEventListener('change', (event) => {
    const chickens = event.target.value;
    const numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(chickens)) {
        chickensInput.setCustomValidity("Please enter a valid number.");
    } else if (chickens < 0 || chickens > 20) {
        chickensInput.setCustomValidity("Please enter a number between 0 and 20.");
    } else {
        chickensInput.setCustomValidity("");
    }
});

// Check reservation date
dateInput.addEventListener('change', (event) => {
    const selectedDate = event.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (selectedDate < today) {
        dateInput.setCustomValidity("Please select a future date.");
    } else {
        dateInput.setCustomValidity("");
    }
});

// Check reservation time
inputTime.addEventListener('change', (event) => {
    const selectedTime = event.target.value;

    if (selectedTime === "") {
        inputTime.setCustomValidity("Please select a reservation time.");
    } else {
        inputTime.setCustomValidity("");
    }
});
