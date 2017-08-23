const VIDEO = document.getElementById('video');
const GALLERY = document.getElementsByClassName('gallery')[0];
var WIDTH = window.innerWidth; 
var HEIGHT = window.innerHeight;

if (WIDTH>HEIGHT)
	VIDEO.style.width = WIDTH + "px";
else
	VIDEO.style.height = HEIGHT + "px";

enableInlineVideo(video);

VIDEO.addEventListener('ended', function(){
	var main = document.getElementsByClassName('main')[0];
	GALLERY.classList.remove('none');
	GALLERY.classList.remove('transparent');
	GALLERY.classList.add('flex');
	main.classList.add('hide');
});

// window.addEventListener('touchstart', function(){
// 	loadImage(0);
// 	// var loading = document.getElementById('loading');
// 	// loading.classList.add('hide');
// 	VIDEO.play();
// });

// window.addEventListener('mousedown', function(){
// 	loadImage(0);
// 	// var loading = document.getElementById('loading');
// 	// loading.classList.add('hide');
// 	VIDEO.play();
// });

VIDEO.addEventListener('canplay', function(){
	// loadImage(0);
	// var loading = document.getElementById('loading');
	// loading.classList.add('hide');
	VIDEO.play();
});

/*LOAD IMAGES*/

var imgAddresses = [
"assets/cover/1.png",
"assets/cover/8.png",
"assets/cover/1.png",
"assets/cover/6.png",
"assets/cover/5.png",
"assets/cover/4.png",
"assets/cover/1.png",
"assets/cover/2.png",
"assets/cover/1.png",
"assets/3covers/3.png",
"assets/3covers/2.png",
"assets/3covers/1.png",
"assets/CARTIUZIPABLO/3.png",
"assets/CARTIUZIPABLO/2.png",
"assets/CARTIUZIPABLO/1.png",
"assets/collage/3.png",
"assets/collage/2.png",
"assets/collage/1.png",
"assets/dntracysmooky/3.png",
"assets/dntracysmooky/2.png",
"assets/dntracysmooky/1.png",
"assets/dsavage/2.png",
"assets/dsavage/nomistakes.png",
"assets/dsavage/2.png",
"assets/lybb12vy/3.png",
"assets/lybb12vy/2.png",
"assets/lybb12vy/1.png",
"assets/usher/3.png",
"assets/usher/2.png",
"assets/usher/u1.png",
"assets/danny/3.png",
"assets/danny/2.png",
"assets/danny/1.png",
"assets/duwapkaine/6.png",
"assets/duwapkaine/5.png",
"assets/duwapkaine/4.png",
"assets/duwapkaine/3.png",
"assets/duwapkaine/2.png",
"assets/duwapkaine/1.png",
"assets/jaden/3.png",
"assets/jaden/2.png",
"assets/jaden/1.png",
"assets/womens/12.png",
"assets/womens/11.png",
"assets/womens/10.png",
"assets/womens/9.png",
"assets/womens/8.png",
"assets/womens/7.png",
"assets/womens/6.png",
"assets/womens/5.png",
"assets/womens/4.png",
"assets/womens/3.png",
"assets/womens/2.png",
"assets/womens/1.png",
"assets/thanksgallery/9.png",
"assets/thanksgallery/8.png",
"assets/thanksgallery/7.png",
"assets/thanksgallery/6.png",
"assets/thanksgallery/5.png",
"assets/thanksgallery/4.png",
"assets/thanksgallery/3.png",
"assets/thanksgallery/2.png",
"assets/thanksgallery/1.png",
"assets/iii/6.png",
"assets/iii/5.png",
"assets/iii/4.png",
"assets/iii/3.png",
"assets/iii/2.png",
"assets/iii/1.png",
"assets/youhoh/3.png",
"assets/youhoh/2.png",
"assets/youhoh/1.png",
"assets/diortommy/3.png",
"assets/diortommy/2.png",
"assets/diortommy/1.png",
"assets/cat/6.png",
"assets/cat/5.png",
"assets/cat/4.png",
"assets/cat/3.png",
"assets/cat/2.png",
"assets/cat/1.png",
"assets/floyd/white0.png",
"assets/floyd/middle.png",
"assets/floyd/white0.png",
"assets/nokiadrop/right.png",
"assets/nokiadrop/middle.png",
"assets/nokiadrop/left.png",
"assets/stoney/3.png",
"assets/stoney/2.png",
"assets/stoney/1.png",
"assets/exponents/galllery.png",
"assets/exponents/galltext.png",
"assets/exponents/erytext.png",
"assets/exponents/gallery.png",
"assets/exponents/middle.png",
"assets/exponents/expo.png",
"assets/mysteryface/rightpane.png",
"assets/mysteryface/mathsgallery.png",
"assets/mysteryface/leftpane.png",
"assets/migos/takeoff.png",
"assets/migos/quavo.png",
"assets/migos/offset.png",
"assets/telsaapple/3.png",
"assets/telsaapple/2.png",
"assets/telsaapple/1.png",
"assets/3.png",
"assets/2.png",
"assets/1.png",
"assets/floyd/white0.png",
"assets/newfriends.png",
"assets/floyd/white0.png"

];

var spans = document.getElementsByTagName('span');
var counter = 0;
function loadImage(counter) {
  //Break out if no more images
  if(counter==imgAddresses.length) { return; }

  //Grab an image obj
  var span = spans[counter];
  var I = document.createElement('img');

  span.appendChild(I);

  //Monitor load or error events, moving on to next image in either case
  I.onload = I.onerror = function() { loadImage(counter+1); }

  //Change source (then wait for event)
  I.src = imgAddresses[counter];
}

