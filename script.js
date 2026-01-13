

// Respond to mouseenter and mouseout actions
document.addEventListener('DOMContentLoaded', function () {
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach(box => {

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black';
        });

        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = 'red';
        });
    });
});

// Listen for button clicks
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const newSize = prompt('Enter the number of boxes per line. Don\'t go higher than 100!');
    });
});

