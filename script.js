

// Respond to mouseenter and mouseout actions
document.addEventListener('DOMContentLoaded', function () {
    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach(box => {

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'purple';
        });

        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = 'orange';
        });
    });
});

