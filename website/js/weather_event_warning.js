// JavaScript Document
//第一个
var chart1 = new Highcharts.StockChart({
	chart : {
		renderTo : 'tab1_container1',
		type: 'spline',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
	},
	rangeSelector: {
		enabled:false
	},
	navigator : {
		enabled : false
	},
	scrollbar:{
		enabled : false
	},
	xAxis: [{
		minRange: 1 * 3600 * 1000, // 1 hour
		//lineWidth : 2,
		ordinal:false,
		type: 'datetime', 
		labels: { 
			formatter: function() {
			var vDate=new Date(this.value);
			return vDate.getFullYear()+"-"+(vDate.getMonth()+1)+"-"+vDate.getDate();
			}
		}
	}],
	yAxis: {
		//min:0,
		//max:25,
		//tickInterval:5,
		title:{
			text:'风速（m/s）'
		},
		opposite:false
	},
	series : [/*{
		name : '预测点一',
		data : [[1317888000000,15],
				[1317888840000,3],
				[1317889740000,4],
				[1317890640000,12],
				[1317891540000,21],
				[1317892440000,14],
				[1317893340000,5],
				[1317894240000,9],
				[1317895140000,19]],
	},{
		name : '预测点二',
		data : [[1317888000000,12],
				[1317888840000,30],
				[1317889740000,23],
				[1317890640000,22],
				[1317891540000,11],
				[1317892440000,13],
				[1317893340000,15],
				[1317894240000,29],
				[1317895140000,39]],
	}*/],
	tooltip: {
		dateTimeLabelFormats:function() {
			return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
		},
		useHTML: true,
		type: 'datetime', 
		valueDecimals: 2,
		borderColor:'gray',
		borderWidth: 1
	},
	legend:{
		enabled : true,
		//floating:true,
		verticalAlign:'bottom',
		//align:'right',
		borderWidth:0
	},
	exporting:{
		enabled : false
	}
});
//第二个
var chart2 = new Highcharts.StockChart({
	chart : {
		renderTo : 'tab2_container1',
		type: 'area',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
/*						events : {
			load : function() {
				var startDate = new Date();
				startDate.setDate(startDate.getDate());
				var endDate=new Date();
				endDate.setDate(endDate.getDate()+3);
				this.xAxis[0].setExtremes(startDate,endDate);
			}
		}
*/	},
	rangeSelector: {
		enabled:false
	},
	navigator : {
		enabled : false
	},
	scrollbar:{
		enabled : false
	},
	xAxis: [{
		minRange: 1 * 3600 * 1000, // 1 hour
		//lineWidth : 2,
		ordinal:false,
		type: 'datetime', 
		labels: { 
		formatter: function() {
		var vDate=new Date(this.value);
		return vDate.getFullYear()+"-"+(vDate.getMonth()+1)+"-"+vDate.getDate();
		}}
	}],
	yAxis: {
		//min:0,
		//max:30,
		//tickInterval:5,
		//lineWidth : 2,
		title:{
			text:'降水（mm）'
		},
		opposite:false
	},
	series : [/*{
		name : '预测点一',
		data : [[1317888000000,15],
				[1317888840000,3],
				[1317889740000,4],
				[1317890640000,12],
				[1317891540000,21],
				[1317892440000,14],
				[1317893340000,5],
				[1317894240000,9],
				[1317895140000,19]],
	}*/],
	tooltip: {
		dateTimeLabelFormats:function() {
			return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
		},
		useHTML: true,
		type: 'datetime', 
		valueDecimals: 2,
		borderColor:'gray',
		borderWidth: 1
	},
	legend:{
		enabled : true,
		verticalAlign:'bottom',
		borderWidth:0
	},
	exporting:{
		enabled : false
	}
});
//第三个
var chart3 = new Highcharts.StockChart({
	chart : {
		renderTo : 'tab3_container1',
		type: 'spline',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
/*						events : {
			load : function() {
				var startDate = new Date();
				startDate.setDate(startDate.getDate());
				var endDate=new Date();
				endDate.setDate(endDate.getDate()+3);
				this.xAxis[0].setExtremes(startDate,endDate);
			}
		}*/
	},
	rangeSelector: {
		enabled:false
	},
	navigator : {
		enabled : false
	},
	scrollbar:{
		enabled : false
	},
	xAxis: [{
		minRange: 1 * 3600 * 1000, // 1 hour
		//lineWidth : 2,
		ordinal:false,
		type: 'datetime', 
		labels: { 
		formatter: function() {
		var vDate=new Date(this.value);
		return vDate.getFullYear()+"-"+(vDate.getMonth()+1)+"-"+vDate.getDate();
		}}
	}],
	yAxis: {
		//min:0,
		//max:60,
		//tickInterval:1,
		opposite:false,
		title:{
			text:'温度（℃）'
		}
		//categories: ['0','5','10','15','20','25','30'],
	},
	series : [/*{
		name : '预测点一',
		data : [[1317888000000,15],
				[1317888840000,3],
				[1317889740000,4],
				[1317890640000,12],
				[1317891540000,21],
				[1317892440000,14],
				[1317893340000,5],
				[1317894240000,9],
				[1317895140000,19]],
	},{
		name : '预测点二',
		data : [[1317888000000,15],
				[1317888840000,3],
				[1317889740000,4],
				[1317890640000,12],
				[1317891540000,21],
				[1317892440000,14],
				[1317893340000,5],
				[1317894240000,9],
				[1317895140000,19]],
	}*/],
	tooltip: {
		dateTimeLabelFormats:function() {
			return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
		},
		useHTML: true,
		type: 'datetime', 
		valueDecimals: 2,
		borderColor:'gray',
		borderWidth: 1
	},
	legend:{
		enabled : true,
		verticalAlign:'bottom',
		borderWidth:0
	},
	exporting:{
		enabled : false
	}
});
//第四个
var chart4 = new Highcharts.StockChart({
	chart : {
		renderTo : 'tab4_container1',
		type: 'spline',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
	},
	rangeSelector: {
		enabled:false
	},
	navigator : {
		enabled : false
	},
	scrollbar:{
		enabled : false
	},
	xAxis: [{
		minRange: 1 * 3600 * 1000, // 1 hour
		//lineWidth : 2,
		ordinal:false,
		type: 'datetime', 
		labels: { 
		formatter: function() {
		var vDate=new Date(this.value);
		return vDate.getFullYear()+"-"+(vDate.getMonth()+1)+"-"+vDate.getDate();
		}}
	}],
	yAxis: {
		//min:0,
		//max:100,
		//tickInterval:10,
		title:{
			text:'湿度（%）'
		},
		opposite:false
	},
	series : [/*{
		name : '预测点一',
		data : [[1317888000000,15],
				[1317888840000,3],
				[1317889740000,4],
				[1317890640000,12],
				[1317891540000,21],
				[1317892440000,14],
				[1317893340000,5],
				[1317894240000,9],
				[1317895140000,19]],
	}*/],
	tooltip: {
		dateTimeLabelFormats:function() {
			return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
		},
		useHTML: true,
		type: 'datetime', 
		valueDecimals: 2,
		borderColor:'gray',
		borderWidth: 1
	},
	legend:{
		enabled : true,
		verticalAlign:'bottom',
		borderWidth:0
	},
	exporting:{
		enabled : false
	}
});
//第五个
var chart5 = new Highcharts.StockChart({
	chart : {
		renderTo : 'tab5_container1',
		type: 'spline',
		width:$("#tabContainer").width(),
		height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20
	},
	rangeSelector: {
		enabled:false
	},
	navigator : {
		enabled : false
	},
	scrollbar:{
		enabled : false
	},
	xAxis: [{
		minRange: 1 * 3600 * 1000, // 1 hour
		//lineWidth : 2,
		ordinal:false,
		type: 'datetime', 
		labels: { 
		formatter: function() {
		var vDate=new Date(this.value);
		return vDate.getFullYear()+"-"+(vDate.getMonth()+1)+"-"+vDate.getDate();
		}}
	}],
	yAxis: {
		//min:0,
		//max:60,
		//tickInterval:1,
		title:{
			text:'气压（hPa）'
		},
		opposite:false
	},
	series : [/*{
		name : '预测点一',
		data : [[1317888000000,15],
				[1317888840000,3],
				[1317889740000,4],
				[1317890640000,12],
				[1317891540000,21],
				[1317892440000,14],
				[1317893340000,5],
				[1317894240000,9],
				[1317895140000,19]],
	}*/],
	tooltip: {
		dateTimeLabelFormats:function() {
			return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
		},
		useHTML: true,
		type: 'datetime', 
		valueDecimals: 2,
		borderColor:'gray',
		borderWidth: 1
	},
	legend:{
		enabled : true,
		verticalAlign:'bottom',
		borderWidth:0
	},
	exporting:{
		enabled : false
	}
});
var tabMap = {};
function init(){
	initTabs();
	attachPageEvents();
	loadTab1();
	//$('#y_tab_li2').bind("click",loadTab1);
	setTimeout(function () { 
		$('#y_tab_li2').bind("click",resizePage);
    }, 300);
}

//页面中的事件绑定
function attachPageEvents(){
	$(this).bind("resize",resizePage);
	$('#y_moveLt,#y_moveRt').bind("click",resizePage);
	//$('#y_tab_li2').bind("click",resizePage);
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
			loaded:false,
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
		}, 300);
		loadTab(e.target.hash);
	});
	initChart();
	
}


function  initChart(){
	tabMap["#tab1"].objMap["tab1_container1"] = chart1;
	tabMap["#tab2"].objMap["tab2_container1"] = chart2;
	tabMap["#tab3"].objMap["tab3_container1"] = chart3;
	tabMap["#tab4"].objMap["tab4_container1"] = chart4;
	tabMap["#tab5"].objMap["tab5_container1"] = chart5;
};

function loadTab(tab){
    if(!tabMap[tab].loaded){
        /*if(tab == "#tab1"){
            loadTab1();
        }else */if(tab == "#tab2"){
            loadTab2();
        }else if(tab == "#tab3"){
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
	var seriesParam1 = [
		{name:"预测点一",color:"#76ABE9"},
		{name:"预测点二",color:"#B0D363"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/weather_event_warning1.json' ,function(data){
		$.each(seriesParam1,function(i,obj){
			tabMap["#tab1"].objMap["tab1_container1"].addSeries({
				data:data[i],
				name:obj.name
			});	
		});
	});
}

function loadTab2(){
	var seriesParam2 = [
		{name:"预测点一",color:"#76ABE9"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/weather_event_warning2.json' ,function(data){
		$.each(seriesParam2,function(i,obj){
			tabMap["#tab2"].objMap["tab2_container1"].addSeries({
				data:data,
				name:obj.name
			});	
		});
	});
}

function loadTab3(){
	var seriesParam3 = [
		{name:"预测点一",color:"#76ABE9"},
		{name:"预测点二",color:"#B0D363"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/weather_event_warning3.json' ,function(data){
		$.each(seriesParam3,function(i,obj){
			tabMap["#tab3"].objMap["tab3_container1"].addSeries({
				data:data[i],
				name:obj.name
			});	
		});
	});
}

function loadTab4(){
	var seriesParam4 = [
		{name:"预测点一",color:"#76ABE9"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/weather_event_warning4.json' ,function(data){
		$.each(seriesParam4,function(i,obj){
			tabMap["#tab4"].objMap["tab4_container1"].addSeries({
				data:data,
				name:obj.name
			});	
		});
	});
}

function loadTab5(){
	var seriesParam5 = [
		{name:"预测点一",color:"#76ABE9"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/weather_event_warning5.json' ,function(data){
		$.each(seriesParam5,function(i,obj){
			tabMap["#tab5"].objMap["tab5_container1"].addSeries({
				data:data,
				name:obj.name
			});	
		});
	});
}


//强风预警和冰冻预警
$('.y_map_change li').hover(function(e) {
 	$(this).children('a').css('color','#ffd600') 
},function(){
 	$(this).children('a').css('color','#fff') 
});


//Map
var attribution = new ol.Attribution({
	  html: 'Tiles &copy; USGS, rendered with ' +
		  '<a href="http://www.maptiler.com/">MapTiler</a>'
	});


	var mapMinZoom = 5;
	var mapMaxZoom = 13;
	//var mapExtent = [120.50, 30.79, 122.50, 31.64];//地图范围：上海市
	var mapExtent = [-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892];
	var map = new ol.Map({
	  target: 'map',
	  layers: [
		new ol.layer.Tile({
		  source: new ol.source.OSM()
		}),
		new ol.layer.Tile({//加载地图切片
		  extent: ol.proj.transformExtent(mapExtent, 'EPSG:102100', 'EPSG:4326'),
		  source: new ol.source.XYZ({
			attributions: [attribution],
			url: '{y}.png'/*tpa=http://54.223.188.165/map/{z}/{x}/{y}.png*/,
			tilePixelRatio: 1, // THIS IS IMPORTANT
			minZoom: mapMinZoom,
			maxZoom: mapMaxZoom
		  })
		})
	  ],
	  view: new ol.View({
		projection: 'EPSG:4326',
		center: ol.proj.transform([1.35253181295E7, 3661353.4107777104],
			'EPSG:102100', 'EPSG:4326'),//EPSG:4326 WGS84  GPS坐标, EPSG:3857 ,墨卡托投影,单位是米
		zoom: 8
	  }),
	  renderer: 'canvas'
	});
	//map.addLayer(clusters);

function onMapClick(e) {
		// 显示地图屏幕坐标
		alert("lon: " + e.coordinate[0] + " lat:" + e.coordinate[1])   //这个是经纬度
		//新建覆盖物
		var start = new ol.Overlay(
				{
					element : 'tower.png'/*tpa=http://gwws.dxwind.cn/gwfd_xj/styles/images/icon/tower.png*/,
					position : e.coordinate
				});
		map.addOverlay(start);
		/*  var str = "[Screen]:" + e.xy.x + "," + e.xy.y;
		 document.getElementById("screen_xy").innerHTML = str;
		 // 屏幕坐标向地图坐标的转换
		 var lonlat = map.getLonLatFromViewPortPx(e.xy);
		 str = "[Map]:" + lonlat.lat + "," + lonlat.lon;
		 document.getElementById("map_xy").innerHTML = str; */
	}
	map.on("click", onMapClick, false);


//没有选择风机切换样式
$('#y_tab_li1').click(function(e) {
	$('#y_choose_windmills_btn,.y_btn_bg').hide();
	$('#y_tab_div1').show().siblings('#y_tab_div2').hide();   
	$('#y_tab_li1').addClass('orange').siblings('#y_tab_li2').removeClass('orange');
});
$('#y_tab_li2').click(function(e) {
	$('#y_choose_windmills_btn,.y_btn_bg').show();
	$('#y_tab_div2').show().siblings('#y_tab_div1').hide();   
	$('#y_tab_li2').addClass('orange').siblings('#y_tab_li1').removeClass('orange');
});
//曲线三要求切换当前选中样式
$('#y_tab_div2 li').click(function(){
	$(this).addClass('y_selected_tab').siblings().removeClass('y_selected_tab')
});
