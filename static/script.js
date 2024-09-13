// Create a new IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  // The callback function is executed whenever observed elements enter or exit the viewport
  entries.forEach((entry) => {
      // Check if the entry (element) is currently intersecting the viewport
      if (entry.isIntersecting) {
          // Add the 'show' class to the element when it enters the viewport
          entry.target.classList.add("show");
      }
  });
});

// Select all elements with the class 'animate-class'
const hiddenElements = document.querySelectorAll(".animate-class");

// Observe each selected element to monitor its intersection status with the viewport
hiddenElements.forEach((el) => observer.observe(el));
