// time stamp  时间戳
export default function(timeStamp){
    const date = new Date(+timeStamp);
    let month = (date.getMonth()+1).toString().padStart(2,"0");
    let oDate = date.getDate().toString().padStart(2, "0");
    return `${date.getFullYear()}-${month}-${oDate}`;
}