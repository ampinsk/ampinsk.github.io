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
  console.log("section");
}

section.onmouseout = function() {
  section2.className= 'note';
}

external.onmouseover = function() {
  external2.className= 'footnote-accent note';
  console.log("hi!!!!");
}

external.onmouseout = function() {
  external2.className= 'note';
}

paragraph.onmouseover = function() {
  paragraph2.className= 'footnote-accent note';
}

paragraph.onmouseout = function() {
  paragraph2.className= 'note';
}
