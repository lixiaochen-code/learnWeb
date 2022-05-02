/** 
 * callback 参数自然数 
 * 生成自然数   是否是素数
*/
import isPrime from "./isPrime"
export default class createNumber{
    constructor(duration = 500){
        this.duration = duration;
        this.timer = null;
        this.callback = null;
        this.num = 1;
    }
    start(){
        if(this.timer) {
            return;
        }
        this.timer = setInterval(()=>{
            this.callback && this.callback(this.num,isPrime(this.num));
            this.num ++;
        }, this.duration)
    }
    stop(){
        clearInterval(this.timer);
        this.timer = null;
    }
}