$(function(){
     if(init) init();    
   }); 
    
     var  charts1 = new Highcharts.Chart({
		chart : {
			renderTo : "tab1_container1" ,
			backgroundColor: 'transparent',
			type:'column',
            width: $("#tabContainer").width(),
            height :$(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20,
        },
         credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        xAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            categories: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ]
        },
        yAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            min: 0,
            title: {
                text: '电量 (mw·h)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mw·h</b></td></tr>',
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
        series: []
    });
   

var charts2 = new Highcharts.Chart({
		chart : {
			renderTo : "tab2_container1" ,
            type: 'bar',
            width: $("#tabContainer").width(),
            height :$(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20,
            backgroundColor:'transparent'
        },
         credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">得分: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 分</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        xAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
             categories: ['K09', 'B02', 'C03', 'D07', 'A05','A08', 'C02', 'Z03', 'E07', 'J05','C08', 'C06', 'Z01', 'F07', 'G05','H08']
        },
        yAxis: {
        	    min:0,
            	max:100,
            	tickInterval: 5,
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            min: 0,
             title: {
                 text: ''
             },
             gridLineWidth:0,
                        tickWidth:0,
                        labels: {
                            enabled: false
                        },
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                animation: false
            },
            bar: {
                stacking:'normal',
                pointPadding: 0.2,
                borderWidth: 0,
                pointWidth: 15,
                threshold:60,
                negativeColor: '#DF5353',
                dataLabels: {
                  enabled: true,
                  color: '#FFFFFF',
                  align: 'right',
                  format: '{point.y:.1f}', 
                  style: {
                    fontSize: '11px',
                    fontFamily: 'Verdana, sans-serif',
                    textshadow:'none'
                        }
                }
            }
        },
            series: []
    });

  var charts3 = new Highcharts.Chart({
		chart : {
			renderTo : "tab3_container1" ,
            type: 'column',
            width: $("#tabContainer").width(),
            height :$(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20,
            backgroundColor:'transparent'
        },
         credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        xAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            categories: [
               '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ]
        },
        yAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            min: 0,
            title: {
                text: '电量 (mw·h)'
            }
        },
       tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mw·h</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
    });

    
    var charts5 = new Highcharts.Chart({
		chart : {
			renderTo : "tab5_container1" ,
            type: 'bar',
            width: $("#tabContainer").width(),
            height :$(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20,
            backgroundColor:'transparent'
        },
          credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['K09', 'B02', 'C03', 'D07', 'A05','A08', 'C02', 'Z03', 'E07', 'J05','C08', 'C06', 'Z01']
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: ''
            },
            gridLineWidth:0,
            tickWidth:0,
            labels: {
                enabled: false
            },
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        }
    });


    var charts6 = new Highcharts.Chart({
		chart : {
			renderTo : "tab6_container1" ,
            type: 'column',
            width: $("#tabContainer").width(),
            height :$(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20,
            backgroundColor:'transparent'
        },
         credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        xAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            categories:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        },
        yAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            min: 0,
            title: {
                text: '电量 (mw·h)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}日</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mw·h</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
         }
    });


    
    var charts7 = new Highcharts.Chart({
		chart : {
			renderTo : "tab7_container1" ,
            type: 'column',
            width: $("#tabContainer").width(),
            height :$(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20,
            backgroundColor:'transparent'
        },
         credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        xAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            categories:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'] 
           
        },
        yAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            min: 0,
            title: {
                text: '电量 (mw·h)'
            }
        },
       tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}日</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mw·h</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
    });


 

    
     var charts41 = new Highcharts.Chart({
		chart : {
			renderTo : "tab4_container1" ,
            type: 'column',
            backgroundColor:'transparent'
        },
         credits: {
          enabled:false
       },
        exporting: {
            enabled:false
       },
        title: {
            text: ''
        },
        xAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            categories:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
           
        },
        yAxis: {
        	labels:{
               style:{
               	 color:'#fff'
               }
        	},
            min: 0,
            title: {
                text: '电量 (mw·h)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}日</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mw·h</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
    });

   
	var charts42 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab4_container2',
        type: 'spline'
    },
    rangeSelector: {
        enabled:false
    },
    navigator : {
        enabled : true
    },
    scrollbar:{
        enabled : true
    },
    xAxis: [{
        minRange: 1 * 3600 * 1000, // 1 hour
        ordinal:false,
        type: 'datetime', 
        labels: { 
            formatter: function() {
            var vDate=new Date(this.value);
            return (vDate.getMonth()+1)+"-"+vDate.getDate();
            }
        }
    }],
      yAxis: [{ // Primary yAxis  
                    title: {  
                        text: '风速 (m/s) ',  
                        style: {  
                            color: '#fff'  
                        }  
                    },
                    min:0,
                    max:20,
                    tickColor: '#fff',
                    tickWidth: 1,  
                    labels: {  
                        format: '{value} m/s',//格式化Y轴刻度  
                        style: {  
                            color: '#fff'  
                        }  
                    }  
                    ,  
                    opposite: false  
                }, { // Secondary yAxis  
                    title: {  
                        text: '功率 (mw·h)',  
                        style: {  
                            color: '#fff'  
                        }  
                    },  
                    min:0,
                    max:2,
                    labels: {  
                        format: '{value}mw·h',  
                        style: {  
                            color: '#fff'  
                        },
                        align: 'right',
                        x: 0,
                        y: -10  
                    },  
                      tickColor: '#fff',
                      tickWidth: 1,
                      opposite:true
                }],  
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
        borderWidth:0,
    },
    exporting:{
        enabled : false
    }
});
    
    

//     function getCategories(regionTypeID){
//     var categories = [];
//     switch (regionTypeID){
//     case 12:
//         categories = ['N', 'NE', 'EN', 'E', 'ES', 'SE', 'S', 'SW', 'SW', 'W', 'WN', 'NW'];
//         break;
//     case 16:
//         categories = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
//         break;
//     case 360:
//         for(var i = 0;i<360;i++){
//             categories[i] = i+"°";
//         }
//         break;
//     }
//     return categories;
// }


var charts43 = new Highcharts.Chart({
            chart : {
                renderTo : 'tab4_container3',
                width: $("#tabContainer").width()/2,
                polar: true
            },
            title : {
                text : ''
            },
            xAxis : {lineWidth:2,
                tickmarkPlacement: 'between',
                //categories:getCategories(16),
                gridLineColor: '#ccc',
                gridLineWidth: 1,
                categories : ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
            },
            yAxis: {
            	lineWidth:2,
                min: 0,

                endOnTick: false,
                showLastLabel: true,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            },
            tooltip: {
                valueDecimals: 2,
                valueSuffix: '',
                followPointer: true
            },
            legend:{
                enabled:false
            },
            exporting:{
                enabled : false
            }
        });

var charts44 = new Highcharts.Chart({
            chart : {
                renderTo : 'tab4_container4',
                width: $("#tabContainer").width()/2,
                polar: true
            },
            title : {
                text : ''
            },
            xAxis : {lineWidth:2,
                tickmarkPlacement: 'between',
                //categories:getCategories(16),
                gridLineColor: '#ccc',
                gridLineWidth: 1,
                categories : ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
            },
            yAxis: {
                lineWidth:2,
                min: 0,

                endOnTick: false,
                showLastLabel: true,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            },
            tooltip: {
                valueDecimals: 2,
                valueSuffix: '',
                followPointer: true
            },
            legend:{
                enabled:false
            },
            exporting:{
                enabled : false
            }
        });

       
  
//init函数在页面加载完后将会被index主框架自动调用，初始化代码请放在这里。
var tabMap = {};

function init(){
	initTabs();
	attachPageEvents();
	$('#y_month').hide();
    //initData("tab1");
    setTimeout(function () { 
       resizePage();
    }, 1000);
    loadTab1();
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
                var width0 = $("#tabContainer").width() ;
				var height = $(document.body).height()-$('header.media').height()-$('.tile').height()-$('table td.y_tab_li').height()-20;
				if(tab=='#tab4'){
                    if(id=="tab4_container1"||id=="tab4_container2"){
                        chart.setSize(width);
                    }else if(id=="tab4_container3"||id=="tab4_container4"){
					    chart.setSize(width/2);
                    }
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
	tabMap["#tab1"].objMap["tab1_container1"] = charts1;
	tabMap["#tab2"].objMap["tab2_container1"] = charts2;
	tabMap["#tab3"].objMap["tab3_container1"] = charts3;
	tabMap["#tab5"].objMap["tab5_container1"] = charts5;
	tabMap["#tab6"].objMap["tab6_container1"] = charts6;
	tabMap["#tab7"].objMap["tab7_container1"] = charts7;
	tabMap["#tab4"].objMap["tab4_container1"] = charts41;
	tabMap["#tab4"].objMap["tab4_container2"] = charts42;
	tabMap["#tab4"].objMap["tab4_container3"] = charts43;
    tabMap["#tab4"].objMap["tab4_container4"] = charts44;
};


function loadTab(tab){
    if(!tabMap[tab].loaded){
        /*if(tab == "#tab1"){
            loadTab1();
        }else */if(tab == "#tab2"){
            $("#changPic").src="../img/health.jpg";
            // loadTab3();
        }else if(tab == "#tab3"){
            loadTab3();
        }else if(tab == "#tab4"){
            loadTab4();
        }else if(tab == "#tab5"){
            loadTab5();
        }else if(tab == "#tab6"){
            loadTab6();
        }else if(tab == "#tab7"){
            loadTab7();
        }
        tabMap[tab].loaded = true;
    }
}


function loadTab1(){
    var seriesParam1 = [
        {name:"实际发电量",color:"#B0D363"},
        {name:"满分发电量",color:"#B0D363"}
    ];
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_1.json' ,function(data){
        $.each(seriesParam1,function(i,obj){
        
            tabMap["#tab1"].objMap["tab1_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    });
 
}


//  var categories = [];
// function initCategories(){
//     categories = [];
//     for (var i =0; i <= 10; i++) {
//         categories.push('A'+i);
//     }
//     tabMap["#tab2"].objMap.categories = categories;
//     return categories
// }
function loadTab2(){
   
     $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_2.json' ,function(data){
         // $.each(data,function(i,obj){
       
            tabMap["#tab2"].objMap["tab2_container1"].addSeries({
                //categories:data[i][0],
                data:data
               
            }); 
        //});
    });
}

function loadTab3(){
    var seriesParam3 = [
        {name:"A01",color:"#76ABE9"},
        {name:"A02",color:"#B0D363"},
        {name:"A03",color:"#76ABE9"},
        {name:"A04",color:"#B0D363"},
    ];
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_3.json' ,function(data){
        $.each(seriesParam3,function(i,obj){
            tabMap["#tab3"].objMap["tab3_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    });
}

function loadTab5(){
    var seriesParam5 = [
        {name:"限电损失",color:"#76ABE9"},
        {name:"可靠性损失",color:"#76ABE9"},
        {name:"实际发电量",color:"#76ABE9"}
    ];
     $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_5.json' ,function(data){
        $.each(seriesParam5,function(i,obj){
       
            tabMap["#tab5"].objMap["tab5_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    });
}

function loadTab6(){
    var seriesParam6 = [
        {name:"实际发电量",color:"#76ABE9"},
        {name:"满分发电量",color:"#76ABE9"}
    ];
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_6.json' ,function(data){
        $.each(seriesParam6,function(i,obj){
        
            tabMap["#tab6"].objMap["tab6_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    });
}

function loadTab7(){
    var seriesParam7 = [
        {name:"A01",color:"#76ABE9"},
        {name:"A02",color:"#B0D363"},
        {name:"A03",color:"#76ABE9"},
        {name:"A04",color:"#B0D363"}
    ];
    $.each(seriesParam7,function(i,obj){
        $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_7.json' ,function(data){
            tabMap["#tab7"].objMap["tab7_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    });
}

function loadTab4(){
    var seriesParam41 = [
        {name:"实际发电量",color:"#76ABE9"},
        {name:"满分发电量",color:"#76ABE9"}
    ];
    var seriesParam42 = [
        {name:"风速",color:"#76ABE9"},
        {name:"功率",color:"#76ABE9"}
    ];
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_41.json' ,function(data){
         $.each(seriesParam41,function(i,obj){
        
            tabMap["#tab4"].objMap["tab4_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    }); 
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_42.json' ,function(data){
        $.each(seriesParam42,function(i,obj){
        
            tabMap["#tab4"].objMap["tab4_container2"].addSeries({
                data:data[i],
                yAxis: i,
                name:obj.name
            }); 
        });
    });
// $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_42.json' ,function(data){//先获取数据在循环，这样获取一次数据就可以了，如果先遍历在获取数据就要获取12次
//             $.each(seriesParam42,function(i,obj){
//                 if(i==0){
//                     tabMap["#tab4"].objMap["tab4_container2"].addSeries({
//                         data:data[0],
//                         name:obj.name
//                     }); 
//                 }else if(i==1){
//                     tabMap["#tab4"].objMap["tab4_container2"].addSeries({
//                         marker: {
//                             enabled: false
//                         },
//                         data:data[1],
//                         name:obj.name
//                     }); 
//                 }
//             });
//         });

    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_43.json' ,function(data){
            tabMap["#tab4"].objMap["tab4_container3"].addSeries({
                type:'column',
                data:data,
                pointPlacement: 'on',
                name:'风向占比'
            }); 
        });
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/evaluate_44.json' ,function(data){
            tabMap["#tab4"].objMap["tab4_container4"].addSeries({
                type:'column',
                data:data,
                pointPlacement: 'on',
                name:'风向占比'
            }); 
        });
}




$("#y_all_content table td.y_tab_li").delegate("a","click",function(){ 
   $(this).parent().addClass('active');
   $(this).parent().siblings().removeClass('active');
   if($(this).attr('href')=='#tab1'||$(this).attr('href')=='#tab3'){
    	$('#y_month').hide();
        $('#y_choose_windmill_btn').val('选择风机');
   }else{
   	    $('#y_month').show();
   }
   
   if($(this).attr('href')=='#tab7'||$(this).attr('href')=='#tab3'){
      $('#y_choose_windmill_btn').click(function(){
        $('#y_windmill_list_two').hide();
        $('#y_windmill_list_one').show();
        $('#y_choose_windmill_btn').val('选择风机');
      });
   }else{
      $('#y_choose_windmill_btn').click(function(){
        $('#y_windmill_list_one').hide();
        $('#y_windmill_list_two').show();
      });
   }
   if($(this).attr('href')=='#tab2'||$(this).attr('href')=='#tab5'){
         $('#y_choose_windmill_btn').hide();
   }else{
         $('#y_choose_windmill_btn').show();
   }
});


