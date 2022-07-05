const domSky = document.querySelector(".sky");
const skyStyle = window.getComputedStyle(domSky, null);
const skyWidth = parseFloat(skyStyle.width);
const skyHeight = parseFloat(skyStyle.height);
const skyLeft = parseFloat(skyStyle.left);
const skyTop = parseFloat(skyStyle.top);

class Sky extends Box {
	// width, height, left, top, xSpeed, ySpeed, dom
	constructor(width, height, left, top, xSpeed, ySpeed, dom) {
		super(skyWidth, skyHeight, skyLeft, skyTop, -50, 0, domSky);
	}
	onMove () {
		if(this.left < -skyWidth/2) {
			this.left = 0;
		}
	}
}

// var _sky = new Sky();
// console.log(_sky);
// setInterval(() => {
// 	_sky.move(16 / 1000);
// }, 16)
