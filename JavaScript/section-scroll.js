document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
    //   console.log('Target ID:', targetId); // Log the target ID
      const targetElement = document.querySelector(targetId);
    //   console.log('Target Element:', targetElement); // Log the target element
      if (targetElement) {
        const offset = 170; // Adjust this value as needed
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        console.log('Target Position:', targetPosition); // Log the target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
  