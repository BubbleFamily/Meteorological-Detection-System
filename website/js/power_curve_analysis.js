//$(function () {
	//第一个
	//$.getJSON('http://112.25.190.109:7002/eaps/js/json/y_power.json' ,function(data){
	/*var x = [];//x轴
	var y = [];//y轴
	var xtext = [];//x轴的text
	$.ajax({
		type:'get',
		dataType: "json",
		url:'http://112.25.190.109:7002/eaps/js/json/y_power.json',//请求数据的地址
		success: function(data){
			var json = eval("("+data+")");
			var s= 1;
			for(var key in json.list){
				json.list[key].y = json.list[key].age;//给X轴的text赋值
				xtext = json.list[key].name;//给Y轴赋值	
			}	
			chart.series[0].setDta(json.list)//数据添加到highchart上面
		},
		error: function(e){
		}
	});*/
	var chart1 = new Highcharts.Chart({
			// Highcharts 配置
			chart : {
				renderTo : "tab1_container1" ,
				width: $("#tabContainer").width(),
				height :$(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-$().height()-20,
				backgroundColor: 'transparent',
				type: 'spline'
			},
			tooltip: {
				formatter: function() {
					if(this.point.series.name=='散点图'){
						return false
					}else{
						//return this.point.series.name+"<br>风速："+this.x+"m/s"+"</br>"+"功率："+this.y+"kw"
						return false
					}
				},
				useHTML: true							
			},
			/*tooltip: {
				 enabled: false
			},*/
			xAxis: {
				title: {
					text: '风速（m/s）'
				},
				min:0,
				max:25,
				tickInterval: 1,
				labels:{
					style:{
						color: '#fff',
                		align: 'left'
					}
				},
				allowDecimals: true
			},
			yAxis: {
				title: {
					text: '功率(kw)'
				},
				//max:5000,
				min:0,
				//tickInterval: 500
			},
			series: []
			 /*{
					name: '散点图',
					type:'scatter',
					zoomType: 'xy' ,
					data: data,
				},{
					name: '出厂功率曲线',
					data: data,
				},{
					name: '实际功率曲线',
					data: data,
			}*/
			
		});
		
	//});
	//第二个
	var chart2 = new Highcharts.Chart({
		// Highcharts 配置
		chart : {
			renderTo : "tab2_container1" ,
				backgroundColor: 'transparent',
				width: $("#tabContainer").width(),
				height :$(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
				type: 'spline',
				style:{
					color: '#fff'
				}
			},
			tooltip: {
				/*formatter: function() {
					return this.point.series.name+"<br>风速："+this.x+"m/s"+"</br>"+"功率："+this.y+"kw"
				},
				useHTML: true,*/
				valueDecimals: 2,
				headerFormat: '<span style="font-size:10px">风速：{point.key}m/s</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}： </td>' +'<td style="padding:0"><b>功率：{point.y} kw</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			xAxis: {
				title: {
					text: '风速（m/s）'
				},
				min:0,
				max:25,
				tickInterval: 1,
				tickmarkPlacement: 'on',
				labels:{
					style:{
						color: '#fff'
					}	
				},
				allowDecimals: true
			},
			yAxis: {
				title: {
					text: '功率(kw)'
				},
				//max:5000,
				min:0,
				//tickInterval: 500
			},
			plotOptions: {
				series: {
					marker: {
						enabled: false
					}
				},
			},
			series: []					/*{
				name: '1月',
				data: [[1.9,800],[8.6,1300],[8.9,1600],[15,2800],[18,3000],[20,3500],[23,4300],[25,4600]],
			}, {
				name: '2月',
				data: [[1.6,600],[8.9,1400],[10.9,1700],[15,2800],[18,3000],[20,3500],[23,4300],[25,4000]],
			}, {
				name: '3月',
				data: [[1.8,800],[8.4,1200],[10.6,1800],[12,2540],[18.5,2674],[19.9,3800],[21.5,4000],[25,4500]],
			}, {
				name: '4月',
				data: [[1.9,800],[8.6,1300],[8.9,1600],[15,2800],[18,3000],[20,3500],[23,4300],[25,4600]],
			}, {
				name: '5月',
				data: [[1.8,800],[8.4,1200],[10.6,1800],[11,2540],[18.5,2674],[19.9,3800],[21.5,4000],[25,4500]],
			}, { 
				name: '6月',
				data: [[1.8,800],[8.4,1200],[14.6,1800],[15,3520],[18.5,2674],[19.9,3850],[21.5,4000],[25,4500]],
			}, {
				name: '7月',
				data: [[1.8,800],[8.4,1200],[12.6,1800],[14,2544],[18.5,2174],[19.9,3300],[21.5,4000],[25,4500]],
			}, {
				name: '8月',
				data: [[1.8,800],[11.4,1200],[12,2540],[17.6,1800],[18.5,2644],[19.9,3640],[21.5,4000],[25,4500]],
			}, {
				name: '9月',
				data: [[1.8,800],[9.4,1200],[12,2540],[14.6,1800],[18.5,2674],[19.9,3840],[21.5,4000],[25,4500]],
			}, {
				name: '10月',
				data: [[1.8,800],[8.4,1200],[12,2645],[15.6,1800],[18.5,2356],[19.9,3642],[21.5,4000],[25,4500]],
			}, {
				name: '11月',
				data: [[1.8,800],[8.4,1200],[12,2540],[18.6,1800],[19.1,3600],[22.5,3700],[25,4900]],
			}, {
				name: '12月',
				data: [[1.9,900],[9.4,1400],[10.6,1800],[12,2540],[18.5,2674],[19.9,3800],[21.5,4000],[24,4300]],
			}	*/
		});
	//第三个
	var chart3 = new Highcharts.Chart({
		// Highcharts 配置
		chart : {
			renderTo : "tab3_container1" ,
				width: $("#tabContainer").width(),
				height :$(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
				backgroundColor: 'transparent',
				type: 'spline',
				style:{
					color: '#fff'
				}
			},
			tooltip: {
				valueDecimals: 2,
				headerFormat: '<span style="font-size:10px">风速：{point.key}m/s</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}： </td>' +'<td style="padding:0"><b>功率：{point.y} kw</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			xAxis: {
				title: {
					text: '风速（m/s）'
				},
				min:0,
				max:25,
				tickInterval: 1,
				tickmarkPlacement: 'on',
				allowDecimals: true
			},
			yAxis: {
				title: {
					text: '功率(kw)'
				},
				//max:5000,
				min:0,
				//tickInterval: 500,
				labels:{
					style:{
						color: '#fff'
					}	
				}
			},
			plotOptions: {
				series: {
					marker: {
						enabled: false
					}
				},
			},
			series: [/*{
				name: 'A01',
				data: [[1.8,800],[8.4,1200],[12,2645],[15.6,1800],[18.5,2356],[19.9,3642],[21.5,4000],[25,4500]]
			}, {
				name: 'A02',
				data: [[1.9,900],[9.4,1400],[10.6,1800],[12,2540],[18.5,2674],[19.9,3800],[21.5,4000],[24,4300]]					
			}*/]
	});
	//第四个
	var chart4 = new Highcharts.Chart({
		// Highcharts 配置
		chart : {
			renderTo : "tab4_container1" ,
				width: $("#tabContainer").width(),
				height :1000,
				backgroundColor: 'transparent',
				type: 'bar'
				//inverted:true
			},
		legend:{
			enabled:false
		},
		xAxis: {
			categories:['A01','A08','A19','A12','A30','A15','A21','A18','A10','A23','A32','A17','A31','A16','A07','A22','A29','A27']/*initCategories()*/
		},
		yAxis: {
			min: 0,
			max:100,
			tickInterval: 10,
			title: {
				text: ''
			},
			gridLineWidth:0,
			tickWidth:0,
			lineWidth:0,
			labels: {
				enabled: false
			}
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">风机：{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} 分</b></td></tr>',
			footerFormat: '</table>',
			shared: true,
			useHTML: true
		},
		plotOptions: {
			bar: {
				stacking:'normal',
				pointWidth:15,	
				//pointPadding: 100,
				borderWidth: 0,
				threshold:60,
				negativeColor: '#DF5353',
				dataLabels: {
					enabled: true,
					//rotation: -90,
					color: '#FFFFFF',
					align: 'right',
					//format: '{point.y:.1f}', // one decimal
					//y: 10, // 10 pixels down from the top
					style: {
						fontSize: '11px',
						fontFamily: 'Verdana, sans-serif',
						textshadow:'none'
					}
				}
			},
            series: {
                animation: false
            }
		},
		series: [
		/* {
			name: '评分',
			data: [20, 40, 64, 75,87, 100,93, 100, 50, 10, 80, 10,91, 100,64,18,80,16,60,12, 80, 13,94, 100, 60, 10, 80, 10,90,10,90, 100, 60,10, 80, 10,96],
		}*/]
	});
	//第五个
	var chart5 = new Highcharts.Chart({
		// Highcharts 配置
		chart : {
			renderTo : "tab5_container1" ,
			width: $("#tabContainer").width(),
			height :$(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
			backgroundColor: 'transparent',
			type: 'column',
			style:{
				color: '#fff'
			}
		},
		subtitle: {
			//text: 'Source: WorldClimate.com'
		},
		legend:{
			enabled:false
		},
		xAxis: {
			title: {
				text: '日期'
			},
			//min:1,
			//max:31,
			//tickInterval: 1,
			categories:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
		},
		yAxis: {
			title: {
				text: '电量(mw·h)'
			},
			//max:5000,
			min:0,
			//tickInterval: 500
		},
		tooltip: {
			formatter: function() {
			/*	var s;
				if (this.point.series.name==seriesNames[2]) { 
					s = ''+ this.x +': '+ this.y +' h';
				}else{
					s = ''+ this.x +': '+ this.y +' MWh';
				}*/
				return "日期："+this.x+"日"+"</br>"+"发电量："+this.y+"mw·h"
			},
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
			data: [424, 332, 345, 397, 526, 755, 574, 604, 476, 391, 468, 511,3452,1234,1211,532]

		}*/]
	});	
//});
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
//遍历所有tab栏，当哪个tab栏有active时，给resizeTab()方法
function resizePage(){
	$.each(tabMap,function(name,tab){
		tabMap[name].resized = false;
		if(tabMap[name].active){
			resizeTab(name);
		}
	});
}
//定义resizeTab()方法，给第一次加载的图表自适应setsize()，
function resizeTab(tab){
	if(!tabMap[tab].resized){
		$.each(tabMap[tab].objMap,function(id,chart){
			if(id.indexOf(tab.replace("#","") + "_container") == 0){
				var width = $("#tabContainer").width() ;
				//var height = $("#tabContainer").height() ;
				var height = $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20;
				var heightOther = 1000;
				if(tab =='#tab4'){
					chart.setSize(width,heightOther);
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
	//initCategories();
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
	tabMap["#tab5"].objMap["tab5_container1"] = chart5;
};
function loadTab(tab){
    if(!tabMap[tab].loaded){
/*        if(tab == "#tab1"){
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
		{name:"散点图",color:"#76ABE9"},
		{name:"实际功率曲线",color:"#B0D363"},
		{name:"出厂功率曲线",color:"#B0D363"}
	];
	//if("tab1"==tab){
		$.getJSON('http://112.25.190.109:7002/eaps/js/json/power_curve_analysis1.json' ,function(data){//先获取数据在循环，这样获取一次数据就可以了，如果先遍历在获取数据就要获取12次
			$.each(seriesParam1,function(i,obj){
				if(i==0){
					tabMap["#tab1"].objMap["tab1_container1"].addSeries({
						data:data[0],
						type:'scatter',
						zoomType: 'xy' ,
						name:obj.name
					});	
				}else if(i==1){
					tabMap["#tab1"].objMap["tab1_container1"].addSeries({
						marker: {
							enabled: false
						},
						lineWidth:3,
						data:data[1],
						name:obj.name
					});	
				}else{
					tabMap["#tab1"].objMap["tab1_container1"].addSeries({
						marker: {
							enabled: false
						},
						lineWidth:3,
						data:data[2],
						name:obj.name
					});	
				}
			});
     	});
	//}
}
function initseriesParam2(){
	var seriesParam2 = [];
    //categories = [];
    for (var i =1; i <= 12; i++) {
        seriesParam2.push(i+'月');
    }
    //tabMap["#tab4"].objMap.categories = categories;
	return seriesParam2
}

function loadTab2(){
	var seriesParam2 =initseriesParam2();/* [
		{name:"1月"},
		{name:"2月"},
		{name:"3月"},
		{name:"4月"},
		{name:"5月"},
		{name:"6月"},
		{name:"7月"},
		{name:"8月"},
		{name:"9月"},
		{name:"10月"},
		{name:"11月"},
		{name:"12月"}
	];*/
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/power_curve_analysis2.json' ,function(data){
		$.each(seriesParam2,function(i,obj){
			tabMap["#tab2"].objMap["tab2_container1"].addSeries({
				data:data[i],
				name:obj
			});	
		});
	});
}

function loadTab3(){
	var seriesParam3 = [
		{name:"A01",color:"#76ABE9"},
		{name:"A02",color:"#B0D363"},
	];
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/power_curve_analysis3.json' ,function(data){
		$.each(seriesParam3,function(i,obj){
			tabMap["#tab3"].objMap["tab3_container1"].addSeries({
				data:data[i],
				name:obj.name
			});	
		});
	});
}
/*function initCategories(){
	var categories = [];
    //categories = [];
    for (var i =1; i <= 100; i++) {
        categories.push('A'+i);
    }
    //tabMap["#tab4"].objMap.categories = categories;
	return categories
}*/
/*function getCategoriesNum(){
	var num = 0;
	var categories = [];
	while (num<=30)
	{
		categories.push('A'+num);
		num+=1;
	}
	return categories;
}*/
/*function queryChart(){
	var url = "http://112.25.190.109:7002/eaps/js/json/power_curve_analysis4.json";
	$.getJSON(url,function(data) {
		turbineArr = [];
		turbineArr = data.turbineList;
		chart.series[0].setData(data.dataList,false);
		chart.xAxis[0].setCategories(data.labelList);
	});
	return false;
}*/

function loadTab4(){
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/power_curve_analysis4.json' ,function(data){
			tabMap["#tab4"].objMap["tab4_container1"].addSeries({
				//categories:data[0],
				data:data,
				name:"评分"
			});	
	});
}

function loadTab5(){
	$.getJSON('http://112.25.190.109:7002/eaps/js/json/power_curve_analysis5.json' ,function(data){
		//$.each(seriesParam5,function(i,obj){
			tabMap["#tab5"].objMap["tab5_container1"].addSeries({
				data:data,
				name:"功率"
			});	
		//});
	});
}

	
//切换风机单选多选样式
$('.y_tab_li').click(function(e) {
	//$('#y_choose_windmill_btn').click(function(e) {
		//$('#y_windmill_list_one').hide();
		$('#y_choose_windmills_btn').hide();
		$('#y_choose_windmill_btn').show();
	//});
});
$('#y_tab_li3').click(function(e) {
	//$('#y_choose_windmill_btn').click(function(e) {
		//$('#y_windmill_list_two').hide();
		$('#y_choose_windmill_btn').hide();
		$('#y_choose_windmills_btn').show();
	//});
});
//功率曲线逐月对比----没有月份点击样式
$('#y_tab_li2').click(function(e) {
	$('#y_month').hide();
});
$('#y_tab_li2').siblings('li').click(function(e) {
	$('#y_month').show();
});
//风机评分页面----没有选择风机
$('#y_tab_li4').click(function(e) {
	$('.y_select ul li').eq(0).hide();
});
$('#y_tab_li1,#y_tab_li2,#y_tab_li3,#y_tab_li5').click(function(e) {
	$('.y_select ul li').eq(0).show();
});


$('.y_btn_bg').on('click', function() {
    $('form').on('submit', function() {
        var title = $('inpur[name=title]').val(),
            content = $('textarea').val();

        $(this).ajaxSubmit({
            type: 'post', // 提交方式 get/post
            url: 'http://112.25.190.109:7002/eaps/js/a.htm?a=1&b=2', // 需要提交的 url
            data: {
                'title': title,
                'content': content
            },
            success: function(data) { // data 保存提交后返回的数据，一般为 json 数据
                // 此处可对 data 作相关处理
                alert('提交成功！');
            },
            //$(this).resetForm()// 提交后重置表单
        });
        return false; // 阻止表单自动提交事件
    });
});