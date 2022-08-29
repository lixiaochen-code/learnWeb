// time stamp  时间戳
// isDetailed 是否返回详细时间
export default function(timeStamp,isDetailed = false){
    const date = new Date(+timeStamp);
    let month = (date.getMonth()+1).toString().padStart(2,"0");
    let oDate = date.getDate().toString().padStart(2, "0");
    if(isDetailed){
        let hour = date.getHours().toString().padStart(2, "0");
        let minutes = date.getMinutes().toString().padStart(2, "0");
        let seconds = date.getSeconds().toString().padStart(2, "0");
        return `${date.getFullYear()}-${month}-${oDate}  ${hour}:${minutes}:${seconds}`;
    } else {
        return `${date.getFullYear()}-${month}-${oDate}`;
    }
}