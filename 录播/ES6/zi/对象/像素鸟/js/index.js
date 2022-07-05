
	class bird {
		constructor(left, top, ele) {
			this.left = left;
			this.top = top;
			this.bottom = 800 - this.top;
			this.ele = ele;
		}
		
		flay () {
			const count = 50;
			return this.left = this.ele.offsetLeft + count + "px";
		}
		
		jump () {
			const g = 5;
			let v = 0;
			v += g;
			this.bottom = this.bottom - v + "px";
		}
		
		changeWing () {
			
		}
		
	}
	
	const oBird = document.querySelector(".bird");
	
	let Bird = new bird(oBird.offsetLeft,oBird.offsetTop, oBird);
	setInterval(()=> {
		let left = Bird.flay();
		console.log(left, typeof left);
		oBird.style.left = left;
	}, 20);
	
 	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	