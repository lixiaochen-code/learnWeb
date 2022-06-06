;(function(){
    function progressBar() {
        this.curTime = document.querySelector(".wrap .progress .curTime");
        this.totalTime = document.querySelector(".wrap .progress .totalTime");
        this.circle = document.querySelector(".wrap .progress .drag .circle");
        this.backBg = document.querySelector(".wrap .progress .drag .backBg");
        this.frontBg = document.querySelector(".wrap .progress .drag .frontBg");
        this.timer = null;
    }
    progressBar.prototype = {
        getStyle(dom, target){
            if(window.getComputedStyle) {
                return window.getComputedStyle(dom, target)
            } else {
                return dom.currentStyle[target]
            }
        },
        moveCircle(target){
            this.circle = target + "px";
        },
        frontBgWidth(target) {
            this.frontBg = target + "px";
        },
        move(ispeed){
            var This = this;
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                let frontBgWidth = this.frontBg.offsetWidth + ispeed;
                let circleLeft = this.circle.ofsetLeft + ispeed;
                This.moveCircle(circleLeft);
                This.frontBgWidth(frontBgWidth);
            }, 1000)
        },
        getSpeed(time){
            var x = this.backBg.offsetWidth;
            this.ispeed = x / time;
            console.log(this.ispeed);
        },
        addEvent(){
            var This = this;
            this.circle.addEventListener("touchstart",function(){
                clearInterval(this.timer);
                document.addEventListener("touchmove",function(event) {
                    
                })
            })
            this.circle.addEventListener("touchend", function () {
                This.move(This.ispeed);
            })
        },
        init(time){
            this.getSpeed(time);
            this.move(this.ispeed);
            this.addEvent();
        }
    }
    window.player.progressBar = new progressBar();
})(window.player || (window.player = {}))