// 导入事件总线
// 这里注意 ES6 模块化 要加上后缀名
import eventBus from "./index.js";
// 将事件总线 eventBus 注入到window对象
window.eventBus = eventBus;

// 我们监听一个 change 事件
function fun1(...args){
    console.log("我是fun1，我监听到了change事件，事件参数为：",...args);
}
function fun2(...args){
    console.log("我是fun2，我监听到了change事件，事件参数为：",...args);
}
eventBus.$on("change", fun1);
eventBus.$on("change", fun2);


// 取消监听
eventBus.$off("change",fun1);