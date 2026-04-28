// 1. DEFINE THE FUNCTIONS
function changeBackgroundColor() {
    // The test expects an RGB format to match its regex
    document.body.style.backgroundColor = "rgb(200, 200, 200)";
}

function resetBackgroundColor() {
    // The test expects an empty string to "clear" the style
    document.body.style.backgroundColor = "";
}

function displayKeyPress(event) {
    const keyDisplay = document.getElementById('keyPressDisplay');
    if (keyDisplay && event) {
        // The test expects exactly this prefix
        keyDisplay.textContent = `Key pressed: ${event.key}`;
    }
}

function displayUserInput(event) {
    const textDisplay = document.getElementById('textInputDisplay');
    const textInput = document.getElementById('textInput');
    
    if (textDisplay) {
        // Handle cases where the test calls the function without an event object
        const value = event ? event.target.value : (textInput ? textInput.value : "");
        // The test expects exactly this prefix
        textDisplay.textContent = `You typed: ${value}`;
    }
}

// 2. THE SETUP FUNCTION
function setupEventListeners() {
    const colorBtn = document.getElementById('changeColorButton');
    const resetBtn = document.getElementById('resetColorButton');
    const textInput = document.getElementById('textInput');

    if (colorBtn) {
        colorBtn.addEventListener('click', changeBackgroundColor);
    }

    if (resetBtn) {
        resetBtn.addEventListener('dblclick', resetBackgroundColor);
    }

    if (textInput) {
        textInput.addEventListener('input', displayUserInput);
    }

    document.addEventListener('keydown', displayKeyPress);
}

// 3. AUTO-RUN
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
} else {
    setupEventListeners();
}

// 4. EXPORTS FOR JEST
if (typeof module !== 'undefined') {
    module.exports = {
        changeBackgroundColor,
        resetBackgroundColor,
        displayKeyPress,
        displayUserInput,
        setupEventListeners
    };
}