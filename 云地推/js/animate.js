//头部logo
$(document).ready(function(){
	$(".one2Logo").animate({left:"0px"},1000);
	setTimeout(function(){
			$(".one1Logo").animate({left:'0px'},1000)
			$(".one1Logo").css("-webkit-transform","rotateZ(720deg)");
			$(".one1Logo").css("-moz-transform","rotateZ(720deg)");
			$(".one1Logo").css("-o-transform","rotateZ(720deg)");
			$(".one1Logo").css("-ms-transform","rotateZ(720deg)");
			$(".one1Logo").css("transform","rotateZ(720deg)");
			
	},1000)
setTimeout(function(){
	$(".one2Logo").animate({left:"50px"},500);
	$(".one2Logo").animate({left:"0px"},500)
},1800)


	
})
//index.html

//轮播图slideshow
	function getTop(){
        var top = $(document).scrollTop();
        if($(document).scrollTop()>180){
          	$(".pattern").show().animate({left:"0px", opacity: '1'},800)
        }
        
       if($(document).scrollTop()>650){
       	$(".outer").animate({left:0,opacity: 'show'},1000);
       }
        
      if($(document).scrollTop()>1800){
        	$(".logo_top").css("display","block");
        	$(".logo_top li").animate({left:0,top:0},1000);
        	$(".logo_middle").css("display","block");
        	$(".logo_middle li").animate({left:0,top:0},1000);
        	$(".logo_bottom").css("display","block");
        	$(".logo_bottom li").animate({left:0,top:0},1000);
        	
        }
        setTimeout(getTop);
        
        
    }
   

 	getTop();
//品牌推广
$(".logo_con ul li").hover(function(){
	$(this).children("img").animate({left:"-20px"},200);
	$(this).children("img").animate({left:"20px"},200);
	$(this).children("img").animate({left:"-10px"},200);
	$(this).children("img").animate({left:"10px"},200);
	$(this).children("img").animate({left:"0px"},200);
},function(){
	$(this).children("img").stop().animate({left:'0px'},0)
});

	
//实战案例case切换

  $(function(){
  	
  	$(".nav_con ul").on("click","li",function(){
  		var i=$(this).index();
		$(this).addClass("active");
		$(".nav_con ul li").not($(this)).removeClass("active");
		switch(i){
			case 0:
			
			$("#O2O_con").show();
			$("#scheme").hide();
			$("#recruits").hide();
			$("#prolongation").hide();
			break;
			case 1:
			
			$("#O2O_con").hide();
			$("#scheme").show();
			$("#recruits").hide();
			$("#prolongation").hide();
			break;
			case 2:
			
			$("#O2O_con").hide();
			$("#scheme").hide();
			$("#recruits").show();
			$("#prolongation").hide();
			break;
			case 3:
			
			$("#O2O_con").hide();
			$("#scheme").hide();
			$("#recruits").hide();
			$("#prolongation").show();
			break;
		}
		
		
	})
  	
  	
  })
/*add_our*/
	
	setTimeout(function(){
			$(".l_box ul li .activepic").animate({left:'0px'},1000)
			$(".l_box ul li .activepic").css("-webkit-transform","rotateZ(720deg)");
			$(".l_box ul li .activepic").css("-moz-transform","rotateZ(720deg)");
			$(".l_box ul li .activepic").css("-o-transform","rotateZ(720deg)");
			$(".l_box ul li .activepic").css("-ms-transform","rotateZ(720deg)");
			$(".l_box ul li .activepic").css("transform","rotateZ(720deg)");
			
	},1000)
	//切换
	
	
	
	$(function(){
	$(".r_top ul").on("click","li",function(){
		$(".r_top ul li").not($(this)).removeClass("top_new");
		var i=$(this).index();
		$(this).addClass("top_new");
		switch(i){
			case 0:
			$("#bazaar").show();
			$("#operating").hide();
			$("#research").hide();
			$("#function").hide();
			$("#bazaar_bottom").show();
			$("#operating_bottom").hide();
			$("#research_bottom").hide();
			$("#function_bottom").hide();
			break;
			case 1:
			$("#bazaar").hide();
			$("#operating").show();
			$("#research").hide();
			$("#function").hide();
			$("#bazaar_bottom").hide();
			$("#operating_bottom").show();
			$("#research_bottom").hide();
			$("#function_bottom").hide();
			break;
			case 2:
			$("#bazaar").hide();
			$("#operating").hide();
			$("#research").show();
			$("#function").hide();
			$("#bazaar_bottom").hide();
			$("#operating_bottom").hide();
			$("#research_bottom").show();
			$("#function_bottom").hide();
			break;
			case 3:
			$("#bazaar").hide();
			$("#operating").hide();
			$("#research").hide();
			$("#function").show();
			$("#bazaar_bottom").hide();
			$("#operating_bottom").hide();
			$("#research_bottom").hide();
			$("#function_bottom").show();
			break;
		}
		
	})
	$("#bazaar .whole").on("click","span",function(){
		$("#bazaar .whole span").not($(this)).removeClass("activer");
		var i=$(this).index();
		$(this).addClass("activer");
		if(i==0){
			
			$("#bazaar_one").show();
			$("#bazaar_two").show();
		}else if(i==1){
			$("#bazaar_one").show();
			$("#bazaar_two").hide();
		}else if(i==2){
			$("#bazaar_one").hide();
			$("#bazaar_two").show();
		}
		
	})
	
	$("#operating .whole").on("click","span",function(){
		$("#operating .whole span").not($(this)).removeClass("activer");
		var i=$(this).index();
		$(this).addClass("activer");
		if(i==0){
			$("#operating_one").show();
			$("#operating_two").show();
			$("#operating_three").show();
		}else if(i==1){
			$("#operating_one").show();
			$("#operating_two").hide();
			$("#operating_three").hide();
		}else if(i==2){
			$("#operating_one").hide();
			$("#operating_two").show();
			$("#operating_three").hide();
		}else if(i==3){
			$("#operating_one").hide();
			$("#operating_two").hide();
			$("#operating_three").show();
		}
		
	})
	
	$("#research .whole").on("click","span",function(){
		$("#research .whole span").not($(this)).removeClass("activer");
		var i=$(this).index();
		$(this).addClass("activer");
		if(i==0){
			$("#operating_one").show();
			$("#operating_two").show();
			$("#operating_three").show();
		}else if(i==1){
			$("#operating_one").show();
			$("#operating_two").hide();
			$("#operating_three").hide();
		}else if(i==2){
			$("#operating_one").hide();
			$("#operating_two").show();
			$("#operating_three").hide();
		}else if(i==3){
			$("#operating_one").hide();
			$("#operating_two").hide();
			$("#operating_three").show();
		}
		
	})
	
	$("#function .whole").on("click","span",function(){
		$("#function .whole span").not($(this)).removeClass("activer");
		var i=$(this).index();
		$(this).addClass("activer");
		if(i==0){
			$("#function_one").show();
		}else if(i==1){
			$("#function_one").show();
		}
		
	})
	})
//extend我要推广
$(".resource").animate({left:"0px"},600);

function topMove(){
	var top=$(document).scrollTop();

	if($(document).scrollTop()>220){
$(".core_one").animate({left:"0px"},600);
$(".core_two").animate({left:"0px"},600);
}
	if($(document).scrollTop()>820){
		$(".bring").animate({left:"0px",opacity:"1"},1000)
	}

if($(document).scrollTop()>1420){
	$(".serve_img img").show().animate({width:"100%",height:"100%"},1000)
		    $(".serve_img img").css("-webkit-transform","rotateZ(720deg)");
			$(".serve_img img").css("-moz-transform","rotateZ(720deg)");
			$(".serve_img img").css("-o-transform","rotateZ(720deg)");
			$(".serve_img img").css("-ms-transform","rotateZ(720deg)");
			$(".serve_img img").css("transform","rotateZ(720deg)");

}
if($(document).scrollTop()>1820){
	
	 
$(".effect_con").animate({left:"0px",opacity:"1"},1000)
}
	if($(document).scrollTop()>2200){
		$(".marketing_con").animate({left:"0px",opacity:"1"},1000)
	}
$(".exhibition .shade").hover(function(){
	$(this).css("opacity","0");
},function(){
	$(this).css("opacity","0.3");
})


setTimeout(topMove)
}
topMove();