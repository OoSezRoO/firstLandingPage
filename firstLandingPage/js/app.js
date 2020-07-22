/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBar = document.getElementById('navbar__list');

let navBuilder = document.createElement('li');
navBuilder.innerHTML = 
`<a href="#section1">Section 1</a>
	<a href="#section2">Section 2</a>
		<a href="#section3">Section 3</a>
			<a href="#section4">Section 4</a>
`;

navBar.appendChild(navBuilder);


// Add class 'active' to section when near top of viewport

const offset = (section) => {
	return Math.floor(section.getBoundingClientRect().top);
};
// Removing  Active Class
const removeActive = (section) => {
	section.classList.remove('your-active-class');
};
// Adding Active Class
const addActive = (conditonal , section) => {
	if(conditonal){
		section.classList.add('your-active-class');
	};
};
// The SectionActive Function

const sectionActivation = () => {
	sections.forEach(section => {
		const elementOffSet = offset(section);
		inViewport = () => elementOffSet < 150 && elementOffSet >= -150;

		removeActive(section);
		addActive(inViewport(),section);
	});
};

window.addEventListener('scroll' , sectionActivation);
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


