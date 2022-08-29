export default function(fun,duration = 1000){
    let timer = null;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...args);
        }, duration);
    }
}