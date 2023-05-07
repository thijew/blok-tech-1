// Get the chicken amount input element
const chickenInput = document.getElementById('chickens');
// Add and remove a chicken 
function addOne() {
  const currentValue = parseInt(chickenInput.value);
  chickenInput.value = currentValue + 1;
}


function removeOne() {
  const currentValue = parseInt(chickenInput.value);
  chickenInput.value = Math.max(currentValue - 1, 0); // Ensure minimum value of 0
}

// Add the functions to the corresponding HTML buttons
const addOneButton = document.querySelector('input[value="+1"]');
addOneButton.onclick = addOne;

const removeOneButton = document.querySelector('input[value="-1"]');
removeOneButton.onclick = removeOne;
