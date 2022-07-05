const domLand = document.querySelector(".land");
const landStyle = window.getComputedStyle(domLand, null);
const landWidth = parseFloat(landStyle.width);
const landHeight = parseFloat(landStyle.height);
const landLeft = parseFloat(landStyle.left);
const landTop = parseFloat(landStyle.top);

class land extends Box {
	// width, height, left, top, xSpeed, ySpeed, dom
	constructor(xSpeed) {
		super(landWidth, landHeight, landLeft, landTop, xSpeed, 0, domLand);
	}
	onMove () {
		if(this.left < -landWidth/2) {
			this.left = 0;
		}
	}
}

// var _land = new land(-150);
// console.log(_land);
// setInterval(() => {
// 	_land.move(16 / 1000);
// }, 16)
