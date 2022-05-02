import createEleNum from "./createEleNum";
import judegPrime from "../util/judegPrime";
let isStart = false;
let num = new judegPrime(100);
num.callback = function (n,isPrime){
    createEleNum(n,isPrime)
}
window.onclick = function(){
    if(isStart){
        num.stop();
        isStart = false;
    } else{
        num.start();
        isStart = true;
    }
}