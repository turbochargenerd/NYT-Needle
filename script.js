const needle = document.getElementById('needle');

function updateNeedle(probability) {
    // Convert the probability to an angle between -45 and 45 degrees
    const angle = (probability - 0.5) * 90;
    needle.style.transform = `rotate(${angle}deg)`;
}

// Example usage: Update the needle based on a probability (0 to 1)
updateNeedle(-.08); // Adjust this value to see the needle move
