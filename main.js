// Exercise 1: Alert button
const button = document.querySelector('.btn-alert');

const alertBtn = () => {
    alert('button clicked');
}
button.addEventListener('click', alertBtn);

// Exercise 2: Change background button
// const changeBgBtn = document.querySelector('.btn-background');

// const changeColor = () => {
//     document.body.classList.add('red-background');
// }
// changeBgBtn.addEventListener('click', changeColor);

// Exercise 3: Toggle event
const changeBgBtn = document.querySelector('.btn-background');

const toggleColor = () => {
    document.body.classList.toggle('red-background');
}
changeBgBtn.addEventListener('click', toggleColor);