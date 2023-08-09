document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Get all sections
    sections.forEach(section => {
        section.addEventListener("click", function () {
            window.location.hash = section.id;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });

        // Remove the hash from the URL using the History API
        if (history.replaceState) {
          history.replaceState(null, null, this.getAttribute("href"));
        }
      });
    });
  });