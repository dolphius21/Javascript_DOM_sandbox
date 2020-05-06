// Selecting element by ID
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
})

// Selecting all elements of a particular type
const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}

// Selecting elements with the same class
const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';
}

// Using CSS queries to select page elements
const green = document.querySelectorAll('.green');

for (let i = 0; i < green.length; i++) {
  green[i].style.color = 'green';
}

// Using pseudo selector
const odds = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odds.length; i++) {
  odds[i].style.background = '#ececec';
}