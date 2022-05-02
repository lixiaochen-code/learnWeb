/**
 * 在min和max范围内生成一个随机整数
 * @param {*} min 
 * @param {*} max 
 * @returns Number
 */
export default function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}