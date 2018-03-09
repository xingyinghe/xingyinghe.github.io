window.onload =function (){
	swipe('.category_l');
	swipe('.category_r');
	addTipEvent('.category_l')
};
function swipe(str){
	var parent = document.querySelector(str);
	var ul =parent.querySelector('.side');
	var h = parent.offsetHeight;
	var H = ul.offsetHeight;
	console.log(str+h);
	console.log(str+H);
	//顶部和底部拖拽时的缓冲距离
	var distance = 80;
	//最大定位距离
	var maxPosition =0;
	//最小距离
	var minPosition = H-h;
	var maxSwipe = distance;
	var minSwipe = -distance +minPosition;
	ul.currentY = 0; //记录ul的开始位置
	
	ul.addEventListener('touchstart',function(e){
		ul.startY = e.touches[0].pageY;
	});
	ul.addEventListener('touchmove',function(e){
		ul.endY = e.touches[0].pageY;
		var  move = ul.endY - ul.startY;
		ul.isMove = true;
		if(ul.currentY+move< maxSwipe && ul.currentY+move> minSwipe){
			ul.currentY+=move; //记录ul结束位置
			mi.removeTransition(ul);
			mi.setTransform(ul,ul.currentY,'y');	
		}
	});
	ul.addEventListener('touchend',function(){
		if(ul.isMove){
			if(ul.currentY>maxPosition){
				ul.currentY = maxPosition;
			}else if(ul.currentY<minPosition){
				ul.currentY = minPosition;
			}
		}
		mi.addTransition(ul);
		mi.setTransform(ul,ul.currentY,'y')
	})
};
 //导航栏点击事件
 function addTipEvent (str){
 	mi.tip(document.querySelector(str),function(){
 		
 		var li =event.target.parentNode;
 		var ul = li.parentNode;
 		var lies = ul.children;
 		for (var i =0;i<lies.length;i++) {
 			lies[i].className=''
 			lies[i].index = i;
 		};
 		li.className= 'now';
 	})
 }
