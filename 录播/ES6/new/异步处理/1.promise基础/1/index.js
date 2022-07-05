let arr = [1, 2, 3, 4, 5, 6];
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function biaobai(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Math.random() > 0.8) {
            console.log(`老邓向女神${arr[i]}号表白成功，老邓很开心！！！`);
            return;
        }
        if (i === arr.length - 1) {
            console.log("表白全部失败，老邓有点怀疑自我！！！")
        }
    }
}
// biaobai(arr);

function newBiaobai(target, success, lose){
    console.log(`
        老邓向女神${target},发出了表白
    `)
    console.log(`
        正在等待女神${target}的消息
    `)
    setTimeout(() => {
        if(Math.random() < 0.1) {
            success(`${target} ==> 老邓，你是三，我是九，除了你还是你😘`,target);
        } else {
            lose(`${target} ==> 老邓，你是个好人😁`,target);
        }
    }, 500);
}
// newBiaobai("小丽",function(a,b){
//     console.log(a,b)
// },function(a,b){
//     console.log(a,b)
// })



// promise