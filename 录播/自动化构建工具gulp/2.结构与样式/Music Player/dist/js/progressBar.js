;(function(){
    function progressBar() {
        this.curTime = document.querySelector(".wrap .progress .curTime");
        this.totalTime = document.querySelector(".wrap .progress .totalTime");
        this.circle = document.querySelector(".wrap .progress .drag .circle");
        this.backBg = document.querySelector(".wrap .progress .drag .backBg");
        this.frontBg = document.querySelector(".wrap .progress .drag .frontBg");
        this.timer = null;
        // 记录当前时间
        this.curTimeNum = 0;
        // 时间计时器
        this.timeTimer = null;
    }
    progressBar.prototype = {
        getStyle(dom, target){
            if(window.getComputedStyle) {
                return window.getComputedStyle(dom, target)
            } else {
                return dom.currentStyle[target];
            }
        },
        setInitTime(time){
            var minute = Math.floor(time / 60) >= 10 ? `${Math.floor(time / 60)}` : `0${Math.floor(time / 60)}`;
            var second = Math.round(time % 60) >= 10 ? `${Math.round(time % 60)}` : `0${Math.round(time % 60)}`;
            this.curTime.innerHTML = "00:00";
            this.totalTime.innerHTML = `${minute}:${second}`;
        },
        setTime(){
            clearInterval(this.timeTimer);
            var second;
            var minute;
            this.timeTimer = setInterval(() => {
                minute = Math.floor(this.curTimeNum / 60) >= 10 ? `${Math.floor(this.curTimeNum / 60)}` : `0${Math.floor(this.curTimeNum / 60)}`;
                second = Math.round(this.curTimeNum % 60) >= 10 ? `${Math.round(this.curTimeNum % 60)}` : `0${Math.round(this.curTimeNum % 60)}`;
                this.curTime.innerHTML = `${minute}:${second}`;
                this.limitTime();
                this.curTimeNum ++;
            }, 1000)
        },
        limitTime(){
            if(this.curTimeNum >= this.time) {
                clearInterval(this.timeTimer);
                clearInterval(this.timer);
            } 
        },
        moveCircle(target){
            this.circle.style.left = `${target}px`;
        },
        frontBgWidth(target) {
            this.frontBg.style.width = target + "px";
        },
        move(ispeed){
            clearInterval(this.timer);
            var second;
            var minute;
            this.timer = setInterval(()=>{
                let frontBgWidth = this.frontBg.offsetWidth + ispeed;
                let circleLeft = this.circle.offsetLeft + ispeed;
                this.moveCircle(circleLeft,);
                this.frontBgWidth(frontBgWidth);
                minute = Math.floor(this.curTimeNum / 60) >= 10 ? `${Math.floor(this.curTimeNum / 60)}` : `0${Math.floor(this.curTimeNum / 60)}`;
                second = Math.round(this.curTimeNum % 60) >= 10 ? `${Math.round(this.curTimeNum % 60)}` : `0${Math.round(this.curTimeNum % 60)}`;
                this.curTime.innerHTML = `${minute}:${second}`;
                this.limitTime();
                this.curTimeNum ++;
            }, 1000)
        },
        getSpeed(time){
            var x = this.backBg.offsetWidth;
            this.ispeed = x / time;
        },
        addEvent(){
            var This = this;
            this.circle.addEventListener("touchstart",function(event){
                clearInterval(This.timer);
                This.disX = event.changedTouches[0].clientX;
                document.addEventListener("touchmove",function(event) {
                    This.moveCircle(event.changedTouches[0].clientX - This.disX);
                    This.frontBgWidth(event.changedTouches[0].clientX - This.disX);
                })
            })
            this.circle.addEventListener("touchend", function () {
                This.move(This.ispeed);
            })
        },
        init(time){
            var Time = Math.round(time);
            this.time = Time;
            this.getSpeed(Time);
            this.setInitTime(Time);
            // this.setTime();
            this.move(this.ispeed);
            this.addEvent();
        }
    }
    window.player.progressBar = new progressBar();
})(window.player || (window.player = {}))