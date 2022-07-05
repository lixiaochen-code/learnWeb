class Game {
	constructor(time, speed) {
		this.sky = new Sky();
		this.land = new land(speed);
		this.bird = new bird();
		this.creatPipePair = new creatPipePair(time, speed);
		this.timer = null;
		this.tick = 16;
		this.rangePipePair = [];
	}

	startGame() {
		if (this.timer) return;
		this.bird.startWings();
		this.creatPipePair.startCreatPipePairs();
		this.timer = setInterval(() => {
			this.gameOver();
			this.land.move(16 / 1000);
			this.bird.move(16 / 1000);
			this.sky.move(16 / 1000);
			// console.log(bird);
			
			console.log(this.rangePipePair);
			
			this.creatPipePair.PipePairs.forEach((ele, index, self) => {
				ele.move(16 / 1000);
				
				const dom = ele;
				const bird = this.bird;
				// let arr = [];
				
				const _rangePipePair = this._rangePipePair;
						
						if (_rangePipePair(dom.downPipe, null,this.bird)) {
							this.rangePipePair.push(dom);
							console.log(this.rangePipePair);
							for (let i = 0; i < this.rangePipePair.length; i ++) {
								this.rangePipePair = this.rangePipePair[0] = this.rangePipePair[i] && this.rangePipePair.slice(i, i); 
							}
							console.log(this.rangePipePair);
							
						}
						// if (_rangePipePair(dom)) {
						// 	this.stopGame();
						// }
					
	
				
			});

		}, this.tick)
	}
	
	// _rangePipePair(dom, doms, bird) {
	// 	if (dom != null && doms == null) return dom.left >= this.bird.left - dom.width && dom.left <= this.bird
	// 		.left + this.bird.width;
	// 	if (dom == null && doms != null) return this.bird.top <= doms.upPipe.height || this.bird.top >= this.bird
	// 		.height + doms.downPipe.height;
	// }
	
	_rangePipePair(dom, doms, bird) {
		if (dom != null && doms == null) return dom.left >= bird.left - dom.width && dom.left <= bird
			.left + bird.width;
		if (dom == null && doms != null) return bird.top <= doms.upPipe.height || bird.top >= bird
			.height + doms.downPipe.height;
	}

	stopGame() {
		clearInterval(this.timer);
		this.creatPipePair.stopCreatPipePairs();
		this.bird.stopWings();
		this.timer = null;
		this.bird.stopWings();
	}

	gameOver() {
		const birdTop = this.bird.top;
		if (birdTop >= gameHeight - landHeight - birdHeight) {
			this.stopGame();
		}
	}


	regEvent() {
		window.onkeydown = (e) => {
			if (e.key === "Enter") {
				if (this.timer) {
					this.stopGame();
				} else {
					this.startGame();
				}
			} else if (e.key === " ") {
				this.bird.jump();
			}
		}
	}

}

let games = new Game(1000, -150);
games.regEvent();
