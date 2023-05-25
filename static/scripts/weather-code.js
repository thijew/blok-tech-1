    // Get all the weather code icons
    const weatherCode = document.querySelectorAll('.weatherCode');

    // Loop through each weather code icon
    weatherCode.forEach((icon) => {
        const weatherCodeIcon = parseInt(icon.textContent.trim());

        // Add an icon based on the weather code
        switch (weatherCodeIcon) {
            case 3:
                icon.innerHTML = '<img src="/wc-3.png" alt="Weather Icon">';
                break;
            case 4:
                icon.innerHTML = '<img src="path/to/weather-icon-4.png" alt="Weather Icon">';
                break;
            case 5:
                icon.innerHTML = '<img src="path/to/weather-icon-5.png" alt="Weather Icon">';
                break;
            // Add cases for other weather codes and corresponding icons
            default:
                break;
        }
    })