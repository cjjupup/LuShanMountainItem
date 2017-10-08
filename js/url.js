$(function(){  
    $(".home").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseHome;
		//window.open(urlServer.baseUrl + urlServer.baseHome);
	}); 
	$(".baseinfo").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseBaseinfo;
	}); 
	$(".work").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseWork;
	}); 
	$(".video").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseVideo;
	}); 
	$(".ecology").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseEcology;
	}); 
	$(".study").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseStudy;
	}); 
	$(".aplants").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseAplants;
	}); 
	$(".risk").on("click",function(){
		window.location.href = urlServer.baseUrl + urlServer.baseRisk;
	}); 
	//数据管理页-新增记录-跳转
}); 