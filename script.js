// Fill the square divs with a random color when moused over
function randomizeColor() {
    const red = Math.floor(Math.random() * 256); // Color value for red light
    const green = Math.floor(Math.random() * 256); // Color value for green light
    const blue = Math.floor(Math.random() * 256); // Color value for blue light
    // Return all color values in RGB format
    return `rgb(${red}, ${green}, ${blue})`;
}

// Respond to mouseenter and mouseout actions
document.addEventListener('DOMContentLoaded', function () {
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach(box => {
        // Set square to a random color when mouse enters
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = randomizeColor();
        });
        // Set square to a random color when mouse exits
        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = randomizeColor();
        });
    });
});

// Listen for button clicks
document.addEventListener('DOMContentLoaded', function () {
    // Reference to the button element
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        // Prompt user to enter the number of squares per side
        let newSize = prompt('Enter the number of squares per side.');
        
        // Handle instances when user clicks the cancel button on the prompt
        if (newSize === null) {
            return; // Exit the function
        }
        // User can enter any positive integer not exceeding 100
        while (newSize > 100) {
            // Ask user to re-enter number if value is invalid
            newSize = prompt('Number must not exceed 100. Please try again.');
        }
        // Call the resizeGrid function when user enters a valid value
        resizeGrid(newSize);
    });
});

// Function to resize the grid
function resizeGrid(newSize) {

    // Reference to the container element
    const container = document.querySelector('.container');

    while (container.firstChild) {
        // Remove the existing 16 x 16 grid
        container.removeChild(container.firstChild);
    }

    // Set the width of each new div
    const boxWidth = (1000 / newSize) - 2;
    // Loop until the correct number of divs is created based on user input
    for (let i = 0; i < newSize; i++) {
        for (let j = 0; j < newSize; j++) {

            const newBox = document.createElement('div');
            newBox.classList.add('newBox');
            newBox.style.width = boxWidth + 'px';
            newBox.style.height = boxWidth + 'px';

            // Set square to a random color when mouse enters
            newBox.addEventListener('mouseenter', () => {
                box.style.backgroundColor = randomizeColor();
            });

            // Set square to a random color when mouse exits
            newBox.addEventListener('mouseout', () => {
                newBox.style.backgroundColor = randomizeColor();
            });
            // Append the new divs to the container element
            container.appendChild(newBox);
        }
    }
}

