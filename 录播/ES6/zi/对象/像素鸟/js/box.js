// 盒子 可移动
// 属性：宽度，高度，X坐标，Y桌标，X，Y速度（像素、每秒），domele
class Box {
	constructor(width, height, left, top, xSpeed, ySpeed,dom) {
		this.width = width;
		this.height = height;
		this.left = left;
		this.top = top;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.dom = dom;
		this.render();
	}
	
	render() {
		this.dom.style.width = this.width + "px";
		this.dom.style.height = this.height + "px";
		this.dom.style.left = this.left + "px";
		this.dom.style.top = this.top + "px";
	}
	
	move(second) {
		const xDis = this.xSpeed * second;
		const yDis = this.ySpeed * second;
		
		this.left = this.left + xDis;
		this.top = this.top + yDis;
		if(this.onMove) {
			this.onMove();
		}
		
		this.render();
	}
	
}	