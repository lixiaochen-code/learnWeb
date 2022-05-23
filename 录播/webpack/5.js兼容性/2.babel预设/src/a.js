import module from "./module";
const a = 1;
const b = () =>{
    console.log("b");
}
function method(){
    let c = () => {
        console.log(this);
    }
    c()
}
const counter = 2 ** 3;
b()
method();
console.log(this);
new Promise(resove=>{
    resove()
})