/*стрелка прокрутки вверх*/
window.onscroll = function() {
   var scrollElem = document.getElementById("scrollTop");
   if (document.body.scrollTop > document.documentElement.clientHeight) {
      scrollElem.style.display = "none";}
    else {
       scrollElem.style.display = "block";
   }
};
			var timeOut;
			function goUp() {
			   var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
			   if(top > 0) {
			      window.scrollBy(0,-100);
			      timeOut = setTimeout('goUp()', 20);}
			    else clearTimeout(timeOut);
};




