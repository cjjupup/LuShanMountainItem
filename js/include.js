var myheader={
	template:`<header class="header-wraper clearfix"><h1 class="logo-personal clearfix"><a class="logo-link" href="/home.html">LOGO</a></h1><nav class="nav-wrap"><ul class="nav-function clearfix"><li class="nav-item home" :class="navactive == 'home'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-yingxiaozhongxinicon"></i><br>监控概况</div></li><li class="nav-item baseinfo" :class="navactive == 'baseinfo'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-kongjiandili"></i><br>基础信息</div></li><li class="nav-item work" :class="navactive == 'work'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-shehuituanti"></i><br>工作管理</div></li><li class="nav-item video" :class="navactive == 'video'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-jiankong"></i><br>视频监控</div></li><li class="nav-item aplants" :class="navactive == 'aplants'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-linye"></i><br>动植物监测</div></li><li class="nav-item ecology" :class="navactive == 'ecology'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-equipment-monitoring"></i><br>生态监测</div></li><li class="nav-item study" :class="navactive == 'study'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-jiaoyu"></i><br>科研宣教</div></li><li class="nav-item risk" :class="navactive == 'risk'?'active':''"><div class="nav-item-title"><i class="icon iconfont icon-jingjijianshe1"></i><br>风险分析</div></li></ul></nav><div class="hd-set"><ul class="clearfix"><li class="hd-set-item pl8 pr8"><a title="通知公告"><i class="icon iconfont icon-bangongtongzhi-"></i>  <i class="unwatched active"></i></a></li><li class="hd-set-item pl8 pr8"><a title="用户中心"><i class="icon iconfont icon-user"></i>  admin</a></li><li class="hd-set-item pl8 pr8"><a title="系统设置"><i class="icon iconfont icon-system-copy"></i> </a></li><li class="hd-set-item pl8 pr8"><a title="退出登录"><i class="icon iconfont icon-quit"></i> </a></li></ul></div></header>`,
	props:['navactive']
}
var myfooter={
	template:`<div style="color:green;">footer</div>`
}

var leftwork={
	template:`<div class="dash-sidebar J_dash_sidebar" style="width:206px"><a class="drag-btn" title="拖动调整宽度"></a><div class="J-scroll-project project-nav project-list project-list-common"><div class="list-hd angular-ui-tree"><ul class="own-project-list angular-ui-tree-nodes" id="tree-root"><li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i><span>工作管理</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list">    <li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'ssdw'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="dw.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>实时定位</span></a></div></li>      <li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'xhgj'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="patrolTrack.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>巡护轨迹</span></a></div></li>      


<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'xhfx'?'active':''" @mouseover="openlist_1" @mouseout="closelist_1"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-xiaoxi"></i><span>巡护分析</span></a></div>
<div v-show="open_1" style="position:absolute;top:-10px;left:190px;width:140px;height:100%;"><ul class="slidework"><li><a href="patrolTimelist.html">巡护时间分析</a></li><li><a href="patrolMileagelist.html">巡护里程分析</a></li><li><a href="patrolFrequencylist.html">巡护频次分析</a></li></ul></div>
</li>  

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'hzfx'?'active':''" @mouseover="openlist_2" @mouseout="closelist_2"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-dizhi"></i><span>火灾分析</span></a></div>
<div v-show="open_2" style="position:absolute;top:-10px;left:190px;width:140px;height:100%;"><ul class="slidework"><li><a href="fireGradeForm.html">火灾等级分析</a></li><li><a href="fireFrequencyForm.html">火灾频次分析</a></li><li><a href="fireAnalysis.html">火灾范围分析</a></li><li><a href="firePropertyLoss.html">财产损失分析</a></li></ul></div>
</li>   

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'wffx'?'active':''" @mouseover="openlist_3" @mouseout="closelist_3"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-gonglu"></i><span>违法分析</span></a></div>
<div v-show="open_3" style="position:absolute;top:-10px;left:190px;width:140px;height:100%;"><ul class="slidework"><li><a href="lllegalGradeForm.html">违法类型分析</a></li><li><a href="lllegalFrequencyForm.html">违法频次分析</a></li><li><a href="lllegalAnalysis.html">违法范围分析</a></li><li><a href="lllegalPropertyLoss.html">财产损失分析</a></li></ul></div>
</li>   

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'wrjfx'?'active':''" @mouseover="openlist_4" @mouseout="closelist_4"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-anjian"></i><span>无人机分析</span></a></div>
<div v-show="open_4" style="position:absolute;top:-10px;left:190px;width:140px;height:100%;"><ul class="slidework"><li><a href="UVAFrequencyForm.html">巡护频次分析</a></li><li><a href="UVATimeForm.html">巡护时间分析</a></li><li><a href="UVARangeAnalysis.html">巡护范围分析</a></li></ul></div>
</li></ul></li>

    <li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i><span>数据管理</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list">   
<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'hzsjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="hzsjgl.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>火灾数据管理</span></a></div></li>       
<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'wfsjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="wfsjgl.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>违法数据管理</span></a></div></li>      
<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'wrjsjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="planesjgl.html"><i class="icon iconfont icon-xiaoxi"></i><span>无人机数据管理</span></a></div></li></ul></li>

</ul></div></div></div>`,
	props:['leftactive'],
	data:function(){
		return {
			open_1:false,
			open_2:false,
			open_3:false,
			open_4:false
		}
		
	},
	methods:{
		openlist_1:function(){
			this.open_1 = true;
		},
		closelist_1:function(){
			this.open_1 = false
		},
		openlist_2:function(){
			this.open_2 = true;
		},
		closelist_2:function(){
			this.open_2 = false;
		},
		openlist_3:function(){
			this.open_3 = true;
		},
		closelist_3:function(){
			this.open_3 = false;
		},
		openlist_4:function(){
			this.open_4 = true;
		},
		closelist_4:function(){
			this.open_4 = false;
		}
	}
}


var leftaplants={
	template:`<div class="dash-sidebar J_dash_sidebar" style="width:206px"><a class="drag-btn" title="拖动调整宽度"></a><div class="J-scroll-project project-nav project-list project-list-common"><div class="list-hd angular-ui-tree"><ul class="own-project-list angular-ui-tree-nodes" id="tree-root">
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>动物监测</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'animation_ssck'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="animalMonitor.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>实时查看</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'animation_jcfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="animalAnalysis.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>监测分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'animation_sjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="animalDataManage.html"><i class="icon iconfont icon-xiaoxi"></i><span>数据管理</span></a></div></li></ul></li>
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>植物监测</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'plant_ssck'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="plantMonitor.html"><i class="icon iconfont icon-zhuzhuangtu"></i>   <span>实时查看</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'plant_jcfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="plantAnalysis.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>监测分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'plant_sjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="plantDataManage.html"><i class="icon iconfont icon-xiaoxi"></i>   <span>数据管理</span></a></div></li></ul></li>
</ul></div></div></div>`,
	props:['leftactive']
}

var leftecology={
	template:`<div class="dash-sidebar J_dash_sidebar" style="width:206px"><a class="drag-btn" title="拖动调整宽度"></a><div class="J-scroll-project project-nav project-list project-list-common"><div class="list-hd angular-ui-tree"><ul class="own-project-list angular-ui-tree-nodes" id="tree-root">
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>生态监测</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'hjjc'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="evvironmentAnalysis_1_list.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>环境监测</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'szjc'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="evvironmentAnalysis_2_list.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>水质监测</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'trjc'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="evvironmentAnalysis_3_list.html"><i class="icon iconfont icon-xiaoxi"></i><span>土壤监测</span></a></div></li></ul></li>
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i><span>烟感监测</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'yangan_ssck'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="smokeMonitoring.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>实时查看</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'yangan_sbyx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="smokelist.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>设备运行</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'yangan_sbfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-xiaoxi"></i><span>设备分析</span></a></div></li></ul></li>

<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i><span>遥感监测</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'yaogan_ssck'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="remoteSenseMonitoring.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>实时查看</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'yaogan_zbfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>植被分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'yaogan_gljsfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-xiaoxi"></i><span>公路建设分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'yaogan_rlhdfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-xiaoxi"></i><span>人类活动分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'yaogan_ygyxgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="remoteSenseManage.html"><i class="icon iconfont icon-xiaoxi"></i><span>遥感影像管理</span></a></div></li></ul></li>
</ul></div></div></div>`,
	props:['leftactive']
}





var leftstudy={
	template:`<div class="dash-sidebar J_dash_sidebar" style="width:206px"><a class="drag-btn" title="拖动调整宽度"></a><div class="J-scroll-project project-nav project-list project-list-common"><div class="list-hd angular-ui-tree"><ul class="own-project-list angular-ui-tree-nodes" id="tree-root">
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>科研统计</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'kyfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="scienceAnalysis.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>科研分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'ky_sjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="scienceDataManage.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>数据管理</span></a></div></li></ul></li>
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>宣教统计</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list"><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'xjfx'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="educationAnalysis.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>宣教分析</span></a></div></li><li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'xj_sjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="educationDataManage.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>数据管理</span></a></div></li></ul></li>
</ul></div></div></div>`,
	props:['leftactive']
}


var leftrisk={
	template:`<div class="dash-sidebar J_dash_sidebar" style="width:206px"><a class="drag-btn" title="拖动调整宽度"></a><div class="J-scroll-project project-nav project-list project-list-common"><div class="list-hd angular-ui-tree"><ul class="own-project-list angular-ui-tree-nodes" id="tree-root">
<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>风险分析</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list">

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'rybg'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="riskanalysis_people.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>人员变更分析</span></a></div></li>

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'sbbg'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="riskanalysis_meachine.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>设备变更分析</span></a></div></li>

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'zrzh'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="risk_naturalDisaster.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>自然灾害分析</span></a></div></li>

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'rwhd'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="risk_humanActive.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>人为活动分析</span></a></div></li>

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'jstr'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="#"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>建设投入分析</span></a></div></li>
</ul></li>

<li class="project-item J-project-item angular-ui-tree-node active first"><div class="cat-op-parent level-0"><a class="nowrap project-name"><i class="icon iconfont icon-zhankai"></i> <span>数据管理</span></a></div><ul class="dash-list angular-ui-tree-nodes own-dash-list">

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class="leftactive == 'zrzhsjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="risk_zrzhsjgl.html"><i class="icon iconfont icon-zhuzhuangtu"></i><span>自然灾害数据管理</span></a></div></li>

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'rwhdsjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="risk_rwhdsjgl.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>人为活动数据管理</span></a></div></li>

<li class="J-project-item angular-ui-tree-node has-label dashboard-item" :class = "leftactive == 'jstrsjgl'?'active':''"><div class="cat-op-parent level-1"><a class="nowrap dash-name" href="risk_jstrsjgl.html"><i class="icon iconfont icon-dianhuazixun-dianhua"></i><span>建设投入数据管理</span></a></div></li>

</ul></li>
</ul></div></div></div>`,
	props:['leftactive']
}




















