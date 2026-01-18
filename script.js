// Fill the square divs with a random color when moused over
function randomizeColor() {
    const red = Math.floor(Math.random() * 256); // Color value for red light
    const green = Math.floor(Math.random() * 256); // Color value for green light
    const blue = Math.floor(Math.random() * 256); // Color value for blue light
    // Return all color values in RGB format
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

// Respond to mouseenter and mouseout actions
document.addEventListener('DOMContentLoaded', function () {
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach(box => {
        // Initiate counter to track mouse events
        let counter = 0;
        // Set default opacity of divs to 0
        box.style.opacity = 0.1;
        // Set default border of divs
        box.style.border = '1px solid rgba(0, 0, 0, 1)';

        // Set square to a random color when mouse enters
        box.addEventListener('mouseenter', () => {
            // Assign square a random color when mouse enters div
            box.style.backgroundColor = randomizeColor();
            // Assign variable name to box opacity property
            let boxOpacity = parseFloat(box.style.opacity);

            // Track number of passes by mouse through each div and darken color accordingly
            if (counter < 10) {
                box.style.opacity = (boxOpacity + 0.1).toString();
                box.style.border = '1px solid rgba(0, 0, 0, 0.2)'; // Reset border color to not darken with each mouse event
                counter++;
            } else if (counter === 10) {
                return; // If counter reaches 10, exit function
            }
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
            if (newSize === null) {
                return; // Exit the function
            }
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
            // Assign class name to new boxes for styling
            newBox.classList.add('newBox');
            // Set the width and height of new boxes
            newBox.style.width = boxWidth + 'px';
            newBox.style.height = boxWidth + 'px';
            // Set default opacity of divs to 0
            newBox.style.opacity = 0.1;
            // Set default border of divs
            newBox.style.border = '1px solid rgba(0, 0, 0, 1)';

            // Initiate counter to track mouse events
            let counter = 0;

            // Set square to a random color when mouse enters
            newBox.addEventListener('mouseenter', () => {
                // Assign square a random color when mouse enters div
                newBox.style.backgroundColor = randomizeColor();
                // Assign variable name to box opacity property
                let boxOpacity = parseFloat(newBox.style.opacity);

                // Track number of passes by mouse through each div and darken color accordingly
                if (counter < 10) {
                    newBox.style.opacity = (boxOpacity + 0.1).toString();
                    newBox.style.border = '1px solid rgba(0, 0, 0, 0.2)'; // Reset border color to not darken with each mouse event
                    counter++;
                    console.log(boxOpacity);
                } else if (counter === 10) {
                    return; // If counter reaches 10, exit function
                }
            });
            // Append the new divs to the container element
            container.appendChild(newBox);
        }
    }
}

