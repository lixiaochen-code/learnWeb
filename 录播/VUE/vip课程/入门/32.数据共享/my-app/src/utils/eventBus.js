// const listeners = {};
// export default {
//     // 监听者 传入监听事件 处理函数
//     $on(eventName,fun){
//         // 若没有监听该事件 则添加设置值为集合new Set()
//         if(!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         // 向该监听事件内添加一个处理函数
//         listeners[eventName].add(fun);
//     },
//     // 触发者 传入触发事件 传入参数(...args)参数不唯一
//     $emit(eventName,...args){
//         // 若没有监听者 则直接退出
//         if(!listeners[eventName]) {
//             return;
//         }
//         // 若有 触发所有的监听事件
//         for (const iterator of listeners[eventName]) {
//             iterator(...args);
//         }

//     },
//     // 取消监听 传入监听事件 处理函数
//     $off(eventName,fun){
//         // 若没有监听者 则直接退出
//         if(!listeners[eventName]) {
//             return;
//         }
//         // 若有 则取消该处理函数
//         listeners[eventName].delete(fun);
//     }
// }
import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app;
export default app;