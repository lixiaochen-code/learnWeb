/*
 * @Descripttion: 
 * @version: 
 * @Author: congsir
 * @Date: 2022-06-28 17:15:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-28 17:33:54
 */
import Vue from "vue";
export default function(comp, props) {
    const vm = new Vue({
        render: (h) => h(comp, { props }),
    })
    vm.$mount()
    return vm.$el;
}