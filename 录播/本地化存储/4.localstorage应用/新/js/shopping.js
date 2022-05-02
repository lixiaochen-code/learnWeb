import ajax from "./ajax.js";

var selectData = localStorage.selectData ? JSON.parse(localStorage.selectData) : {};
var box1 = document.querySelector(".shopping table.goods tbody");
var selectGoods = document.querySelector(".shopping table.selected tbody");
var oTotalPrice = document.querySelector(".shopping table.selected thead tr th strong");

ajax("js/shoppingData.json", function (data) {
    // console.log(data);
    render(box1, createGoodsDom(data));
    Event();
    render(selectGoods,selectDom(JSON.parse(localStorage.selectData)));
})

// 创建商品dom结构
function createGoodsDom(data) {
    let str = ``;
    data.forEach((ele, i, self) => {
        let color = ``;
        ele.list.forEach(ele => {
            color += `<span data-id='${ele.id}'>${ele.color}</span>`
        })
        str += `<tr>
                    <td>
                        <img src="${ele.list[0].img}" alt="">
                    </td>
                    <td>
                        <p>${ele.name}</p>
                        <div class="color">
                            ${color}
                        </div>
                    </td>
                    <td>
                        ${ele.list[0].price}.00元
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

function render(dom, str) {
    if(str) {
        dom.innerHTML = str;
    } else {
        return
    }
}
function Event() {
    let dom = document.querySelectorAll(".goods tbody tr");
    for (let i = 0; i < dom.length; i++) {
        // 添加事件
        addEvent(dom[i], i)
    }
}
function addEvent(trs, n) {
    var img = trs.children[0].children[0],
        imgSrc = trs.children[0].children[0].src,
        name = trs.children[1].children[0].innerHTML,
        colors = trs.children[1].children[1].children,
        colorId = null,
        colorName = null,
        price = parseFloat(trs.children[2].innerHTML),
        num = trs.children[3].children[1],
        oNum = 0,
        sub = trs.children[3].children[0],
        add = trs.children[3].children[2],
        joinBtn = trs.children[4].children[0];

    var obj = {};
    var last = null;
    for (var i = 0; i < colors.length; i++) {

        colors[i].index = i;
        colors[i].onclick = function () {
            last && last != this && (last.className = "");
            this.className = this.className ? "" : "active";
            last = this,
                imgSrc = this.className ? `./images/img_0${n + 1}-${this.index + 1}.png` : `./images/img_0${n + 1}-1.png`;
            img.src = imgSrc;
            colorName = this.className ? this.innerHTML : null;
            colorId = this.className ? this.dataset.id : null;
        }
    }
    sub.onclick = function () {
        oNum = parseInt(num.innerHTML);
        oNum <= 0 ? 0 : oNum--;
        num.innerHTML = oNum;
    }
    add.onclick = function () {
        oNum = parseInt(num.innerHTML);
        oNum++;
        num.innerHTML = oNum;
    }
    joinBtn.onclick = function () {
        !colorName && alert("请选择颜色");
        !oNum && alert("请选择数量");
        if (!oNum || !colorName) {
            return;
        }
        for(let i = 0; i < colors.length; i ++) {
            colors[i].className = "";
        }
        num.innerHTML = 0;
        obj = {
            colorId,
            imgSrc,
            name,
            colorName,
            price: price * oNum,
            oNum
        }
        selectData[colorId] = obj;
        console.log(selectData)
        localStorage.setItem("selectData",JSON.stringify(selectData));
        render(selectGoods,selectDom(JSON.parse(localStorage.selectData)));
    }
}
function selectDom(data) {
    var str = ``,
    totalPrice = 0.00;
    if(data) {
        for(let ele in data) {
                str += `<tr>
                <td>
                    <img src="${data[ele].imgSrc}" alt="">
                </td>
                <td>
                    ${data[ele].name}
                </td>
                <td>
                    ${data[ele].colorName}
                </td>
                <td>
                    ${data[ele].price}元
                </td>
                <td>
                    x${data[ele].oNum}
                </td>
                <td>
                    <button>删除</button>
                </td>
            </tr>`
            totalPrice += data[ele].price;
        }
    } else {
        return "";
    }
    oTotalPrice.innerHTML = `${totalPrice}.00元`
    return str;
}