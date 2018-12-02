// =======================================================================
// Site scripts
// =======================================================================

// Masthead Modal + Toggle
var masthead = document.querySelector('.c-masthead');
var mastheadToggle = document.querySelector('.c-masthead__toggle');
var mastheadContent = document.querySelector('.c-masthead__content');

var toggleClick = function toggleClick(e) {
   e.preventDefault();
   masthead.classList.toggle('c-masthead--open');
   mastheadToggle.classList.toggle('c-masthead__toggle--click');
};

mastheadToggle.addEventListener('click', toggleClick, false);

// Scroller
//$('.c-section--scroller').animate({ scrollLeft: 2200 }, 70000, "linear");