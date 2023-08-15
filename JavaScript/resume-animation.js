// Load the Lottie animation
var animationContainer = document.getElementById("loading-container");
var animationData = {
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "Images/animations/animation_cube_green.json" // Replace with animation's JSON path
};

var anim = bodymovin.loadAnimation(animationData);

window.addEventListener("load", function() {
    var reloaded = performance.navigation.type === 1;
    if(reloaded) {
        // Remove the "resumeAnimationShown" flag from localStorage
        localStorage.removeItem("resumeAnimationShown");
        // Remove the "animationShown" flag from localStorage
        localStorage.removeItem("animationShown");
    }

  // Check if the animation has been shown before
  var resumeAnimationShown = localStorage.getItem("resumeAnimationShown");

  if (!resumeAnimationShown) {
    // Show the animation
    animationContainer.style.display = "block";

    // Set a flag in localStorage to indicate the animation has been shown
    localStorage.setItem("resumeAnimationShown", "true");

    // Hide the animation after a delay
    setTimeout(function() {
      animationContainer.style.display = "none";
    }, 2000); // Adjust the delay time (in milliseconds) as needed
  } else {
    // Animation has been shown before, Hide the animation after a delay
    setTimeout(function() {
        animationContainer.style.display = "none";
      }, 500); // Adjust the delay time (in milliseconds) as needed
  }
});