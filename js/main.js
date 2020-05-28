// Scrolling behavior

window.sr = ScrollReveal({
  duration: 800,
  distance: '10px',
  scale: .95
});

// Hover states

var body = document.body;

function addClass(element, nameOfClass) {
	if (element.classList) {
 		element.classList.add(nameOfClass);
	}
	else {
		var regExp = new RegExp('(\\s|^)' + nameOfClass + '(\\s|$)');
		if (!element.className.match(regExp)) {
			element.className += " " + nameOfClass;
		}
	}
}

function removeClass(element, nameOfClass) {
	if (element.classList) {
		element.classList.remove(nameOfClass);
	}
	else {
		var regExp = new RegExp('(\\s|^)' + nameOfClass + '(\\s|$)');
		if (element.className.match(regExp)) {
			element.className.replace(regExp, ' ');
		}
	}
}

// Easter egg

// I super got this from stack overflow

var allowedKeys = {
  65: 'a',
  77: 'm',
  78: 'n',
  68: 'd',
};

var amanamiCode = ['a', 'm', 'a', 'n', 'd', 'a'];

// a variable to remember the 'position' the user has reached so far.
var amanamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the amanami code
  var requiredKey = amanamiCode[amanamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the amanami code sequence
    amanamiCodePosition++;

    // if the last key is reached, activate cheats
    if (amanamiCodePosition == amanamiCode.length) {
      activateCheats();
      amanamiCodePosition = 0;
    }
  } else {
    amanamiCodePosition = 0;
  }
});

function activateCheats() {
  body.classList.add("easter-egg");
}
