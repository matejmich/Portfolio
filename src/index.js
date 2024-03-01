const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#f07800",
  "#e86f14",
  "#df661e",
  "#d55e25",
  "#cb562b",
  "#c04f2e",
  "#b54931",
  "#a94333",
  "#9d3d34",
  "#913934",
  "#843434",
  "#783033",
  "#6b2d31",
  "#5e292f",
  "#51262c",
  "#452328",
  "#381f24",
  "#2c1c1f",
  "#20181a",
  "#141414",
];
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
animateCircles();

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Function to reveal icons when the container is fully in the viewport
function revealIcons() {
  const container = document.querySelector('.tools-container');
  if (isFullyInViewport(container)) {
    const icons = container.querySelectorAll('.icon-container');
    icons.forEach((icon, index) => {
      icon.style.opacity = 0; // Initially hide the icon
      setTimeout(() => {
        icon.style.transition = 'opacity 1s ease'; // Add transition for smooth opacity change
        icon.style.opacity = 1; // Make the icon visible
      }, index * 500); // Delay each icon's animation by 500 milliseconds
    });
    // Remove the scroll event listener once the icons are revealed to avoid unnecessary computations
    window.removeEventListener('scroll', revealIcons);
  }
}

// Event listener to reveal icons when the user scrolls
window.addEventListener('scroll', revealIcons);

// Function to check if an element is fully in the viewport
function isFullyInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.bottom <= window.innerHeight 
    
  );
}

// // Call revealIcons initially to check if the container is already in the viewport
// revealIcons();

const cvContainer = document.getElementById('cv-link');

// Add a click event listener to the h2 element
cvContainer.addEventListener('click', function() {
    // URL of the PDF file
    const pdfUrl = '../assets/cv.pdf';

    // Open the PDF file in a new tab
    window.open(pdfUrl, '_blank');
});


const scrollButton1 = document.getElementById('scroll-btn1');

// Calculate the target scroll position
const targetPosition1 = document.querySelector('.page-two').offsetTop;

// Add a click event listener to the scroll button
scrollButton1.addEventListener('click', function() {
    // Scroll the page to the target position
    window.scrollTo({
        top: targetPosition1,
        behavior: 'smooth' // Smooth scrolling effect
    });
});
const scrollButton2 = document.getElementById('scroll-btn2');

// Calculate the target scroll position
const targetPosition2 = document.querySelector('.page-three').offsetTop;

// Add a click event listener to the scroll button
scrollButton2.addEventListener('click', function() {
    // Scroll the page to the target position
    window.scrollTo({
        top: targetPosition2,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const infoContainers = document.querySelectorAll('.info-container');

  infoContainers.forEach(function (container) {
    container.addEventListener('click', function () {
      const textContent = container.querySelector('h2').textContent.trim();

      // Create a temporary textarea element
      const textarea = document.createElement('textarea');

      // Set the value of the textarea to the text content
      textarea.value = textContent;

      // Append the textarea to the body
      document.body.appendChild(textarea);

      // Select the text inside the textarea
      textarea.select();

      // Execute the 'copy' command to copy the selected text to the clipboard
      document.execCommand('copy');

      // Remove the textarea from the body
      document.body.removeChild(textarea);

      // Optionally, provide visual feedback to the user
      container.classList.add('copied');
      setTimeout(function () {
        container.classList.remove('copied');
      }, 500);
    });
  });
});
