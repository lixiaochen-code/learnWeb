import Img from "./component/Img.js"
export default {
    name:"App",
    props: {
        title:{
            default : "请传入标题title"
        }
    },
    components: {
        Img
    },
    template:`<div>
    <Img />
    <h1>{{ title }}</h1>
    </div>`
}