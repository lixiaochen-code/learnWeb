/**
 * 弹出消息
 * @param {*} content 消息内容
 * @param {*} type 消息类型 info error success warn
 * @param {*} direction 弹出事件
 * @param {*} container 承载容器
 */
import style from "@/styles/showMessage.module.less"
import Icon from "@/components/Icon";
import getVueDom from "@/utils/getVueDom"
export default function (content, type = 'info', direction = 2000, container, callback) {
    
    const oDiv = document.createElement("div");
    const icon = getVueDom(Icon, { type });

    const span = document.createElement("span");
    // const div = document.createElement('div');
    // span.className = "icon";
    // span.appendChild(icon);
    // div.innerHTML = content;
    // oDiv.
    oDiv.className = `${style.message} ${style["message-" + type]}`;
    span.innerText = content;
    oDiv.appendChild(icon);
    oDiv.appendChild(span);
    if (!container) {
        container = document.body;
    } else {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = "relative"
        }
    }
    container.appendChild(oDiv);

    // 只要读取宽高位置等信息 就会重排
    oDiv.clientHeight;
    oDiv.style.opacity = "1";
    oDiv.style.transform = "translate(-50%, -50%)";

    setTimeout(() => {
        oDiv.style.opacity = "0";
        oDiv.style.transform = "translate(-50%, -50%) translateY(-25px)";
        oDiv.addEventListener("transitionend",function(){
            oDiv.remove();
            callback && callback();
        },{once:true})
    }, direction);
}