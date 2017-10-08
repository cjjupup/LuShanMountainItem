function onloadMap(a) {
	var patrol_data = a.split(",");
    var pid = patrol_data[0];
    var name = patrol_data[1];
    var userid = patrol_data[2];
    var entity = patrol_data[3];
    var service = patrol_data[4];
    var startTime = patrol_data[5];
    var endTime = patrol_data[6];
	var speed = patrol_data[7];
	var mileage = patrol_data[8];
	var totalTime = patrol_data[9];
	//
    var paths=new Array();
	$.post('http://' + urlServer.ip + ':' + urlServer.port + '/'+urlServer.servletCoordinator,{ userid: userid }, function(data) {
		if(data != "fail"){
			data = JSON.parse(data);
			weilanArray = data;
		}
		$('.close_map').css("display", "block");
		$('#map').css("display", "block");
		ShowRoute(entity,service,startTime,endTime);
		addInfoforMap(name,speed,mileage,startTime,endTime,totalTime);
	});
}
//////////////////////

//////////////////////////
function addInfoforMap(name,speed,mileage,startTime,endTime,totalTime) {
    var html = 
		'<table class="table-normal database-table table-center">' + 
			'<thead>' + 
				'<tr>' + 
					'<th colspan="2">巡护信息</th>' + 
				'</tr>' + 
			'</thead>' + 
			'<tbody>' + 
				'<tr>' + 
					'<td>巡护员</td>' + 
					'<td>' + name + '</td>' + 
				'</tr>' + 
				'<tr>' + 
					'<td>巡护速度</td>' + 
					'<td>' + speed + '</td>' + 
				'</tr>' + 
				'<tr>' + 
					'<td>巡护路程</td>' + 
					'<td>' + mileage + '</td>' + 
				'</tr>' + 
				'<tr>' + 
					'<td>开始时间</td>' + 
					'<td>' + startTime + '</td>' + 
				'</tr>' + 
				'<tr>' + 
					'<td>结束时间</td>' + 
					'<td>' + endTime + '</td>' + 
				'</tr>' + 
				'<tr>' + 
					'<td>时长</td>' + 
					'<td>' + totalTime + '</td>' + 
				'</tr>' + 
			'</tbody>' + 
		'</table>';
    $('#mapInfo').css('display', 'block');
    $('#mapInfo').html(html);
}
///////////////////////////////

/////////////////////////////////////
var duration;
var distance;
var points=new  Array();
var chartData = new  Array();
var point_runin= new Object();
var markers=new Array();
var map = new BMap.Map("map");
function searchPath(entity,service,timeStart,timeEnd) {
    if(points.length>1) {
        chartData = new Array();
        $('.close_map').css("display", "block");
        $('#map').css("display", "block");
        
        //加载地图
        
        map = new BMap.Map("map");
        map.addControl(new BMap.MapTypeControl());
        var walking = new BMap.WalkingRoute(map, { renderOptions: { map: map, autoViewport: false} });
        for (var i = 0; i < points.length - 1; i++) {
            var startpoint = new BMap.Point(points[i].x, points[i].y);
            var endpoint = new BMap.Point(points[i + 1].x, points[i + 1].y);
            walking.search(startpoint, endpoint);
            //通过setSearchCompleteCallback回调事件可以把步行间的坐标信息获取
            walking.setSearchCompleteCallback(function (rs) {
                var pts = walking.getResults().getPlan(0).getRoute(0).getPath();
                var polyline = new BMap.Polyline(pts, { strokeColor: "red", strokeWeight: 6, strokeOpacity: 0.5 });
                chartData.push(polyline);
            });
        }
        setTimeout(ShowRoute(entity,service,timeStart,timeEnd), 500);
    }
}

function ShowRoute(entity,service,timeStart,timeEnd) {
    
        //加载地图
		map = new BMap.Map("map");
        map.addControl(new BMap.MapTypeControl());
        //map.centerAndZoom(startPoint, 14);
        var opts2 = {offset: new BMap.Size(150, 5)};
        map.addControl(new BMap.ScaleControl(opts2));
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.OverviewMapControl());
        map.enableScrollWheelZoom();//启动鼠标操作地图
        
        console.info("加载围栏")
      //  console.info(weilanArray)
        if(weilanArray.length!=0){
        	var creatWeiLanArray = []
        	for(var j = 0;j<weilanArray.length;j++){
        		var tempArray = []
        		//var weilan = weilanArray[j];
        		//console.info(weilan)
        		var pointsData = weilanArray[j][0].points;//[j][1]呢？？？
        		//console.info(pointsData)
        		for(var k=0;k<pointsData.length;k++){
        			var weilanPoint = new BMap.Point(pointsData[k].lng, pointsData[k].lat);
        			tempArray.push(weilanPoint);
        		}
        		creatWeiLanArray.push(tempArray);
        	}
        	console.info(creatWeiLanArray)
        	for(var j = 0;j<creatWeiLanArray.length;j++){
        		var polygon = new BMap.Polygon(creatWeiLanArray[j], {strokeColor:"blue",fillColor: "#FFFF00",fillOpacity: 0.3 ,strokeWeight:2, strokeOpacity:0.5});
        		map.addOverlay(polygon);
        	}
        }
        if(points.length>1) {
	        //显示道路
        	var startPoint = new BMap.Point(points[0].x, points[0].y);
        	map.centerAndZoom(startPoint, 14);
	        for(var i=0;i<chartData.length;i++){
	            var polyline=chartData[i];
	            map.addOverlay(polyline);
	        }
	        var p1 = new BMap.Point(points[0].x,points[0].y);
	        var p2 = new BMap.Point(points[points.length-1].x,points[points.length-1].y);
	        var tempPoint=[];
	        for (var i = 0; i < points.length; i++) {
	            var bPoint = new BMap.Point(points[i].x, points[i].y);
	           /* var m = new BMap.Marker(bPoint);
	            map.addOverlay(m);*/
	            var text="";
	            if(i==0){
	                text="起点：";
	            }else if(i==(points.length-1)){
	                text="终点：";
	            }
	            else{
	                text="途经点：";
	                tempPoint.push(bPoint);
	            }
	            var lab = new BMap.Label(text + points[i].name, { position: bPoint });
	            map.addOverlay(lab);
	        }
	        var searchComplete = function (results){
	    		if (driving.getStatus() != BMAP_STATUS_SUCCESS){
	    			return ;
	    		}
	    		var plan = results.getPlan(0);
	    		duration= plan.getDuration(true);//获取时间
	    		console.info("duration"+duration);
	    		distance= plan.getDistance(true); 
	    		console.info("distance"+distance);//获取距离
	    	}
	        var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},onSearchComplete: searchComplete,
	    		onPolylinesSet: function(){        
	    			setTimeout(function(){},"1000");
	    	}});
	        driving.search(p1, p2,{waypoints:tempPoint});
        }
        var last='';
        if(points.length==1){
        	var startPoint = new BMap.Point(points[0].x, points[0].y);
        	var marker = new BMap.Marker(startPoint);  // 创建标注
        	map.addOverlay(marker);               // 将标注添加到地图中
        	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        	var labPoint = new BMap.Point(points[0].x, points[0].y);
        	var label = new BMap.Label('巡护员：' + points[0].name,{offset:new BMap.Size(-25,-35)});
        	marker.setLabel(label);
        	last=points[0].time;
        }
        if(point_runin.name!=undefined){
        	var startPoint = new BMap.Point(point_runin.x, point_runin.y);
        	var marker = new BMap.Marker(startPoint);  // 创建标注
        	map.addOverlay(marker);               // 将标注添加到地图中
        	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        	var labPoint = new BMap.Point(point_runin.x, point_runin.y);
        	var label = new BMap.Label('巡护员：' + point_runin.name,{offset:new BMap.Size(-25,-35)});
        	marker.setLabel(label);
        	last=point_runin.time;
        }
        //备用，可以设置线路的属性
        /*driving.setPolylinesSetCallback(function (routes){
            for(var i=0;i<routes.length;i++){
              var line = routes[i].getPolyline();
              line.setStrokeColor("blue");
            }
          });*/
        if(entity!=null&&service!=null){
        	console.info("开始时间="+timeStart);
        	console.info("结束时间="+timeEnd);
        	var start = new Date(timeStart);
        	var end = new Date(timeEnd);
        	var startTime = Date.parse(start)/1000;
        	var endTime = Date.parse(end)/1000;
        	console.info("开始时间="+startTime);
        	console.info("结束时间="+endTime);
        	/*var start  = new Date('2016','10','12');
            var startTime = Date.parse(start)/1000 + 2880;
            var endTime = startTime+72000;*/
            //var pointArr = [];
            var trackPoint = [];
            //模拟数据使用，后期需要更改代码；
            /*if(timeStart!=null&&timeStart!=undefined){
            	var pointsss = timeStart;
         	   for(var i=0;i<pointsss.length;i++){
         		   trackPoint.push(new BMap.Point(pointsss[i].lng, pointsss[i].lat));
         	   }
         	   	var line = new BMap.Polyline(trackPoint,{strokeColor:"#FF0000", strokeWeight:5, strokeOpacity:1});
         	   	map.addOverlay(line);
            }*/
            //后期需要加入开始时间以及结束时间。时间差小于24h;
            if(false){
            	
            }
            else{
		console.info("entity=="+entity);
            	$.ajax({
           			type: "get",
           			dataType: "jsonp",
           			jsonp:'callback',
           			url: 'http://yingyan.baidu.com/api/v3/track/gettrack',
                   data: {ak:'cGT9892RVDdKkeIKM2f1d8pX',service_id: urlServer.service_id,entity_name:entity,start_time: startTime,end_time: endTime,is_processed:1,need_denoise:1,need_mapmatch:1,supplement_mode:'driving',page_size:5000},
                   success: function (res) {
                	   var pointsss = res.points;
                	   if(res.points.length==0){
                		   layer.msg('查询不到历史轨迹！', {icon: 2});
                		   var url = 'https://api.map.baidu.com/location/ip?ak=cGT9892RVDdKkeIKM2f1d8pX&coor=bd09ll';  
                		    $.ajax(url, {  
                		        data: {},  
                		        dataType: 'jsonp',  
                		        crossDomain: true,  
                		        success: function(data) {  
                					var point = new BMap.Point(data.content.point.x, data.content.point.y);
                					map.centerAndZoom(point, 15);
                		        }  
                		    });
                		   return;
                	   }
                	   //console.log(res.points);
                	   //console.log(entity!=null&&service!=null);
                	   var time;
                	   markers=[];
                	   for(var i=0;i<pointsss.length;i++){
                		   if(i==0){
                			   time =pointsss[i].loc_time;
                			   //console.info(pointsss[i].create_time);
                			   var pointTemp = new BMap.Point(pointsss[i].longitude,pointsss[i].latitude);
                			   var myIcon = new BMap.Icon("assets/img/start.png", new BMap.Size(40,40));
                			   myIcon.setImageSize({width:"40",height:"40"});
                			   var marker = new BMap.Marker(pointTemp,{icon:myIcon});
                			   marker.setOffset(new BMap.Size(-5,-15));
                			   marker.setTitle("起点");
                			//   marker.setZIndex(999);
                			   map.addOverlay(marker); 
                			   /*var marker = new BMap.Marker(pointTemp);
                			   map.addOverlay(marker);
                			   var label = new BMap.Label("开始",{offset:new BMap.Size(20,-10)});
                			   label.setStyle({ color : "red", fontSize:"18px",border:"none",fontWeight:"bold",background:"none"})
                			   marker.setLabel(label);*/
                		   }
                		   if(i==(pointsss.length-1)){
                			   if(timeEnd!=last){
                				   var centerPoint = new BMap.Point(pointsss[i].longitude,pointsss[i].latitude);
                    			   map.centerAndZoom(centerPoint, 14);
                    			   var pointTemp = new BMap.Point(pointsss[i].longitude,pointsss[i].latitude);
                    			   var myIcon = new BMap.Icon("assets/img/end.png", new BMap.Size(40,40));
                    			   myIcon.setImageSize({width:"40",height:"40"});
                    			   var marker = new BMap.Marker(pointTemp,{icon:myIcon});
                    			   marker.setOffset(new BMap.Size(-5,-15));
                    			 //  marker.setZIndex(999);
                    			   marker.setTitle("终点");
                    			   map.addOverlay(marker); 
                			   }else{
                				   var centerPoint = new BMap.Point(pointsss[i].longitude,pointsss[i].latitude);
                    			   map.centerAndZoom(centerPoint, 14); 
                			   }
                			   
                		   }
                		   if(i!=0&&i!=pointsss.length-1){
                			   if((pointsss[i].loc_time-time)>600){
                				   time = pointsss[i].loc_time;
                				   console.info(time);
                				   var pointTemp = new BMap.Point(pointsss[i].longitude,pointsss[i].latitude);
                				   var myIcon = new BMap.Icon("assets/img/point.png", new BMap.Size(32,32));
                    			   myIcon.setImageSize({width:"32",height:"32"});
                    			   var marker = new BMap.Marker(pointTemp,{icon:myIcon});
                    			   marker.setOffset(new BMap.Size(0,0));
                    			  // marker.setTitle(pointsss[i].create_time)
                    			  
                    			   map.addOverlay(marker);
                    			   var obj = new Object();
                    			   var data = new Date(time * 1000);
                    			  // data.setTime();
                    			   obj.point = pointTemp;
                    			   obj.time = formatDate(data);
                    			   obj.name = entity;
                    			   obj.start = timeStart;
                    			   markers.push(obj);
                    			   
                    			   marker.addEventListener("click",markerInfo);
                    			   //console.info(pointsss[i])
                			   }
                		   }
                		   trackPoint.push(new BMap.Point(pointsss[i].longitude, pointsss[i].latitude));
                	   }
                	   console.info(trackPoint.length);
                	    //console.info(trackPoint);
                	    //map.centerAndZoom(trackPoint[0], 15);
                	   	var line = new BMap.Polyline(trackPoint,{strokeColor:"#FF0000", strokeWeight:5, strokeOpacity:1});
                	   //	map.addOverlay(marker);
                	   //console.log(trackPoint);
                	   
                	   	map.addOverlay(line);
                   },
                   error:function(msg){
                 		alert(msg.toSource());                 //执行错误
                   }
               });
            }
           	
        } 
    
}


//marker节点点击获取信息
function markerInfo(e){
	var obj = e.target;
	var point = obj.getPosition();
	var lab = obj.getLabel();
	console.info(markers)
	if(lab!=null){
		map.removeOverlay(obj);
		var myIcon = new BMap.Icon("assets/img/point.png", new BMap.Size(32,32));
		   myIcon.setImageSize({width:"32",height:"32"});
		var marker = new BMap.Marker(point,{icon:myIcon});
		marker.setOffset(new BMap.Size(0,0));
		map.addOverlay(marker);
		marker.addEventListener("click",markerInfo);
		return;
	}
	for(var i=0;i<markers.length;i++){
		var temp = markers[i].point;
		if(point.lng==temp.lng&&point.lat==temp.lat){
			var time = markers[i].time;
			var startTime = Date.parse(new Date(markers[i].start))/1000;
			var endTime = Date.parse(new Date(markers[i].time))/1000;
			$.ajax({
       			type: "get",
       			dataType: "jsonp",
       			jsonp:'callback',
       			url: 'http://yingyan.baidu.com/api/v3/track/getdistance',
               data: {ak:'qLWoAoQZ39YBEvQYGAxnkOdWvMGOly2o',service_id: urlServer.service_id,entity_name: markers[i].name,start_time: startTime,end_time: endTime,is_processed:1,supplement_mode:'driving'},
               success: function (res) {
            	   if(res.status==0){
            		   var distance = res.distance;
            		   distance = distance/1000;
            		   distance = distance.toFixed(2); 
            		   var lng = point.lng;
            		   lng = lng.toFixed(6);
            		   var lat = point.lat;
            		   lat = lat.toFixed(6);
            		   var label = new BMap.Label('<div>时间：'+time+'</div><div>巡护里程：'+distance+'公里</div><div>坐标：'+lng+' , '+lat+'</div>' ,{offset:new BMap.Size(-65,-55)});
            		   obj.setLabel(label);
            	   }
               },
               error:function(msg){
            	//	alert(msg.toSource());                 //执行错误
              }
          });
		}
	}
}
function formatDate(now){     
	var year=now.getFullYear();     
    var month=now.getMonth()+1;     
    var date=now.getDate();     
    var hour=now.getHours();     
    var minute=now.getMinutes();     
    var second=now.getSeconds();     
    return  year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;     
}















