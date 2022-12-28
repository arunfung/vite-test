import aCss from "./a.module.css"
import indexLess from "../index.module.less";

console.log(aCss,indexLess)
const div = document.createElement("div");

document.body.appendChild(div)

div.className=aCss.footer;