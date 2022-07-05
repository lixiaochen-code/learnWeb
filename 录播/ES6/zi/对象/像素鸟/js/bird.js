const dombird = document.querySelector(".bird");
const birdStyle = window.getComputedStyle(dombird, null);
const birdWidth = parseFloat(birdStyle.width);
const birdHeight = parseFloat(birdStyle.height);
const birdLeft = parseFloat(birdStyle.left);
const birdTop = parseFloat(birdStyle.top);
const gameDom = document.querySelector(".game");
const gameHeight = gameDom.clientHeight;
const maxHeight = document.querySelector(".game").clientHeight - landHeight - birdHeight;

class bird extends Box {
	// width, height, left, top, xSpeed, ySpeed, dom
	constructor(width, height, left, top, xSpeed, ySpeed, dom) {
		super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, dombird);
		this.g = 1000;
		this.flappingWings = 1;
		this.timer = null;
		// this.render();
	}
	onMove() {
		if (this.top < 0) {
			this.top = 0;
		} else if (this.top > maxHeight) {
			this.top = maxHeight;
		}
	}
	startWings() {
		if (this.timer) {
			return;
		}
		this.timer = setInterval(() => {
			this.flappingWings++;
			if (this.flappingWings > 3) {
				this.flappingWings = 1;
			}
			this.render();
		}, 200)

	}
	stopWings() {
		clearInterval(this.timer);
		this.timer = null;
	}
	render() {
		super.render();
		dombird.classList = `bird swing${this.flappingWings}`;
	}
	move(second) {
		super.move(second);
		this.ySpeed += this.g * second;
	}
	jump() {
		this.ySpeed = -200;
	}
}

// var _bird = new bird();
// setInterval(() => {
// 	_bird.move(16 / 1000);
// }, 16)
