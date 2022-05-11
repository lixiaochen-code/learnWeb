import { applyStyles } from "./util/css.js";
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

let styles = {
    width: "200px",
    height: "200px",
    margin: "0 auto",
    background: "red",
    border: "2px solid black",
    borderRadius: "5%"
}
applyStyles(div1, styles);
applyStyles(div2, styles);