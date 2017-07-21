$(function(){
	//轮播图
	    var $imga=$(".wrap .box a");
	    var len=$imga.length;
	    var bw=$(".wrap .box").width();
	    var btn=$(".wrap li");
	    var index=0;
	    var next=0;
	    //图片初始化
	    $imga.css("left",bw).eq(0).css("left",0);
	    //按钮初始化
	    btn.eq(0).addClass("hot");
	    //计时器
	    var t=setInterval(movel,1500);
	    //鼠标移入移除
	    $(".wrap").hover(function () {
	        clearInterval(t);
	    },function () {
	        t=setInterval(movel,1500);
	    });
	    //btn.mouseover效果
	    btn.mouseover(function () {
	        var num=$(this).index();
	        if(num==next){
	            return;
	        }else if(num<next){
	            $imga.eq(num).css({"left":-bw});//下一张图片准备
	            $imga.eq(index).animate({"left":bw});//当前图片离开
	            $imga.eq(num).animate({"left":0});//下一张图片显示
	            //按钮颜色
	            btn.eq(index).removeClass("hot");
	            btn.eq(num).addClass("hot");
	            index=num;
	            next=num;
	        }else if(num>next){
	            $imga.eq(num).css({"left":bw});//下一张图片准备
	            $imga.eq(index).animate({"left":-bw});//当前图片离开
	            $imga.eq(num).animate({"left":0});//下一张图片显示
	            //按钮颜色
	            btn.eq(index).removeClass("hot");
	            btn.eq(num).addClass("hot");
	            index=num;
	            next=num;
	        }
	    });
	    //轮播
	    function movel() {
	        next++;
	        if(next==len){
	            next=0;
	        }
	        $imga.eq(next).css({"left":bw});//下一张图片准备
	        $imga.eq(index).animate({"left":-bw});//当前图片离开
	        $imga.eq(next).animate({"left":0});//下一张图片显示
	        //按钮颜色
	        btn.eq(index).removeClass("hot");
	        btn.eq(next).addClass("hot");
	        index=next;
	    }
	    function mover() {
	        next--;
	        if(next==-1){
	            next=len-1;
	        }
	        $imga.eq(next).css({"left":-bw});//下一张图片准备
	        $imga.eq(index).animate({"left":bw}); //当前图片离开
	        $imga.eq(next).animate({"left":0}); //下一张图片显示
	        //按钮颜色
	        btn.eq(index).removeClass("hot");
	        btn.eq(next).addClass("hot");
	        index=next;
	    }
	})
	//下拉
     $(function(){
     	$(".one").hover(function(){
     		$(this).children().eq(1).toggle().stop(true,true)
     		$(".one>div").css("none")
//   	    $(this).children().eq(0).css({paddingBottom:"10px"})
         })
     })