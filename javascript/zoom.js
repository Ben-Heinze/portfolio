// Get references to the overlay and expanded image elements
const overlay = document.getElementById('overlay');
const expandedImg = document.getElementById('expandedImg');

// Function to open the overlay with the expanded image
function expandImage(img) {
    overlay.style.display = "flex";
    expandedImg.src = img.src;
}

// Add event listeners to all expandable images
const images = document.querySelectorAll('.expandable-image');
images.forEach(img => {
    img.onclick = function() {
        expandImage(img);
    };
});

// Function to close the overlay
function closeOverlay() {
    overlay.style.display = "none";
}