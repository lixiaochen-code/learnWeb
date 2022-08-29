// export default {
//     bind(el,binding,vnode,oldVnode){
//         console.log(el,binding,vnode,oldVnode);
//     },
//     inserted(el,binding,vnode,oldVnode){
//         console.log(el,binding,vnode,oldVnode);
//     },
//     update(el,binding,vnode,oldVnode){
//         console.log(el,binding,vnode,oldVnode);
//     },
//     componentUpdated(el,binding,vnode,oldVnode){
//         console.log(el,binding,vnode,oldVnode);
//     },
//     unbind(el,binding,vnode,oldVnode){
//         console.log(el,binding,vnode,oldVnode);
//     },
// }
import { eventBus } from "@/utils";
import loadingGif from "@/assets/default.gif"


let imgArr = [];
eventBus.$on("blogListScroll", function (dom) {
    for (const iterator of imgArr) {
        if (iterator.isLoading) continue;
        setImg(iterator);
    }
})
const clientHight = document.documentElement.clientHeight;
function setImg(iterator) {
    // 先将该元素的图片设置为占位图  判断是否已经设置了 设置了就不用了
    if (!iterator.loadingGif) {
        iterator.el.src = loadingGif;
        iterator.loadingGif = true;
    }
    
    // 判断该元素是否在屏幕可视区内 在则开始加载缩略图
    const positionInfo = iterator.el.getBoundingClientRect().top;
    if (positionInfo >= -150 && positionInfo <= clientHight) {
        const img = new Image();
        img.src = iterator.src;
        img.onload = function () {
            iterator.el.src = iterator.src;
            iterator.isLoading = true;
            // 处理完之后就删除该元素
            imgArr = imgArr.filter(i => !i.isLoading);
        }
    }
}

export default {
    inserted(el, bindings, vnode, oldVnode) {
        const obj = {
            el,
            src: bindings.value,
            isLoading: false, // 处理状态
            loadingGif: false   // 是否设置了LoadingGif
        }
        // 先将页面内 所有的需要加载缩略图的图片设置为 占位图片
        imgArr.push(obj);
        setImg(obj);
    },
    unbind(el) {
        // 将不符合的元素删除
        imgArr = imgArr.filter(e => e.el !== el);
    }
}