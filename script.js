const VIDEO = document.getElementsByTagName('video')[0];
var WIDTH = window.innerWidth; 
var HEIGHT = window.innerHeight;

if (WIDTH>HEIGHT)
	VIDEO.style.width = WIDTH + "px";
else
	VIDEO.style.height = HEIGHT + "px";

VIDEO.addEventListener('ended', function(){
	var main = document.getElementsByClassName('main')[0];
	main.classList.add('transparent');
	
})