function slider() {
    /*
    1. 自动轮播(定时器 过渡)
    2. 小圆点随着图片滚动
    3. 图片可以滑动
    4. 滑动不超过一定距离 吸附回去
    5. 超过一定距离 滚动到下一张
     */

    // 获取事件相关的元素
    var banner = document.querySelector('.jd_banner');
    var imgUl = banner.children[0];
    var dotUl = banner.children[1];
    var width = banner.offsetWidth;
    var current = 1;
    banner.timeInterval = 5000; // 定时器播放的时间间隔

    // 轮播
    clearInterval(banner.timer);
    banner.timer = setInterval(function(){
        current++;
        // 设定过渡
        // imgUl.style.transition = 'all 0.5s';
        // imgUl.style.webkitTransition = 'all 0.5s';
        jd.addTransition(imgUl);
        // 设置移动的距离
        var dis = -current * width;
        // 设置transform
        // imgUl.style.transform = 'translateX(' + dis + 'px)';
        // imgUl.style.webkitTransform = 'translateX(' + dis + 'px)';
        jd.setTransform(imgUl, dis, 'x');
    }, banner.timeInterval);

    jd.addTransitionEnd(imgUl, function(){
        if (current>imgUl.children.length-2){
            current = 1;
        }else if (current == 0){
            current = imgUl.children.length - 2;
        }
        jd.removeTransition(imgUl);
        jd.setTransform(imgUl, -current*width, 'x');
        updateDot();
    });
    // 小圆点随着图片滚动
    function updateDot(){
        for (var i=0;i<dotUl.children.length;i++){
            dotUl.children[i].className = '';
        }
        dotUl.children[current - 1].className = 'active';
    }
    // 图片可以滑动
    imgUl.addEventListener('touchstart', function(e){
        // 停止轮播
        clearInterval(banner.timer);
        imgUl.startX = e.touches[0].pageX;
    });
    imgUl.addEventListener('touchmove', function(e){
        // 记录手指是否有移动
        imgUl.isMove = true;
        imgUl.endX = e.touches[0].pageX;
        // 手指移动的距离
        imgUl.distance = imgUl.endX - imgUl.startX;
        jd.removeTransition(imgUl);
        jd.setTransform(imgUl, -current*width+imgUl.distance, 'x');
    });
    imgUl.addEventListener('touchend', function(){
        if (imgUl.isMove){
            // 判断是往下一张图片，还是恢复当前的图片
            if (Math.abs(imgUl.distance) > width/3){// 播放下一张
                if(imgUl.distance > 0){
                    current--;
                }else{
                    current++;
                }
                jd.addTransition(imgUl);
                jd.setTransform(imgUl, -current*width, 'x');
            }else{ // 恢复当前位置的图片
                jd.addTransition(imgUl);
                jd.setTransform(imgUl, -current*width, 'x');
            }
        }
        clearInterval(banner.timer)
        banner.timer = setInterval(function(){
            current++;
            jd.addTransition(imgUl);
            jd.setTransform(imgUl, -current*width, 'x');
        }, banner.timeInterval);
    });
}