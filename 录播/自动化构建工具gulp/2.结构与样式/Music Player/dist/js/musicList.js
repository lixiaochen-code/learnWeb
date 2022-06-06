;(function(player){
    function musicList(data,dom){
        this.data = data;
        this.dom = dom;
        this.list = document.createElement("div");
        this.dl = document.createElement("dl");
        this.close = document.createElement("div");
        this.dt = document.createElement("dt");
        this.dd = [];
        this.currentMusic = null;
    }
    musicList.prototype = {
        init(){
            this.insertAll();
            this.appendEle(this.data);
        },
        insertAll(){
            this.list.className = "list";
            this.dt.innerText = "播放列表";
            this.close.innerText = "关闭";
            this.close.className = "close";
        },
        appendEle(data){
            var This = this;
            this.list.appendChild(this.dl);
            this.list.style.transform = "translateY(0)";
            this.dl.appendChild(this.dt);

            for(let i = 0; i < data.length; i ++) {
                this.dd[i] = document.createElement("dd");
                this.dd[i].innerText = data[i].name;
                this.dl.appendChild(this.dd[i])
            }
            this.close.addEventListener("touchend",function(){
                This.listDown();  
            });
            this.dl.appendChild(this.close);
            this.dom.appendChild(this.list);
        },
        currentPlay(index){
            for(let i = 0; i<this.dd.length; i ++) { 
                if(index == i) {
                    this.dd[i].className = "active";
                    if(this.currentMusic) {
                        this.currentMusic.className = "";
                    } 
                    this.currentMusic = this.dd[i];
                }
            }
        },
        listUp(){
            this.list.style.transition = "all .2s";
            this.list.style.transform = "translateY(" + - this.list.offsetHeight +"px)";
        },
        listDown(){
            this.list.style.transition = "all .2s";
            this.list.style.transform = "translateY(0px)"
        },
        addEvent(){
            return this.dd;
        }
    }
    player.musicList = musicList;
})(window.player || (window.player = {}))