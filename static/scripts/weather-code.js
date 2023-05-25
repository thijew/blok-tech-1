    // Get all the weather code icons
    const weatherCode = document.querySelectorAll('.weatherCode');

    // Loop through each weather code icon
    weatherCode.forEach((icon) => {
        const weatherCodeIcon = parseInt(icon.textContent.trim());

        // Add an icon based on the weather code
        switch (weatherCodeIcon) {
            case 0:
                icon.innerHTML = '<img src="/images/wc-0.png" alt="Weather Icon">';
                break;
            case 1,2:
                icon.innerHTML = '<img src="/images/wc-1.png" alt="Weather Icon">';
                break;
            case 3:
                icon.innerHTML = '<img src="/images/wc-3.png" alt="Weather Icon">';
                break;
            case 45:
                icon.innerHTML = '<img src="/images/wc-45.png" alt="Weather Icon">';
                break;
            case 48:
                icon.innerHTML = '<img src="/images/wc-48.png" alt="Weather Icon">';
                break;
            case 56:
                icon.innerHTML = '<img src="/images/wc-56.png" alt="Weather Icon">';
                break;
            case 57:
                icon.innerHTML = '<img src="/images/wc-57.png" alt="Weather Icon">';
                break;
            case 71:
                icon.innerHTML = '<img src="/images/wc-71.png" alt="Weather Icon">';
                break;
            case 61,63,65,80,81,82:
                icon.innerHTML = '<img src="/images/wc-82.png" alt="Weather Icon">';
                break;
            case 95:
                icon.innerHTML = '<img src="/images/wc-95.png" alt="Weather Icon">';
                break;
            case !null:
                icon.innerHTML = '<img src="/images/wc-unknown.png" alt="Weather Icon">';
                break;
                

            // Add cases for other weather codes and corresponding icons
            default:
                break;
        }
    })