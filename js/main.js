window.sr = ScrollReveal({
  duration: 800,
  distance: '10px',
  scale: .95
});

var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');
var link5 = document.getElementById('link5');

var body = document.body;

link1.onmouseover = function() {
	body.className = 'hovered1';
}

link1.onmouseout = function() {
	body.className = '';
}

link2.onmouseover = function() {
	body.className = 'hovered2';
}

link2.onmouseout = function() {
	body.className = '';
}

link3.onmouseover = function() {
	body.className = 'hovered3';
}

link3.onmouseout = function() {
	body.className = '';
}

link4.onmouseover = function() {
	body.className = 'hovered4';
}

link4.onmouseout = function() {
	body.className = '';
}

link5.onmouseover = function() {
	body.className = 'hovered5';
}

link5.onmouseout = function() {
	body.className = '';
}
