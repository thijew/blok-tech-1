// Script to add and remove chickens

const input = document.getElementById("chickens");
const addButton = document.getElementById("addOne");
const removeButton = document.getElementById("removeOne");

const addOne = () => {
  const currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  return false;
};

const removeOne = () => {
  const currentValue = parseInt(input.value);
  if (currentValue > 0) {
    input.value = currentValue - 1;
    console.log(currentValue);
    return false;
  }
  
};

addButton.addEventListener("click", addOne);
removeButton.addEventListener("click", removeOne);
