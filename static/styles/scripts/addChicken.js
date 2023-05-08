// Script to add and remove chickens

const input = document.getElementById("chickens");
const addButton = document.getElementById("addOne");
const removeButton = document.getElementById("removeOne");

const addOne = () => {
  const currentValue = parseInt(input.value);
  input.value = currentValue + 1;
};

const removeOne = () => {
  const currentValue = parseInt(input.value);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
};

addButton.addEventListener("click", addOne);
removeButton.addEventListener("click", removeOne);
