let oDd = document.querySelectorAll(".nav dl dd");
let rContent = document.querySelectorAll(".reightContent>div");
let last = oDd[0];
for(let i = 0; i < oDd.length; i ++) {
    oDd[i].onclick = function(){
        this.className = "active";
        this == last ? "" : last.className = "";
        last = this;
        // if()
    }
}
console.log(rContent);