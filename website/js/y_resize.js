// JavaScript Document
//页面中的事件绑定
function attachPageEvents(){
	//$("#towerCode").bind("click",showTowerTree);
	//$("#statBtn").bind("click",stat);
	$(this).bind("resize",resizePage);
};
function resizePage(){
	$.each(tabMap,function(name,tab){
		tabMap[name].resized = false;
		if(tabMap[name].active){
			resizeTab(name);
		}
	});
};
function resizeTab(tab){
	if(!tabMap[tab].resized){
		$.each(tabMap[tab].objMap,function(id,chart){
			if(id.indexOf(tab.replace("#","") + "_chart") == 0){
				var width = $("#tabContainer").width() ;
				var height = width*chart.chartHeight/chart.chartWidth;
				chart.setSize(width,height);
			}
		});
		tabMap[tab].resized = true;
	}
}

function initTabs(){
	refreshConditionPanelState("#tab1");
	$.each($('a[data-toggle="tab"]'),function(i,tab){
		var tabObj = {//可将图、表等对象一并放入统一管理
			init:false,
			loaded:false,
			active:i == 0?true:false,
			resized:false,
			objMap:{}
		};
		tabMap[$(this).attr("href")] = tabObj;
	});
	initCategories();
	$('a[data-toggle="tab"]').on('shown', function (e) {
		$.each(tabMap,function(name,tab){
			tab.active = name == e.target.hash;
		});
		refreshConditionPanelState(e.target.hash);
		resizeTab(e.target.hash);
		loadTab(e.target.hash);
	});
};