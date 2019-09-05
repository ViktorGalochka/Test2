let anchor1 = document.querySelector(".down-btn");
let anchor2 = document.querySelector(".book");
let calendar = document.querySelector(".basement");
let nextSection = document.querySelector(".service");

let services = document.querySelector(".services-list");

let screenWidth = document.documentElement.clientWidth;

let scrolled1;
let scrolled2;
let scrolled3;
let target1 = nextSection.getBoundingClientRect().top;
let target2 = calendar.getBoundingClientRect().top;
let target3 = services.getBoundingClientRect().top - 500;


window.addEventListener("scroll", function() {
	loadBlocks();
});

function loadBlocks() {
	let incTime = 0;
	if(window.pageYOffset >= target3) {
		scrolled3 = window.pageYOffset;
		for(let i = 0; i < services.children.length; i++) {
			incTime += 300;
			setTimeout(() => {
				services.children[i].style.opacity = "1";
			}, incTime);
		}
	}
}

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


adaptive();

// let prom = new Promise((res,rej) => {
// 	res(screenWidth <= 750);
// 	rej(screenWidth > 750);
// })
// prom.then(() => {
// 	document.querySelector(".parallax-window").dataset.imageSrc = "img/banner-mobile.jpg";
// }).catch(()=> {
// 	document.querySelector(".parallax-window").dataset.imageSrc = "img/banner.jpg";
// })



function adaptive() {
	if (screenWidth <= 750) {
		document.querySelector(".parallax-window").dataset.imageSrc = "img/banner-mobile.jpg";
	}
	
}


