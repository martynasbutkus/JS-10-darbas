const MAX_COLORS_HARD = 6;
const MAX_COLORS_EASY = 3;

function RandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

function RandomColors(maxColors) {
    const colors = [];
    const colorDisplay = document.getElementById('colorDisplay');
    const randomColorDisplay = document.getElementById('randomColorDisplay');

    while (colors.length < maxColors) {
        const color = RandomColor();
        if (!colors.includes(color)) {
            colors.push(color);
        }
    }

    const correctColorIndex = Math.floor(Math.random() * colors.length);
    const correctColor = colors[correctColorIndex];

    for (let i = colors.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    colorDisplay.innerHTML = '';
    colors.forEach((color, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'colorDiv';
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener('click', () => handleColorClick(index, colors));

        colorDisplay.appendChild(colorDiv);
    });

    randomColorDisplay.innerText = `${correctColor}`;
}

function RandomColorsHard() {
    RandomColors(MAX_COLORS_HARD);
}

function RandomColorsEasy() {
    RandomColors(MAX_COLORS_EASY);
}

function handleColorClick(clickedIndex, colors) {
    const randomColorDisplay = document.getElementById('randomColorDisplay');

    if (randomColorDisplay.innerText === 'Correct!') {
        randomColorDisplay.innerText = `${colors[Math.floor(Math.random() * colors.length)]}`;
    } else {
        const randomIndex = Math.floor(Math.random() * colors.length);

        if (clickedIndex === randomIndex) {
            randomColorDisplay.innerText = 'Correct!';
            
            document.querySelectorAll('.colorDiv').forEach((colorDiv) => {
                colorDiv.style.pointerEvents = 'none';
            });
        } else {
            document.querySelectorAll('.colorDiv')[clickedIndex].style.display = 'none';
        }
    }
}
