import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increase(state){
            // 增加
            state.count ++; 
        },
        reduce(state){
            // 减少
            state.count --;
        },
        power(state,payload){
            state.count **= payload;
        }
    },
    actions:{
        asyncIncrease(context){
            setTimeout(() => {
                context.commit("increase");
            }, 1000);
        },
        asyncReduce(context){
            setTimeout(() => {
                context.commit("reduce");
            }, 1000);
        },
        asyncPower(context,playload){
            setTimeout(() => {
                context.commit("power",playload);
            }, 1000);
        }
    }
})

window.store = store;
export default store;