// dummy function
window.addEventListener('load', (event) => {
  console.log("Page loaded.");
});


// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import '/assets/js/bootstrap.bundle.min.js';


//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
