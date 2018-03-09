window.onload = function () {
    searchBar();
    sktime(2 * 3600);
    slider();
}


function searchBar(){
  
    var headerBox = document.getElementsByClassName('mi-header-box')[0];
  
    var banner = document.getElementsByClassName('mi-poster')[0];
   
    var height = banner.offsetHeight;
    var opacity = 0;
    
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     
        if(scrollTop < height) {
           
            opacity = scrollTop / height * 0.85;
        } else {
         
            opacity = 0.85;
        }
      headerBox.style.background='rgba(255, 21, 100,'+opacity+')';
    }
}