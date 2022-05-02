/**
 * 判断n是否为素数
 * 仅能被1和本身整除
 * @param {*} n 
 * @returns boolean
 */
export default function(num){
    if(num < 2) {
        return false;
    }
    for(let i = 2; i < num; i ++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}