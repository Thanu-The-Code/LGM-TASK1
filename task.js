const sidebar = document.querySelector('.header .nav-bar .nav-list .sidebar');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

sidebar.addEventListener('click', () => {
	sidebar.classList.toggle('active');``
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#010101';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		sidebar.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");

for (var i = 0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener('mouseover', function () {
		console.log(activeImages)

		if (activeImages.length > 0) {
			activeImages[0].classList.remove('active')
		}


		this.classList.add('active')
		document.getElementById('featured').src = this.src
	})
}

let buttonRight = document.getElementById('slideright');
let buttonLeft = document.getElementById('slideleft');

buttonLeft.addEventListener('click', function () {
	document.getElementById('sliderimg').scrollLeft -= 180
});

buttonRight.addEventListener('click', function () {
	document.getElementById('sliderimg').scrollLeft += 180
});

