$(function(){  
    $(".home").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseHome;
		//window.open(urlServer.baseUrl + urlServer.baseHome);
	}); 
	$(".baseinfo").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseBaseinfo;
		window.location.href = "../2_baseinfo/map_demo.html";
	}); 
	$(".work").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseWork;
		window.location.href = "../3_work/dw.html";
	}); 
	$(".video").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseVideo;
	}); 
	$(".ecology").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseEcology;
		window.location.href = "../6_ecology/evvironmentAnalysis_1_list.html";
	}); 
	$(".study").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseStudy;
		window.location.href = "../7_study/scienceAnalysis.html";
	}); 
	$(".aplants").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseAplants;
		window.location.href = "../5_aplants/animalMonitor.html";
	}); 
	$(".risk").on("click",function(){
		//window.location.href = urlServer.baseUrl + urlServer.baseRisk;
		window.location.href = "../8_risk/riskanalysis_people.html";
	}); 
	$("#notice").on("click",function(){
		window.location.href = "../public/newsCenter_manage.html";
	}); 
	$("#userCenter").on("click",function(){
		window.location.href = "../public/userCenter_info.html.html";
	}); 
	$("#systemSet").on("click",function(){
		window.location.href = "../public/systemCheck.html";
	});
}); 