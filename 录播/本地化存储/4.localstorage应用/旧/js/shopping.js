import ajax from "./ajax.js";
console.log("=======")
ajax("js/shoppingData.json",function(data){
    console.log(data)
    createGoodsDom(data);
})


// 创建商品dom结构
function createGoodsDom(data) {
    let str = ``;
    data.forEach((ele,i,self) => {
        let color = ``;
        ele.list.forEach(ele=>{
            color += `<span data-id='${ele.id}'>${ele.color}</span>`
        })
        str+= `<div class="wp">
        <div class="img">
            <img src="${ele.list[0].img}" alt="">
        </div>
        <div class="type">
            <h5>${ele.name}</h5>
            ${color}
        </div>
        <div class="price">${ele.list[0].price}.00元</div>
        <div class="btn">
            <span class="a">-</span>
            <span>0</span>
            <span class="a">+</span>
        </div>
        <div class="join">加入购物车</div>
    </div>`
    });
    var box1 = document.querySelector(".shopping");


    box1.innerHTML = str;
}
// 渲染dom
function render(){
    
}