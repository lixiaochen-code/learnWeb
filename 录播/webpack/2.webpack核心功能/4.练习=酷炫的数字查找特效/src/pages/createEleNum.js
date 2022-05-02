/**
 * 
 * @param {*} n 
 * @param {*} isPrime 
 * returns [element]
 */
import getColor from "../util/getColor";
import getRandom from "../util/getRandom";
let oContainer = document.getElementsByClassName("container")[0];
let oCenter = document.getElementsByClassName("center")[0];
// color: rgb(128, 227, 247); transform: translate(-163px, -22px); opacity: 0;
export default function (n, isPrime) {
    let color = getColor();
    let oSpan = document.createElement("span");
    oSpan.innerText = n;
    let oDiv = null;
    if (isPrime) {
        oDiv = document.createElement("div");
        oDiv.className = "center";
        oSpan.style.color = color;
        oDiv.innerText = n; 
    } 
    oCenter.innerText = n;
    oContainer.appendChild(oSpan);
    oDiv && document.body.append(oDiv);
    //只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow
    getComputedStyle(oContainer).width;
    if(oDiv){
        oDiv.style.cssText = `
            color:${color};
            transform: translate(${getRandom(-250,250)}px, ${getRandom(-250,250)}px);
            opacity: 0;
        `
    }

}