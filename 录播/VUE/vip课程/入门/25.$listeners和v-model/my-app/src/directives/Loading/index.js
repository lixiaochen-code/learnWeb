import style from "./loading.module.less";
import imgSrc from "@/assets/loading.svg"
function createImage(){
    const img = document.createElement("img");
    img.className = style["loading-li"];
    img.src = imgSrc;
    return img;
}

function isImage(el){
    return el.querySelector(`.${style["loading-li"]}`);
}


// const img = createImage();
// export default {
//     bind(el, binding){
//         console.log("bind");
//         if(binding.value){
//             el.appendChild(img);
//         }
//     },
//     inserted(el, binding){
//         console.log(binding);
//     },
//     update (el, binding) {
//         console.log("update");
//         if(!binding.value){
//             if(isImage(el)){
//                 img.remove();
//             }
//         }
//     }
// }

export default function(el, binding) {
    const icurImg = isImage(el);
    if( binding.value ) {
        if(!icurImg){
            const img = createImage();
            el.appendChild(img);
        }
    } else {
        if(icurImg){
            icurImg.remove();
        }
    }
}