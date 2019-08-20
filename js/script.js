let anchor1 = document.querySelector(".down-btn");
let anchor2 = document.querySelector(".book");
let calendar = document.querySelector(".basement");
let nextSection = document.querySelector(".service");

let scrolled1;
let scrolled2;
let target1 = nextSection.getBoundingClientRect().top;
let target2 = calendar.getBoundingClientRect().top;


anchor1.addEventListener("click", function() {
	scrolled1 = window.pageYOffset;
	scrollToNextSection();
})
function scrollToNextSection() {
	if(scrolled1 < target1) {
		window.scrollTo(0, scrolled1);
		scrolled1 += 10;
		requestAnimationFrame(scrollToNextSection);
	}
	else {
		window.scrollTo(0, target1);
	}
}

anchor2.addEventListener("click", function() {
	scrolled2 = window.pageYOffset;
	scrollToCalendar();
})
function scrollToCalendar() {
	if(scrolled2 < target2) {
		window.scrollTo(0, scrolled2);
		scrolled2 += 30;
		requestAnimationFrame(scrollToCalendar);
	}
	else {
		window.scrollTo(0, target2);
	}
}

