			var str1 = /^\w{6,16}$/
			$(".res1").blur(function() {
				if($(".res1").val() == "") {
					$(".span1").html("不能为空").css("color", "red")
					$(".res1").parent().next().find("img").attr("src", "../img/icon-n.png")
				} else if(!str1.test($(".res1").val())) {
					$(".span1").html("输入错误").css("color", "red")
					$(".res1").parent().next().find("img").attr("src", "../img/icon-n.png")
				} else {
					$(".span1").html("")
					$(".res1").parent().next().find("img").attr("src", "../img/icon-y.png")
				}
			
			})
			
			var str2 = /^\w{6,16}$/
			$(".res2").blur(function() {
				if($(".res2").val() == "") {
					$(".span2").html("不能为空").css("color", "red")
					$(".res2").parent().next().find("img").attr("src", "../img/icon-n.png")
				} else if(!str2.test($(".res2").val())) {
					$(".span2").html("输入错误").css("color", "red")
					$(".res2").parent().next().find("img").attr("src", "../img/icon-n.png")
				} else {
					$(".span2").html("")
					$(".res2").parent().next().find("img").attr("src", "../img/icon-y.png")
				}
			
			})
			
			$(".res3").blur(function() {
			if($(".res3").val() == "") {
					$(".span3").html("不能为空").css("color", "red")
					$(".res3").parent().next().find("img").attr("src", "../img/icon-n.png")
				} else if($(".res2").val()!=$(".res3").val()){
					$(".span3").html("密码不一致").css("color", "red")
					$(".res3").parent().next().find("img").attr("src", "../img/icon-n.png")
				}
				 else {
					$(".span3").html("")
					$(".res3").parent().next().find("img").attr("src", "../img/icon-y.png")
				}
			})
			$(".res5").blur(function() {
			if($(".res5").val() == "") {
					$(".span5").html("不能为空").css("color", "red")
					$(".res5").parent().next().find("img").attr("src", "../img/icon-n.png")
				} 
				 else {
					$(".span5").html("")
					$(".res5").parent().next().find("img").attr("src", "../img/icon-y.png")
				}
			})
			var str7 = /^[0,1](\d{10})$/
		$(".res7").blur(function(){
			if($(".res7").val()==""){
				$(".span7").html("不能为空").css("color","red")
				$(".res7").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str7.test($(".res7").val())){
				$(".span7").html("输入错误").css("color","red")
				$(".res7").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span7").html("")
				$(".res7").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})
		var str8 = /^(\d{6})$/
		$(".res8").blur(function(){
			if($(".res8").val()==""){
				$(".span8").html("不能为空").css("color","red")
				$(".res8").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str8.test($(".res8").val())){
				$(".span8").html("输入错误").css("color","red")
				$(".res8").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span8").html("")
				$(".res8").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})
		var str9 = /4wa6/
		$(".res9").blur(function(){
			if($(".res9").val()==""){
				$(".span9").html("不能为空").css("color","red")
				$(".res9").parent().next().find("img").attr("src","../img/icon-n.png")
			}else if(!str9.test($(".res9").val())){
				$(".span9").html("输入错误").css("color","red")
				$(".res9").parent().next().find("img").attr("src","../img/icon-n.png")
			}else{
				$(".span9").html("")
				$(".res9").parent().next().find("img").attr("src","../img/icon-y.png")
			}
			
		})