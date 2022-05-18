/**
 * 
 * @param {object} obj styleClassObject
 * @param {element} parentEle 要插入的父级元素
 * @returns 
 */
import splitEleName from "./splitEleName";
export default function(obj,parentEle){
    for (const key in obj) {
        let eleName = splitEleName(key,"-");
        let ele = document.createElement(eleName);
        ele.classList.toggle(obj[key]);
        parentEle.appendChild(ele);
    }
}