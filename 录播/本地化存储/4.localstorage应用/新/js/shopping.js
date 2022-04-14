import ajax from "./ajax.js";
var box1 = document.querySelector(".shopping table.goods tbody");
ajax("js/shoppingData.json",function(data){
    console.log(data);
    render(box1, createGoodsDom(data));
})

// 创建商品dom结构
function createGoodsDom(data) {
    let str = ``;
    data.forEach((ele,i,self) => {
        let color = ``;
        ele.list.forEach(ele=>{
            color += `<span data-id='${ele.id}'>${ele.color}</span>`
        })
        str+= `<tr>
                    <td>
                        <img src="${ele.list[0].img}" alt="">
                    </td>
                    <td>
                        <p>打不翻的吸盘碗</p>
                        <div class="color">
                            ${color}
                        </div>
                    </td>
                    <td>
                        21.00元
                    </td>
                    <td>
                        <span>-</span>
                        <span>0</span>
                        <span>+</span>
                    </td>
                    <td>
                        <button>加入购物车</button>
                    </td>
                </tr>`
    });
    return str;
}
// 渲染dom

function render(dom, str){
    dom.innerHTML = str;
}

