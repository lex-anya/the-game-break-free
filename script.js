document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const exploreBtn = document.getElementById('exploreBtn');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const screen4 = document.getElementById('screen4');
    const screen5 = document.getElementById('screen5');
    const paradoxInitiativeLink = document.getElementById('paradoxInitiativeLink');
    const projectAstralisLink = document.getElementById('projectAstralisLink');
    const astraLink = document.getElementById('astraLink');
    const backToScenario1 = document.getElementById('backToScenario1');
    const backToScenario2 = document.getElementById('backToScenario2');
    const backToScenario3 = document.getElementById('backToScenario3');

    console.log('DOM fully loaded and parsed');

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const infoOnly = urlParams.get('infoOnly') === 'true';

    if (infoOnly) {
        // Show only the informative screens
        screen1.style.display = 'none';
        screen2.style.display = 'none';
        screen3.style.display = 'block'; // Show the first informative screen by default
    } else {
        // Normal flow
        agreeCheckbox.addEventListener('change', () => {
            exploreBtn.disabled = !agreeCheckbox.checked;
            console.log('Checkbox changed:', agreeCheckbox.checked);
        });

        exploreBtn.addEventListener('click', () => {
            screen1.style.display = 'none';
            screen2.style.display = 'block';
            console.log('Navigated to screen 2');
        });
    }

    paradoxInitiativeLink.addEventListener('click', (event) => {
        event.preventDefault();
        screen2.style.display = 'none';
        screen3.style.display = 'block';
        console.log('Navigated to screen 3');
    });

    projectAstralisLink.addEventListener('click', (event) => {
        event.preventDefault();
        screen2.style.display = 'none';
        screen4.style.display = 'block';
        console.log('Navigated to screen 4');
    });

    astraLink.addEventListener('click', (event) => {
        event.preventDefault();
        screen2.style.display = 'none';
        screen5.style.display = 'block';
        console.log('Navigated to screen 5');
    });

    backToScenario1.addEventListener('click', (event) => {
        event.preventDefault();
        screen3.style.display = 'none';
        if (infoOnly) {
            screen3.style.display = 'block'; // Stay on the same screen if infoOnly
        } else {
            screen2.style.display = 'block';
        }
        console.log('Navigated back to screen 2 from screen 3');
    });

    backToScenario2.addEventListener('click', (event) => {
        event.preventDefault();
        screen4.style.display = 'none';
        if (infoOnly) {
            screen3.style.display = 'block'; // Stay on the same screen if infoOnly
        } else {
            screen2.style.display = 'block';
        }
        console.log('Navigated back to screen 2 from screen 4');
    });

    backToScenario3.addEventListener('click', (event) => {
        event.preventDefault();
        screen5.style.display = 'none';
        if (infoOnly) {
            screen3.style.display = 'block'; // Stay on the same screen if infoOnly
        } else {
            screen2.style.display = 'block';
        }
        console.log('Navigated back to screen 2 from screen 5');
    });
});
