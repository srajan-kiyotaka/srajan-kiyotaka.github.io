/*
// Load the Lottie animation
var animationContainer = document.getElementById("loading-container");
var animationData = {
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "Images/animations/animation_cube_2.json" // Replace with animation's JSON path
};

var anim = bodymovin.loadAnimation(animationData);

// Calculate the expiration time for 1 day from now
var expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 1);

window.addEventListener("load", function() {
    // Delayed action to hide the loading animation
    setTimeout(function() {
      document.getElementById("loading-container").style.display = "none";
    }, 2500); // Adjust the delay time (in milliseconds) as needed
});
  
*/


// Load the Lottie animation
var animationContainer = document.getElementById("loading-container");
var animationData = {
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "Images/animations/animation_cube_2.json" // Replace with animation's JSON path
};

var anim = bodymovin.loadAnimation(animationData);

window.addEventListener("load", function() {
    var reloaded = performance.navigation.type === 1;
    if(reloaded) {
        // Remove the "animationShown" flag from localStorage
        localStorage.removeItem("animationShown");
    }

  // Check if the animation has been shown before
  var animationShown = localStorage.getItem("animationShown");

  if (!animationShown) {
    // Show the animation
    animationContainer.style.display = "block";

    // Set a flag in localStorage to indicate the animation has been shown
    localStorage.setItem("animationShown", "true");

    // Hide the animation after a delay
    setTimeout(function() {
      animationContainer.style.display = "none";
    }, 2500); // Adjust the delay time (in milliseconds) as needed
  } else {
    // Animation has been shown before, Hide the animation after a delay
    setTimeout(function() {
        animationContainer.style.display = "none";
      }, 500); // Adjust the delay time (in milliseconds) as needed
  }
});
