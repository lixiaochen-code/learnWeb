// 渲染图片 音乐信息 是否喜欢
; (function (root) {
        // 渲染图片
        function renderImg(src) {
            root.blurImg(src);  // 给body背景添加高斯模糊
            var img = document.querySelector(".wrap .songImg img");
            img.src = src;
        }
        // 渲染音乐信息
        function renderMusicInfo(data) {
            var songInfo = document.querySelector(".wrap .songInfo").children;
            songInfo[0].innerHTML = data.name;
            songInfo[1].innerHTML = data.album;
            songInfo[2].innerHTML = data.singer;
        }
        // 渲染是否喜欢
        function renderIsLike(isLike) {
            var isLikeBtn = document.querySelectorAll(".wrap .control li")[0];
            if(isLike) {
                isLikeBtn.className = "liking"
            } else {
                isLikeBtn.className = ""
            }
        }
    root.render = function (data) {
        renderImg(data.image);
        renderMusicInfo(data);
        renderIsLike(data.isLike);
    };
})(window.player || (window.player = {}));