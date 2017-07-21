var b=0;
		$(".right").click(function(){
			b++
			if (b>2) {
//				$(".ul").css("left",)
				b=3
			}
			$(".ul").css("left",b*-364+"px")
			console.log(b*-364+"px")
		})
		
		
		$(".left").click(function(){
			b--;
			if (b<0) {
				b=0;
			}
			$(".ul").css("left",b*-364+"px")
			
			console.log(b*-364+"px")
			
		})
