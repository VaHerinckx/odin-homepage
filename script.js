// Get all elements with the class name "box_image"
const elements = document.querySelectorAll('.box_image');

// Iterate through each element and assign a random color
elements.forEach(element => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  element.style.backgroundColor = randomColor;
});
