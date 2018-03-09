window.onload=function(){
	checkTitleFn();
	del()
};

function checkTitleFn(){
	var titleCheck = document.querySelectorAll('.mi_check');
	var allCheck = document.querySelector('.cart_all .mi_check')
	for (var i=0;i<titleCheck.length;i++) {
		titleCheck[i].addEventListener('click',function(){
			var hasChecked = false;
			if(this.hasAttribute('checked')){
				this.removeAttribute('checked');
				hasChecked =false;
			}else{
				this.setAttribute('checked','checked');
				hasChecked = true;
			}
			
		})
	}
	var selectedAll = false;
	allCheck.addEventListener('click',function(){
		selectedAll = !selectedAll;
			for (var i=0;i<titleCheck.length;i++){
				if (selectedAll){
					titleCheck[i].setAttribute('checked','checked');
				}else{
					titleCheck[i].removeAttribute('checked');
				}
			}
		
	})
}
 //点击编辑
 function del(){
 	var span = document.querySelector('.mi_header span');
 	var delet = document.querySelector('.delete');
 	var move = delet.children[0];
 	var del = delet.children[1];
 	var mask = document.querySelector('.mask');
 	spanChoose = false;
 	
 	span.addEventListener('click',function(){
 		spanChoose = !spanChoose;
 		if(spanChoose){
 			span.innerHTML='完成'
 			delet.style.display='block'
 		}else{
 			span.innerHTML='编辑'
 			delet.style.display='none'
 		}
 	})
 	del.addEventListener('click',function(){
 		mask.style.display= 'block'
 	})
   	mask.children[1].children[0].addEventListener('click',function(){
   		mask.style.display= 'none'
   	})
   	mask.children[1].children[1].addEventListener('click',function(){
   		mask.style.display= 'none'
   		var shopout = document.querySelector('.shopout')
		var titleCheck = document.querySelectorAll(' .shop_box .mi_check');
		for(var i = 0;i<titleCheck.length;i++){
			var shop = titleCheck[i].parentNode.parentNode;
			var shop_box = shop.parentNode	
	   		if(titleCheck[i].hasAttribute('checked')){
	   			shop_box.removeChild(shop)
	   		}
	   		if(shop_box.children.length<=0){
	   		
	   			shopout.style.display='block'
	   		}
		}
   	})
 }
