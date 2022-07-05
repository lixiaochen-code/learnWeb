
	const gameWidth = gameDom.clientWidth;
	
	// 水管类   水管对
	// (width, height, left, top, xSpeed, ySpeed,dom)
	class pipe extends Box {
		constructor(height, top, xSpeed, dom) {
			super(52, height, gameWidth, top, xSpeed, 0, dom);
			// this.timer = null;
		}
	
		onMove() {
			if (this.left < -this.width) {
				this.dom.remove();
			}
		}
	
		// startMove() {
		// 	console.log(1);
		// 	if (this.timer) {
		// 		return;
		// 	}
		// 	this.timer = setInterval(() => {
		// 		super.move(16 / 1000);
		// 	}, 16);
		// }
	
	}
	
	function randomNum(max, min) {
		return Math.random() * (max - min) + min;
	}
	
	
	
	
	// 水管对
	class pipePair {
		constructor(xSpeed) {
			const pipeSpeed = xSpeed;
			this.gapHeight = 150;
			this.minHeight = 70;
			this.maxHeight = gameHeight - landHeight - this.gapHeight - this.minHeight;
			// height, top, xSpeed, dom
			const upHeight = randomNum(this.maxHeight, this.minHeight);
			const upPipeDom = document.createElement("div");
			upPipeDom.classList = "pepi up";
			this.upPipe = new pipe(upHeight, 0, pipeSpeed, upPipeDom);
	
			const downHeight = gameHeight - landHeight - upHeight - this.gapHeight;
			const downPipeTop = upHeight + this.gapHeight;
			const downPipeDom = document.createElement("div");
			downPipeDom.classList = "pipe down";
			this.downPipe = new pipe(downHeight, downPipeTop, pipeSpeed, downPipeDom);
			gameDom.appendChild(upPipeDom);
			gameDom.appendChild(downPipeDom);
		}
		
		
		judgeLeft() {
			return this.upPipe.left < -this.upPipe.width;
		}
	
		move(second) {
			this.upPipe.move(second);
			this.downPipe.move(second);
		}
	}
	
	// const _pipePair = new pipePair(_land.xSpeed);
	
	// setInterval(() => {
	// 	_pipePair.move(16 / 1000);
	// }, 16);
	
	
	
	
	// 创建水管对
	class creatPipePair {
		constructor(time, speed) {
			this.PipePairs = [];
			this.timer = null;
			this.time = time;
			this.speed = speed;
		}
	
	
	
		startCreatPipePairs() {
			if (this.timer) {
				return;
			}
			this.timer = setInterval(() => {
				this.PipePairs.push(new pipePair(this.speed));
				// console.log(this.PipePairs);
				for(let i = 0; i < this.PipePairs.length; i ++) {
					if(this.PipePairs[i].judgeLeft()){
						this.PipePairs.splice(i, 1);
						i --;
					}
				}
			}, this.time);
		}
	
		stopCreatPipePairs() {
			clearInterval(this.timer);
			this.timer = null;
		}
	}
	// var _creatPipePair = new creatPipePair(1000);
	// _creatPipePair.startCreatPipePairs();
	// setInterval(() => {
	// 	console.log(_creatPipePair.PipePairs);
	// 	_creatPipePair.PipePairs.forEach((ele) => {
	// 		ele.move(16 / 1000);
	// 	})
	// }, 16)
