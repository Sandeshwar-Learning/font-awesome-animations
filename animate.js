/**
 * Takes an array of icons and animates them sequentially
 * @param {string[]} iconsList 
 */
function animate(iconsList) {
    // Font Awesome icon prefix
    let iconPrefix = '&#x';

    // The element where the icons will be projected
    let portal = document.getElementById('portal'); 
    
    // Holds the index of icon currently being displayed
    let currentIconIndex = 0;

    // Display the first icon
    portal.innerHTML = iconPrefix + iconsList[currentIconIndex];

    setInterval(() => {
        currentIconIndex++;

        if (currentIconIndex === iconsList.length) {
            // reset the index
            currentIconIndex = 0;
        }

        portal.innerHTML = iconPrefix + iconsList[currentIconIndex];
        
    }, 1000);
}

// initialize an array of icons
const icons = ['f105', 'f101', 'f111'];

// call the animation function
animate(icons);



// ------------------------------------------------------------------------------ //
                            // UTILITY code ahead
// ------------------------------------------------------------------------------ //



// TailwindCSS colors list
const colors = ['grey', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];

// Variant of the color
const colorVariants = ['darkest', 'darker', 'dark', 'base', 'light', 'lighter', 'lightest'];

/**
 * Returns a random color class from tailwindCSS
 */
function getRandomColorClass() {
    let color = getRandomElement(colors);
    let variant = getRandomElement(colorVariants);

    return `text-${color}-${variant}`;
}

/**
 * Returns a random element from an array
 * @param {string[]} array The actual array
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
