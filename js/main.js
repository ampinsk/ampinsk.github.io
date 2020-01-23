window.sr = ScrollReveal({
  duration: 800,
  distance: '10px',
  scale: .95
});

var kleo = document.getElementById('kleo');
var desktop = document.getElementById('desktop');
var experiments = document.getElementById('experiments');
var baudelaire = document.getElementById('baudelaire');
var read = document.getElementById('read');

var body = document.body;

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

experiments.onmouseover = function() {
	body.className = 'experiments';
}

experiments.onmouseout = function() {
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
