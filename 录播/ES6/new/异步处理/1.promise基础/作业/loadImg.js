function createImage(imgUrl){
    return new Promise((resolve,reject)=>{
        console.log(`开始加载照片${imgUrl}`);
        const img = new Image();
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function () {
            reject("图片加载失败");
        }
        img.src = imgUrl;
    })
}
createImage("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659413129&t=221d1092cafb818095c39dfbcae0e365").then(data=>{

},err=>{

})