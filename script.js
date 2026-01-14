
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
        const newSize = prompt('Enter the number of squares per side.');

        if (newSize > 100) {
            prompt('Number must not exceed 100. Please try again.');
        } else {
            resizeGrid();
        }

    });
});

// Function to resize the grid
function resizeGrid() {
    boxWidth = (1000 / newSize) - 2;
    boxHeight = (1000 / newSize) - 2;

    allBoxes.foreach(box => {
        box.remove();
    });
}

