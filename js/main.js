window.sr = ScrollReveal({
  duration: 800,
  distance: '10px',
  scale: .95
});

var body = document.body;
var external = document.getElementsByClassName("external-link");
var external2 = document.getElementById('external2');


kleo.onmouseover = function() {
	body.className = 'kleo';
}

kleo.onmouseout = function() {
	body.className = '';
  console.log("my javascript is very bad don't judge me");
}

desktop.onmouseover = function() {
	body.className = 'desktop';
}

desktop.onmouseout = function() {
	body.className = '';
}

baudelaire.onmouseover = function() {
	body.className = 'baudelaire';
}

baudelaire.onmouseout = function() {
	body.className = '';
}

read.onmouseover = function() {
	body.className = 'read';
}

read.onmouseout = function() {
	body.className = '';
}

cli.onmouseover = function() {
	body.className = 'cli';
}

cli.onmouseout = function() {
	body.className = '';
}

asterisk.onmouseover = function() {
  asterisk2.className= 'footnote-accent note';
}

asterisk.onmouseout = function() {
  asterisk2.className= 'note';
}

dagger.onmouseover = function() {
  dagger2.className= 'footnote-accent note';
}

dagger.onmouseout = function() {
  dagger2.className= 'note';
}

doubledagger.onmouseover = function() {
  doubledagger2.className= 'footnote-accent note';
}

doubledagger.onmouseout = function() {
  doubledagger2.className= 'note';
}

section.onmouseover = function() {
  section2.className= 'footnote-accent note';
  console.log("hi!!!!!!");
}

section.onmouseout = function() {
  section2.className= 'note';
}

paragraph.onmouseover = function() {
  paragraph2.className= 'footnote-accent note';
  console.log("my javascript is very bad don't judge me");
}

paragraph.onmouseout = function() {
  paragraph2.className= 'note';
}



// a key map of allowed keys
var allowedKeys = {
  65: 'a',
  77: 'm',
  78: 'n',
  68: 'd',
};

// the 'official' Konami Code sequence
var konamiCode = ['a', 'm', 'a', 'n', 'd', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;

      setTimeout(function(){
        resetCheats();
      }, 5000);
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  body.className = "easter-egg";
}
function resetCheats() {
  body.className = "";
}
