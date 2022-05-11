import a from "./style/a.css";
import b from "./style/b.css";

// style-loader 和 css-loader 同时应用 css-loader 只会暴露一个 类名列表


var oDiv = document.createElement("div");
oDiv.className = a.a
document.body.appendChild(oDiv);

/**
 * 1.使用classList返回所选元素的类名，是一个数组，一个类名占一个长度(a.classList.length)。
 * 2.a.classList.add("classname1") ; 添加一个类名
 * 3.a.classList.remove("classname2") ; 去掉一个类名
 * 4.a.classLis.toggle("classname3"); 引号中的类名，有就删除，没有就添加。比较智能的结合了1,2点，用于切换十分方便
 * 5.a.contains("classname4"); 判断一个类型是不是存在，返回true和false
 */