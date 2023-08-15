// Load the Lottie animation
var animationContainer = document.getElementById("loading-container");
var animationData = {
  container: animationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "Images/animations/animation_cube.json" // Replace with animation's JSON path
};

var anim = bodymovin.loadAnimation(animationData);