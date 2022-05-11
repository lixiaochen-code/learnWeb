import { applyStyles } from "./util/css.js";
import { border, bg } from "./styles/publicStyle.js";
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

let styles = {
    width: "200px",
    height: "200px",
    margin: "0 auto",
    ...bg("yellow"),
    ...border(2, "black", "25% 75%"),
}
applyStyles(div1, styles);
applyStyles(div2, styles);