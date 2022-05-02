/**
 * 随机生成一个颜色
 */
import getRandom from "./getRandom";
var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
export default function(){
    let num = getRandom(0, colors.length);
    return colors[num];
}