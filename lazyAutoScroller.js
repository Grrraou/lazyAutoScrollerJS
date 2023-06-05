// Create the start and stop buttons
const autoscrollButton = document.createElement('button');
autoscrollButton.innerHTML = '&#9658;'; // Play icon
autoscrollButton.style.position = 'fixed';
autoscrollButton.style.bottom = '20px';
autoscrollButton.style.right = '20px';
autoscrollButton.style.width = '30px';
autoscrollButton.style.height = '30px';
autoscrollButton.style.backgroundColor = 'green';
autoscrollButton.style.borderRadius = '50%';
autoscrollButton.style.display = 'flex';
autoscrollButton.style.justifyContent = 'center';
autoscrollButton.style.alignItems = 'center';
autoscrollButton.style.fontSize = '14px';
autoscrollButton.style.color = 'white';
autoscrollButton.style.cursor = 'pointer';

// Select the element to be scrolled
const elementToScroll = document.documentElement; // Change this to the desired element

// Set the scroll speed and interval in milliseconds
const scrollSpeed = 1; // Adjust this value to change the scroll speed
const scrollInterval = 10; // Adjust this value to change the scroll interval

let isScrolling = false;
let scrollIntervalId;

// Function to start or stop autoscrolling
function toggleAutoscroll() {
  if (isScrolling) {
    clearInterval(scrollIntervalId);
    autoscrollButton.style.backgroundColor = 'green';
    autoscrollButton.innerHTML = '&#9658;'; // Play icon
  } else {
    scrollIntervalId = setInterval(autoscroll, scrollInterval);
    autoscrollButton.style.backgroundColor = 'red';
    autoscrollButton.innerHTML = '&#9724;'; // Stop icon
  }
  isScrolling = !isScrolling;
}

// Function to scroll the element
function autoscroll() {
  elementToScroll.scrollBy(0, scrollSpeed); // Scrolls vertically, adjust the X and Y values for horizontal scrolling
}

// Add click event listener to the autoscroll button
autoscrollButton.addEventListener('click', toggleAutoscroll);

// Append the autoscroll button to the document body
document.body.appendChild(autoscrollButton);
