window.onload = function() {
	var canvasArea = document.getElementById('canvas_container');

    var paper = new Raphael(canvasArea, 500, 500);
    			// x,y,r	
 
var canvas = document.getElementById('canvas_container'),
	paper = new Raphael(canvas, 500, 700),
	colour = '#EF1F1F',
	mousedown = false,
	width = 1,
	lastX, lastY, path, pathString;

	var pathStringArray = [];

$(canvas).mousedown(function (e) {
	mousedown = true;
	
	var x = e.offsetX,
		y = e.offsetY;
	

	pathString = 'M' + x + ' ' + y + 'l0 0';
	// pathStringArray.push(pathString);
	path = paper.path(pathString);
	path.attr({
		'stroke': colour,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round',
		'stroke-width': width
	});
	
	lastX = x;
	lastY = y;
});
$(document).mouseup(function () {
	mousedown = false;
	
	console.log('mouseup');
	console.log(pathStringArray);
	

});

$(canvas).mousemove(function (e) {
	if (!mousedown) {
		return;
	}
	
	var x = e.offsetX,
		y = e.offsetY;
	
	pathString += 'l' + (x - lastX) + ' ' + (y - lastY);
	console.log(pathString);
	// pathStringArray.push(pathString);

	path.attr('path', pathString);
	
	lastX = x;
	lastY = y;
});

$(document).keydown(function (e) {
	if (e.keyCode > 48 && e.keyCode < 58) {
		width = e.keyCode - 48;
	}
});

$('#canvascolours [data-colour]').each(function () {
	var $this = $(this),
		divColour = $this.data('colour');
	
	// Change the background colour of the box
	$this.css('background-color', divColour);
	
	// Add the event listener
	$this.click(function () {
		colour = divColour;
	});
});



}