const VIDEO = document.getElementById('video');
const GALLERY = document.getElementsByClassName('gallery')[0];
var WIDTH = window.innerWidth; 
var HEIGHT = window.innerHeight;

if (WIDTH>HEIGHT)
	VIDEO.style.width = WIDTH + "px";
else
	VIDEO.style.height = HEIGHT + "px";

VIDEO.addEventListener('ended', function(){
	var main = document.getElementsByClassName('main')[0];
	main.classList.add('transparent');
	GALLERY.classList.remove('none');
	GALLERY.classList.remove('transparent');
	GALLERY.classList.add('flex');
	setTimeout(function(){
		document.body.removeChild(main);
	}, 1500);
});

VIDEO.addEventListener('canplay', function(){
	var loading = document.getElementById('loading');
	loading.classList.add('hide');
	// VIDEO.play();
});

var bar = document.getElementsByClassName('navBar')[0];
function checkNavBar(){
	var scrollTop = Number(document.body.scrollTop);
	var scrollTotal = Number(document.body.scrollHeight)-Number(window.innerHeight);
	if(scrollTop < 50){
		bar.classList.add('hidden');
		bar.classList.remove('show');
	}
	else{
		bar.classList.add('show');
		bar.classList.remove('hidden');
	}
}

// window.addEventListener('scroll', checkNavBar);