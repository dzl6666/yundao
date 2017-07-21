	var oUl = document.getElementById("banner-box")
		var oBan = document.getElementById("banner")
		var oImg = document.getElementsByClassName("img")[0]
		oBan.style.height = oImg.offsetHeight+"px"
		
		console.log(oImg.offsetHeight)
		var aLi = oUl.children
		 oUl.style.width=window.innerWidth *aLi.length+"px"
		 for(var i=0;i<aLi.length;i++){
			aLi[i].style.width = oUl.offsetWidth/aLi.length+"px"
			aLi[i].style.height = oImg.offsetHeight+"px"
		} 
		window.onresize=function() {
		   oUl.style.width= window.innerWidth*aLi.length+"px"
		   for(var i=0;i<aLi.length;i++){
			 aLi[i].style.width = oUl.offsetWidth/aLi.length+"px"
			 aLi[i].style.height = oImg.offsetHeight+"px"
		}
		   oBan.style.height = oImg.offsetHeight+"px"
	};
	     
	     var i=0
	    var timer = setInterval(function(){  
	    	i++
	    	 if(i>=aLi.length){
	    	 	i=0
	    	 }
	    	 oUl.style.left=-i*aLi[0].offsetWidth+"px"
			$("#banner ol>li").eq(i).addClass("on").siblings().removeClass("on")
	    },2000)
		
		$(".header-top").click(function(){
	$(".header-bottom").toggle();
})
		var a=0;
			var b=40;
			$(".ul li").each(function(){
				a+=parseInt($(this).width()+b)
			})
			$(".ul").css("width",a+'px')
			//下拉
     $(function(){
     	$(".one").hover(function(){
     		$(this).children().eq(1).toggle().stop(true,true)
     		$(".one>div").css("none")
         })
     })