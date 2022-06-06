// console.log(window)
; (function ($, player) {
    function MusicPlayer(dom) {
        this.wrap = dom;    // 
        this.data = [];
        this.now = 0;
        this.timer = null;
        this.list = null;
        this.listClick = null;
    }
    MusicPlayer.prototype = {
        init() { // 初始化
            this.getDom();
            this.getData("../mock/data.json");
        },
        getDom() { // 获取页面上的元素
            this.record = document.querySelector(".wrap .songImg img");
            this.btns = document.querySelectorAll(".wrap .control li");
        },
        getData(url) { // 获取数据
            var This = this;
            $.ajax({
                url: url,
                method: "get",
                success: function (data) {
                    This.data = data;
                    This.loadMusic(This.now);
                    This.musicControl();
                    This.list.addEvent().forEach((element, index) => {
                        element.addEventListener("touchend", function () {

                            if (This.listClick !== this) {
                                This.loadMusic(index);
                                player.renderMusic.playMusic();
                                player.renderMusic.status = "play";
                                This.btns[2].className = "playing";
                                This.rotateImg(0);
                                This.now = index;
                                this.className = "active"
                            }
                            This.list.listDown();
                            This.listClick = this;

                        })
                    });
                },
                error: function () {
                    console.error("请求失败！！！");
                }
            })
        },
        // 列表
        listPlay(index) {
            var This = this;
            if (!this.list) {
                this.list = new player.musicList(this.data, this.wrap);
                this.list.init();

                this.btns[4].addEventListener("touchend", function () {
                    This.list.listUp();
                })
            }
            this.list.currentPlay(index);
        },
        // touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
        // touchmove事件：当手指在屏幕上滑动的时候连续地触发。
        // touchend事件：当手指从屏幕上离开的时候触发。
        musicControl() {
            var _this = this;
            this.btns[1].addEventListener("touchend", function () {
                --_this.now;
                _this.now < 0 ? (_this.now = _this.data.length - 1) : null;
                player.renderMusic.status = "play";
                _this.loadMusic(_this.now);
                _this.rotateImg(0);
                _this.btns[2].className = "playing";
            })
            this.btns[3].addEventListener("touchend", function () {
                ++_this.now;
                _this.now > _this.data.length - 1 ? (_this.now = 0) : null;
                player.renderMusic.status = "play";
                _this.loadMusic(_this.now);
                _this.rotateImg(0);
                _this.btns[2].className = "playing"
            })
            this.btns[2].addEventListener("touchend", function () {
                if (player.renderMusic.status == "play") {
                    player.renderMusic.pauseMusic();
                    _this.stopRotate();
                    this.className = "";
                } else {
                    player.renderMusic.playMusic();

                    // 第二次要加上上次的角度   但第一次获取不到没有这个属性
                    var deg = _this.record.dataset.rotate || 0;
                    _this.rotateImg(deg);
                    this.className = "playing";
                }
            })
        },
        rotateImg(deg) {
            clearInterval(this.timer);
            var This = this;
            this.timer = setInterval(() => {
                This.record.style.transform = 'rotate(' + deg + 'deg)';
                deg = +deg + 1;
                This.record.dataset.rotate = deg;
            }, 30);
        },
        stopRotate() {
            clearInterval(this.timer);
        },
        // 渲染音乐 总渲染
        loadMusic(index) {
            this.listPlay(index);
            player.render(this.data[index]);    // 渲染图片 歌曲信息
            // 进度条
            player.renderMusic.musicInit(this.data[index].audioSrc, player.progressBar.init);
            if (player.renderMusic.status == "play") {
                player.renderMusic.playMusic();
            } else if (player.renderMusic.status == "pause") {
                player.renderMusic.pauseMusic();
            }
        }
    }
    var music = new MusicPlayer(document.querySelector(".wrap"));
    music.init();
})(window.Zepto, window.player)