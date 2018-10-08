window.onload = function() {
	var canvasArea = document.getElementById('canvas_container');

    
    var paper = new Raphael(canvasArea, 500, 501);
    var t = paper.text(210, 10, "Lets Learn the painting");

    console.log(t);
    t.attr({

    })
	canvasArea.addEventListener("mousemove", getTheXY);
	drawCircle(paper,50, 50, 10);
	drawCircle(paper,paper.width - 50,50, 10);
	drawCircle(paper, 50, paper.height - 50, 10);
	drawCircle(paper, paper.width - 50, paper.height - 50, 10);

	drawPath(paper);

}


function drawCircle(paper,x,y,r){
						   			// x,y,r	
    var circleLeft = paper
			    	.circle(x,y,r)
			    	.attr({
			    		fill: 'green', 
			    		stroke: '#000', 
			    		"stroke-width": 3
			    	});

}
function drawPath(paper) {

	try {
		var tetronimo = paper.path("M 300 250 l 0 -50 -50 0 0 -50 -50 0 0 50 -50 0 0 50 z");
		tetronimo.attr(
		{
		    gradient: '90-#526c7a-#64a0c1',
		    stroke: '#3b4449',
		    'stroke-width': 3,
		    'stroke-linejoin': 'round',
		    rotation: -90
		}
		);
	} catch(e) {
		console.log(e);

	}
	
}

function getTheXY(event) {
	console.log(event);
	let postion = event.offsetX + ',' + event.offsetY;

	console.log(postion);
	document.getElementsByClassName('position')[0].innerHTML = postion;
}