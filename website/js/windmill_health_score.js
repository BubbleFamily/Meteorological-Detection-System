 $(function(){
     if(init) init();    
   });

//init函数在页面加载完后将会被index主框架自动调用，初始化代码请放在这里。
var tabMap = {};

function init(){
	
	initTabs();
	loadTab("#tab1");
	attachPageEvents();
	setTimeout(function () { 
       resizePage();
    }, 500);
	
}

//页面中的事件绑定
function attachPageEvents(){
	$(this).bind("resize",resizePage);
	$("#y_moveRt,#y_moveLt").bind("click",resizePage);
}
//遍历所有tab栏，当哪个tab栏有active时，给resizeTab（）方法
function resizePage(){
	$.each(tabMap,function(name,tab){
		tabMap[name].resized = false;
		if(tabMap[name].active){
			resizeTab(name);
		}
	});
}
//定义resizeTab（）方法，给第一次加载的图表自适应setsize（），
function resizeTab(tab){
	if(!tabMap[tab].resized){
		$.each(tabMap[tab].objMap,function(id,chart){
			if(id.indexOf(tab.replace("#","") + "_container") == 0){
				var width = $("#tabContainer").width() ;
				var height = $(document.body).height()-160;
				chart.setSize(width,height);

			}
		});
		tabMap[tab].resized = true;
	}
}

function initTabs(){
	$.each($('a[data-toggle="tab"]'),function(i,tab){
		var tabObj = {//可将图、表等对象一并放入统一管理
			init:false,
			//loaded:false,
			active:i == 0?true:false,
			resized:false,
			objMap:{}
		};
		tabMap[$(this).attr("href")] = tabObj;
	});
	$('a[data-toggle="tab"]').on('http://112.25.190.109:7002/eaps/js/shown.bs.tab', function (e) {
		$.each(tabMap,function(name,tab){
			tab.active = name == e.target.hash;
		});
		resizeTab(e.target.hash);
		loadTab(e.target.hash);
	});
}


function initTab(tab){
	var options;
	if(tab == "#tab1"){
		//初始化tab1
		options = {
			id:"tab1_container1",
			title:'风速日变化',
			width: $("#tabContainer").width(),
			height: $(document.body).height()-160
			//categories:tabMap["#tab1"].objMap.categories
		// 	series: [{
		// 			name: '机舱风速仪评分',
		// 			data: [[1,60],[2,10],[3,95],[4,25],[5,29],[6,39],[7,42],[31,45]],
		// 		}],
		 }
		tabMap["#tab1"].objMap["tab1_container1"] = createLineChart(options);
	 }
	//else if(tab == "#tab2"){
	// 	//初始化tab2
	// 	options = {
	// 		id:"tab2_container1",
	// 		title:'机舱风速仪可靠性评估',
	// 		width: $("#tabContainer").width(),
	// 		height: $(document.body).height()-160
	// 		//categories:tabMap["#tab2"].objMap.categories
	// 	// 	series: [{
	// 	// 		name: '机舱风速仪可靠性评估',
	// 	// 		data: [[1,90],[2,10],[3,95],[4,25],[5,99],[6,39],[7,42],[31,45]],
	// 	// 	}]
	// 	 }
	// 	tabMap["#tab2"].objMap["tab2_container1"] = createLineChart(options);
	// }
	else if(tab == "#tab3"){
		//tab3创建图
		options = {
			id:"tab3_container1",
			title:'偏航系统评分',
			width: $("#tabContainer").width(),
			height: $(document.body).height()-160
			//categories:tabMap["#tab2"].objMap.categories
			// series: [{
			// 	name: '偏航系统评分',
			// 	data: [[1,60],[4,10],[8,20],[12,25],[17,90],[19,39],[23,42],[31,45]],
			// }]
		}
		tabMap["#tab3"].objMap["tab3_container1"] = createLineChart(options);
		//});
	}else if(tab == "#tab4"){
		//tab4创建图
		options = {
			id:"tab4_container1",
			title:'风速逐月变化',
			width: $("#tabContainer").width(),
			height: $(document.body).height()-160
			//categories:timeSpanInfo.yearMonthList
		// 	series: [ {
		// 		name: '评分',
		// 		data: [[1,30],[4,10],[8,20],[12,55],[17,90],[19,89],[23,62],[31,45]]
		// 	}]
		 }
		tabMap["#tab4"].objMap["tab4_container1"] = createLineChart(options);
	}
	else if(tab == "#tab5"){
		//tab4创建图
		options = {
			id:"tab5_container1",
			title:'风速逐月变化',
			width: $("#tabContainer").width(),
			height: $(document.body).height()-160
			//categories:timeSpanInfo.yearMonthList
		// 	series: [ {
		// 		name: '评分',
		// 		data: [[1,10],[4,11],[8,20],[12,95],[17,92],[19,85],[23,22],[31,75]]
	
		// 	}]
		 }
		tabMap["#tab5"].objMap["tab5_container1"] = createLineChart(options);
	}
	tabMap[tab].init = true;
}

//每个tab页的数据处理写在此处，统计条件统一从condition中读取

function loadTab(tab){
	if(!tabMap[tab].init) 
		initTab(tab);
	if(!tabMap[tab].loaded){
		if(tab == "#tab1"){
			loadTab1();
		}/*else if(tab == "#tab2"){
			loadTab2();
		}*/else if(tab == "#tab3"){
			loadTab3();
		}else if(tab == "#tab4"){
			loadTab4();
		}else if(tab == "#tab5"){
			loadTab5();
		}
		tabMap[tab].loaded = true;
	}
}


function loadTab1(){
	var url = "http://112.25.190.109:7002/eaps/js/json/health_1.json";
	$.getJSON(url, function(result) {
			var seriesOption = {
				name : '',
				data : result,
				type: 'line',
				pointPlacement:'between'
			};
			tabMap["#tab1"].objMap["tab1_container1"].addSeries(seriesOption);
		});
}

// function loadTab2(){
// 	//更新曲线
// 	$.each(tabMap["#tab2"].objMap["tab2_container1"].series,function(i,series){
// 		tabMap["#tab2"].objMap["tab2_container1"].series[0].remove();
// 	});
// 		var url =  "http://112.25.190.109:7002/eaps/js/json/health_2.json";
// 		$.getJSON(url, function(result) {
// 			var seriesOption = {
// 				name : '',
// 				data : result,
// 				type: 'line',
// 				pointPlacement:'between'
// 			};
// 			tabMap["#tab2"].objMap["tab2_container1"].addSeries(seriesOption);
// 		});
// }

function loadTab3(){
	//更新曲线
		$.each(tabMap["#tab3"].objMap["tab3_container1"].series,function(i,series){
			tabMap["#tab3"].objMap["tab3_container1"].series[0].remove();
		});
			var url =  "http://112.25.190.109:7002/eaps/js/json/health_3.json";
			$.getJSON(url, function(result) {
				var seriesOption = {
					name : '',
					data : result,
					type: 'line',
					pointPlacement:'between'
				};
				tabMap["#tab3"].objMap["tab3_container1"].addSeries(seriesOption);
			});
		
}

function loadTab4(){
	//更新曲线
	$.each(tabMap["#tab4"].objMap["tab4_container1"].series,function(i,series){
		tabMap["#tab4"].objMap["tab4_container1"].series[0].remove();
	});
		var url =  "http://112.25.190.109:7002/eaps/js/json/health_4.json";
		$.getJSON(url, function(result) {
			var seriesOption = {
				name : '',
				data : result,
				type: 'line',
				pointPlacement:'on'
			};
			tabMap["#tab4"].objMap["tab4_container1"].addSeries(seriesOption);
		});
	
}

function loadTab5(){
	//更新曲线
	$.each(tabMap["#tab5"].objMap["tab5_container1"].series,function(i,series){
		tabMap["#tab5"].objMap["tab5_container1"].series[0].remove();
	});
		var url =  "http://112.25.190.109:7002/eaps/js/json/health_5.json";
		$.getJSON(url, function(result) {
			var seriesOption = {
				name : '',
				data : result,
				type: 'line',
				pointPlacement:'on'
			};
			tabMap["#tab5"].objMap["tab5_container1"].addSeries(seriesOption);
		});
}






function createLineChart(options) {
	var	chart = new Highcharts.Chart( {
		chart : {
			renderTo : options.id,
			width: options.width,
			height:options.height,
			marginRight: 20,
			type: 'line'
		},
		title: {
            text: ''
        },
		xAxis : {
			lineWidth : 2,
			tickInterval: 1,
			//tickPixelInterval: 50,
			//categories: options.categories,
			tickmarkPlacement: 'on'
		},
		yAxis : {
			lineWidth : 2,
			title : {
				text : '评分(分)'
			},
			min:0,
			max:100
		},
		series : options.series,
		 tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}日</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">得分: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 分</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
		// tooltip: {
		// 	crosshairs: true,
		// 	shared: true,
		// 	valueDecimals : 2,
		// 	valueSuffix: '分'
		// },
		legend:{
			//borderWidth :0,
			enabled:false
			// floating:true,
			// verticalAlign:'top',
			// align:'right',
			// y:30,
			// x:-10
		},
		exporting : {
			enabled : false
		}
	});
	return chart;
}



 
       var browser_width = $(document.body).width()-260;  
        $(".y_tab_li").css("width",(browser_width)/4);
        $(window).resize(function() { 
            browser_width = $(document.body).width()-260; 
            $(".y_tab_li").css("width",(browser_width)/4); 

        });
        $('#y_moveLt').click(function(){
        	browser_width = $(document.body).width()-60; 
            $(".y_tab_li").css("width",(browser_width)/4);
              
            $(window).resize(function() { 
             browser_width = $(document.body).width()-60; 
             $(".y_tab_li").css("width",(browser_width)/4); 

            }); 
        });
        $('#y_moveRt').click(function(){
            browser_width = $(document.body).width()-260;
            $(".y_tab_li").css("width",(browser_width)/4);
            $(window).resize(function() { 
                browser_width = $(document.body).width()-260; 
                $(".y_tab_li").css("width",(browser_width)/4); 

            }); 
        }); 