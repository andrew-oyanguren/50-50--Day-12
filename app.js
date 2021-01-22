// Variables
const toggleBtns = document.querySelectorAll('.faq-toggle');

// Event Listeners

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const faq = btn.parentNode;
    faq.classList.toggle('active');
  })
})

// Functions


// bring in toggle buttons 
//loop through nodelist
// add click event
// toggle active class on parent node