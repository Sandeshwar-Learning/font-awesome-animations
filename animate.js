function animate(iconsList) {
    let iconPrefix = '&#x';
    let portal = document.getElementById('portal');  
    let currentIconIndex = 0;

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

icons = ['f105', 'f101', 'f111'];

animate(icons);