import Vue from "../js/vue.browser.js";
import App from "./App.js";

new Vue({
    // components: {
    //     App
    // },
    // template:`
    // <div>
    //     <App title="sdadadad" />
    // </div>
    // `,
    render(h){
        return h(App);
    }
}).$mount("#app");