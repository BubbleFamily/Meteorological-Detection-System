//第一个				
// create the chart
//$.getJSON('http://112.25.190.109:7002/eaps/js/json/electricity_loss_evaluate.json' ,function(data){
var chart1 = new Highcharts.StockChart({
		chart : {
			renderTo : 'tab1_container1',
			type: 'area',
			width:$("#tabContainer").width(),
		},
		xAxis: [{
			type: 'datetime', 
			labels: { 
				formatter: function() {
					var vDate=new Date(this.value);
					return /*vDate.getFullYear()+"-"+*/(vDate.getMonth()+1)+"-"+vDate.getDate();
				}
			}
		}],
		/*tooltip: {
			//xDateFormat: '%Y-%m-%d %H:%M:%S',
			//shared: true
		},	*/
								
		yAxis: {
			max:1,
			min:0,
			tickInterval: 1,
			labels:{
				style:{
					color: '#fff'
				}	
			},
			gridLineWidth:0,
			opposite:false
		},
		tooltip: {
			formatter: function() {
				return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',this.x)+'<br>'+(this.y==1?'停机':'运行中')
			},
			useHTML:true
		},
		rangeSelector : {
			enabled:false
		},
		plotOptions: {
			series:{
				dataGrouping:{
					enabled:false	
				}		
			}
		},
		series : [/*{
			name : '停机记录',
			step :true,
			data : data,
			gapSize: 5,
			fillColor : {
				linearGradient : {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 1
				},
				stops : [
					[0, Highcharts.getOptions().colors[0]],
					[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
				]
			},
			threshold: null
		}*/]
	});
//});
//第二个
var chart2 = new Highcharts.Chart({
	// Highcharts 配置
	chart : {
		renderTo : "tab2_container1" ,
		type: 'column',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
	},
	xAxis: {
		categories: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月']
	},
	yAxis: {
		title: {
			text: '电量(mw·h)'
		},
		//max:5000,
		min:0,
		//tickInterval: 500
	},
	legend:{
		enabled:false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">月份：{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}： </td>' +
			'<td style="padding:0"><b>{point.y} mw·h</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	series: [/*{
		name: '发电量',
		data: [424, 332, 345, 397, 526, 755, 574, 604, 476, 391, 468, 511]

	}*/]
});	
//第三个
// create the chart
var chart3 = new Highcharts.StockChart({
	colors: ["#DDDF0D","#DDDF0D"],
	chart : {
		renderTo : 'tab3_container1',
		width:$("#tabContainer").width(),
		height:$("#tabContainer").width()/3		
		/*type:function (){
			if(data==5000){
			  return 'area'
			}else{
			  return 'line'
			}
		},*/
	},
	xAxis: [{
		type: 'datetime', 
		labels: { 
			formatter: function() {
				var vDate=new Date(this.value);
				return /*vDate.getFullYear()+"-"+*/(vDate.getMonth()+1)+"-"+vDate.getDate();
			}
		}
	}],
	yAxis: {
		title: {
			text: '电量(mw·h)'
		},
		//max:5000,
		min:0,
		//tickInterval: 1,
		gridLineWidth:0,
		opposite:false
	},
	tooltip: {
		formatter: function() {
			/*var s;
			if (this.point.series.name==seriesNames[2]) { 
				s = ''+ this.x +': '+ this.y +' h';
			}else{
				s = ''+ this.x +': '+ this.y +' MWh';
			}*/
			return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',this.x)+'<br>'+(this.y==10?'未限电':this.y+'mw')

		},
		useHTML:true
	},
	rangeSelector : {
		enabled:false
	},
	plotOptions: {
		series:{
			dataGrouping:{
				enabled:false	
			}		
		}
	},
	series : [/*{
		name : '停机记录',
		data : [[1317888000000,0],
				[1317888840000,1],
				[1317889740000,1],
				[1317890640000,0],
				[1317891540000,0],
				[1317892440000,1],
				[1317893340000,1],
				[1317894240000,0],
				[1317895140000,1]],
		gapSize: 5,
		fillColor : {
			linearGradient : {
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 1
			},
			stops : [
				[0, Highcharts.getOptions().colors[0]],
				[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
			]
		},
		threshold: null
	}*/]
});
//第四个
var chart4 = new Highcharts.Chart({
	// Highcharts 配置
	chart : {
		renderTo : "tab4_container1" ,
		type: 'column',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
	},
	xAxis: {
		categories: ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月']
	},
	yAxis: {
		title: {
			text: '电量(mw·h)'
		},
		//max:5000,
		min:0,
		//tickInterval: 500
	},
	legend:{
		enabled:false
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">月份：{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}： </td>' +
			'<td style="padding:0"><b>{point.y}mw·h</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	series: [/*{
		name: '装机容量',
		data: [424, 332, 345, 397, 526, 755, 574, 604, 476, 391, 468, 511]

	}*/]
});	
var tabMap = {};
function init(){
	initTabs();
	attachPageEvents();
	setTimeout(function () { 
       resizePage();
    }, 500);
	loadTab1();
}

//页面中的事件绑定
function attachPageEvents(){
	$(this).bind("resize",resizePage);
	$('#y_moveLt,#y_moveRt').bind("click",resizePage);
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
				var height = $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20;
				var height0 = $("#tabContainer").width()/3;
				if(tab=='#tab1'){
					chart.setSize(width);
				}else if(tab=='#tab3'){
					chart.setSize(width,height0);
				}else{
					chart.setSize(width,height);
				}
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
		setTimeout(function () { 
			resizeTab(e.target.hash);
		}, 500);
		loadTab(e.target.hash);
	});
	initChart();
	
}


function  initChart(){
	tabMap["#tab1"].objMap["tab1_container1"] = chart1;
	tabMap["#tab2"].objMap["tab2_container1"] = chart2;
	tabMap["#tab3"].objMap["tab3_container1"] = chart3;
	tabMap["#tab4"].objMap["tab4_container1"] = chart4;
};
	
function loadTab(tab){
    if(!tabMap[tab].loaded){
		if(tab == "#tab2"){
            loadTab2();
        }else if(tab == "#tab3"){
            loadTab3();
        }else if(tab == "#tab4"){
            loadTab4();
        }
        tabMap[tab].loaded = true;
    }
}


function loadTab1(){
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/electricity_loss_evaluate1.json' ,function(data){
		tabMap["#tab1"].objMap["tab1_container1"].addSeries({
			data:data,
			name:"风机停机记录"
		});	
	});
}

function loadTab2(){
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/electricity_loss_evaluate2.json' ,function(data){
		tabMap["#tab2"].objMap["tab2_container1"].addSeries({
			data:data,
			name:"发电量"
		});	
	});
}

function loadTab3(){
	var seriesParam1 = [
		{name:"散点图",color:"#76ABE9"},
		{name:"实际功率曲线",color:"#76ABE9"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/electricity_loss_evaluate3.json' ,function(data){
			$.each(seriesParam1,function(i,obj){
				if(i==0){
					tabMap["#tab3"].objMap["tab3_container1"].addSeries({
						data:data[0],
						type:'line',
						//name:obj.name
					});	
				}else{
					tabMap["#tab3"].objMap["tab3_container1"].addSeries({
						type:'area',
						data:data[1],
						//name:obj.name
					});	
				}
			});
	});
}

function loadTab4(){
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/electricity_loss_evaluate4.json' ,function(data){
		tabMap["#tab4"].objMap["tab4_container1"].addSeries({
			data:data,
			name:"限电损失记录"
		});	
	});
}

$('.y_tab_li').click(function(e) {
	$('#y_choose_windmill_btn').click(function(e) {
		$('#y_windmill_list_one').hide();
		$('#y_windmill_list_two').show();
	});
});
//没有月份点击样式
$('#y_tab_li2,#y_tab_li4').click(function(e) {
	$('#y_month').hide();
});
$('#y_tab_li1,#y_tab_li3').click(function(e) {
	$('#y_month').show();
});
//整个风场页面（风场限电记录）
$('#y_tab_li3,#y_tab_li4').click(function(e) {
	$('.y_select ul li').eq(0).hide();
});
$('#y_tab_li1,#y_tab_li2').click(function(e) {
	$('.y_select ul li').eq(0).show();
});
