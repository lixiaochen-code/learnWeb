; (function (player) {
    function renderMusic() {
        this.audio = new Audio();
        this.status = "pause"
        // audio.play()
        // addTextTrack()	向音频添加新的文本轨道。
        // canPlayType()	检查浏览器是否能够播放指定的音频类型。
        // fastSeek()	在音频播放器中指定播放时间。
        // getStartDate()	返回新的 Date 对象，表示当前时间线偏移量。
        // load()	重新加载音频元素。
        // play()	开始播放音频。
        // pause()	暂停当前播放的音频。
    }
    renderMusic.prototype = {
        musicInit(src,fun) {
            this.audio.src = src;
            this.audio.load();
            this.getDuration(fun);
        },
        playMusic() {
            this.audio.play();
            this.status = "play";
        },
        pauseMusic() {
            this.audio.pause();
            this.status = "pause";
        },
        currentTime(time) {
            // currentTime 属性设置或返回音频/视频播放的当前位置（以秒计）。
            // 当设置该属性时，播放会跳跃到指定的位置。
            this.audio.cuurenTime = time;
        },
        getDuration(fun) {  // 获取 音频时长
            this.audio.oncanplay = ()=> {
                fun.call(player.progressBar,this.audio.duration);
            }
        }
        // touches：表示当前跟踪的触摸操作的touch对象的数组。
        // targetTouches：特定于事件目标的Touch对象的数组。
        // changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。

        // 每个Touch对象包含的属性如下。
        // clientX：触摸目标在视口中的x坐标。
        // clientY：触摸目标在视口中的y坐标。
        // identifier：标识触摸的唯一ID。
        // pageX：触摸目标在页面中的x坐标。
        // pageY：触摸目标在页面中的y坐标。
        // screenX：触摸目标在屏幕中的x坐标。
        // screenY：触摸目标在屏幕中的y坐标。
        // target：触目的DOM节点目标。
    }
    player.renderMusic = new renderMusic();
})(window.player || (window.player = {}))