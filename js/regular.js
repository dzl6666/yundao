var str = /4wa6/
		$(".res1").blur(function(){
			if($(".res1").val()==""){
				$(".span").html("不能为空").css("color","red")
				$(".res1").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str.test($(".res1").val())){
				$(".span").html("输入错误").css("color","red")
				$(".res1").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span").html("")
				$(".res1").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})
		var str1 = /^[0,1](\d{10})$/
		$(".res2").blur(function(){
			if($(".res2").val()==""){
				$(".span1").html("不能为空").css("color","red")
				$(".res2").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str1.test($(".res2").val())){
				$(".span1").html("输入错误").css("color","red")
				$(".res2").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span1").html("")
				$(".res2").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})
		
		var str2 = /^(\d{6})$/
		$(".res3").blur(function(){
			if($(".res3").val()==""){
				$(".span2").html("不能为空").css("color","red")
				$(".res3").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str2.test($(".res3").val())){
				$(".span2").html("输入错误").css("color","red")
				$(".res3").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span2").html("")
				$(".res3").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})
		
		var str3 = /^\w{6,16}$/
		$(".res4").blur(function(){
			if($(".res4").val()==""){
				$(".span3").html("不能为空").css("color","red")
				$(".res4").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str3.test($(".res4").val())){
				$(".span3").html("输入错误").css("color","red")
				$(".res4").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span3").html("")
				$(".res4").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})