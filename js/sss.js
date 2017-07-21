
//把里的width和外边局 加起来的和给ul的width
		var a=0;
		var b=40;
		$(".ul li").each(function(){
			a+=parseInt($(this).width()+b)
		})
		$(".ul").css("width",a+'px')


//轮播动态  和按钮
		var b=0;
		$(".left").click(function(){
			b++
			if (b>2) {
				b=3;
			}
			
			//这是判断按钮的
			if (b==3) {
					$(".left").attr("disabled",true);
					$(".left").css("background","#ccc")
				}
			if (b!=0) {
				$(".right").attr("disabled",false);
				$(".right").css("background","#58A9EF")
			}
			
			
			$(".ul").css("left",b*-364+"px")
		})
		
		
		$(".right").click(function(){
			b--;
			if (b<0) {
				b=0;
			}
			$(".ul").css("left",b*-364+"px")
			
			
			//这是判断按钮的
			if (b!=3) {
				$(".left").attr("disabled",false);
				$(".left").css("background","#58A9EF")
			}
			if (b==0) {
				$(".right").attr("disabled",true)
				$(".right").css("background","#ccc")
			}
			
		})
