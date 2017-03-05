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
    yAxis: {
        min:0,
        max:25,
        tickInterval:5,
        title:{
            text:'风速(m/s)'
        },
        opposite:false
    },
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
var chart2 = new Highcharts.Chart({
            chart : {
                renderTo : 'tab2_container1',
                polar: true,
                height:$('#tabContainer').height()/2,
                type:'column'
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


var chart22 = new Highcharts.Chart({
    chart : {
                renderTo : 'tab2_container2',
                polar: true,
                type:'column'
            },
            title : {
                text : ''
            },
            xAxis : {
                tickmarkPlacement: 'between',
                categories:['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
                gridLineColor: '#fff',
                gridLineWidth: 1
            },
            yAxis: {
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
//第三个
var chart3 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab3_container1',
        type: 'spline',
        width:$("#tabContainer").width(),
        height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20

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
    yAxis: {
        opposite:false,
        title:{
            text:'温度(℃)'
        }
        //categories: ['0','5','10','15','20','25','30'],
    },
    series : [],
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
        enabled : false,
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
    yAxis: {
        title:{
            text:'湿度(%)'
        },
        opposite:false
    },
    series : [],
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
        enabled : false,
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
    yAxis: {
        title:{
            text:'气压(hPa)'
        },
        opposite:false
    },
    series : [],
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
        enabled : false,
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
        resizePage();
    }, 500);
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
                var width0=$("#tabContainer0").width();
                var height = $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20;
                if(tab=='#tab1'||tab=='#tab3'||tab=='#tab4'||tab=='#tab5'){
                    chart.setSize(width,height);
                }else if(tab=='#tab6'||tab=='#tab8'||tab=='#tab9'||tab=='#tab0'){
                    chart.setSize(width0,height);
                }else if(tab=='#tab2'){
                    chart.setSize(width/2,height);
                }else if(tab=='#tab7'){
                    chart.setSize(width0,height);
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
        }, 500);
        loadTab(e.target.hash);
    });
    initChart();
    
}


function  initChart(){
    tabMap["#tab1"].objMap["tab1_container1"] = chart1;
    tabMap["#tab2"].objMap["tab2_container1"] = chart2;
    tabMap["#tab2"].objMap["tab2_container2"] = chart22;
    tabMap["#tab3"].objMap["tab3_container1"] = chart3;
    tabMap["#tab4"].objMap["tab4_container1"] = chart4;
    tabMap["#tab5"].objMap["tab5_container1"] = chart5;
    tabMap["#tab6"].objMap["tab6_container1"] = chart6;
    tabMap["#tab7"].objMap["tab7_container1"] = chart7;
    //tabMap["#tab7"].objMap["tab7_container2"] = chart72;
    tabMap["#tab8"].objMap["tab8_container1"] = chart8;
    tabMap["#tab9"].objMap["tab9_container1"] = chart9;
    tabMap["#tab0"].objMap["tab0_container1"] = chart0;
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
        }/*else if(tab == "#tab6"){
            loadTab6();
        }*/else if(tab == "#tab7"){
            loadTab7();
        }else if(tab == "#tab8"){
            loadTab8();
        }else if(tab == "#tab9"){
            loadTab9();
        }else if(tab == "#tab0"){
            loadTab0();
        }
        tabMap[tab].loaded = true;
    }
}


function loadTab1(){
    var seriesParam1 = [
        {name:"10米",color:"#76ABE9"},
        {name:"30米",color:"#B0D363"},
        {name:"50米",color:"#76ABE9"},
        {name:"70米",color:"#B0D363"},
        {name:"100米",color:"#76ABE9"}
    ];
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_1.json' ,function(data){
    	$.each(seriesParam1,function(i,obj){
            tabMap["#tab1"].objMap["tab1_container1"].addSeries({
                data:data[i],
                name:obj.name
            }); 
        });
    });
}

function loadTab2(){
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_2.json' ,function(data){
            tabMap["#tab2"].objMap["tab2_container1"].addSeries({
                data:data,
                polar:true,
                name:'风向占比'
            }); 
        });
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_22.json' ,function(data){
            tabMap["#tab2"].objMap["tab2_container2"].addSeries({
                data:data,
                name:'风向占比'
            }); 
        });
}

function loadTab3(){
    
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_3.json' ,function(data){
    	//$.each(seriesParam3,function(i,obj){
            tabMap["#tab3"].objMap["tab3_container1"].addSeries({
                data:data,
                name:"温度 "
            }); 
        //});
    });
}

function loadTab4(){
   
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_4.json' ,function(data){
    	//$.each(seriesParam4,function(i,obj){
            tabMap["#tab4"].objMap["tab4_container1"].addSeries({
                data:data,
                name:"湿度 "
            }); 
        //});
    });
}

function loadTab5(){
    
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_5.json' ,function(data){
	    //$.each(seriesParam5,function(i,obj){
            tabMap["#tab5"].objMap["tab5_container1"].addSeries({
                data:data,
                name:"气压 "
            }); 
        //});
    });
}

function loadTab6(){
    var seriesParam1 = [
        {name:"A01",color:"#76ABE9"},
        {name:"A02",color:"#B0D363"},
    ];
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_6.json' ,function(data){
	    $.each(seriesParam1,function(i,obj){
            tabMap["#tab6"].objMap["tab6_container1"].addSeries({
                data:data[i],
                width : $("#tabContainer0").width(),
                height : $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
                name:obj.name
            }); 
        });
    });
}

// function loadTab7(){
//    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_7.json' ,function(data){
//             tabMap["#tab7"].objMap["tab7_container1"].addSeries({
//                 data:data
//             }); 
//         });
//     $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_72.json' ,function(data){
//             tabMap["#tab7"].objMap["tab7_container2"].addSeries({
//                 data:data,
//             }); 
//         });
// }
function loadTab7(){
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_7.json' ,function(data){
        //$.each(seriesParam3,function(i,obj){
            tabMap["#tab7"].objMap["tab7_container1"].addSeries({
                data:data,
                name:"风向"
            }); 
        //});
    });
}
function loadTab8(){
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_8.json' ,function(data){
    	//$.each(seriesParam3,function(i,obj){
            tabMap["#tab8"].objMap["tab8_container1"].addSeries({
                data:data,
                name:"温度"
            }); 
        //});
    });
}

function loadTab9(){
  
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_9.json' ,function(data){
    
    	//$.each(seriesParam9,function(i,obj){
            tabMap["#tab9"].objMap["tab9_container1"].addSeries({
                data:data,
                name:'功率'
            }); 
       // });
    });
}

function loadTab0(){
    $.getJSON('http://112.25.190.109:7002/eaps/js/json/trend_0.json' ,function(data){
    	//$.each(seriesParam5,function(i,obj){
            tabMap["#tab0"].objMap["tab0_container1"].addSeries({
                data:data,
                name:"气压"
            }); 
        //});
    });
}


//没有选择风机切换样式
$('#y_tab_li1').click(function(e) {
    $('#ysz_millClose').hide();
    $('#ysz_towerChose').show();
    $('#y_tab_div1').show().siblings('#y_tab_div2').hide();   
    $('#y_tab_li1').addClass('orange').siblings('#y_tab_li2').removeClass('orange');
});
var ysza=0;
$('#y_tab_li2').click(function(e) {
    $('#ysz_millClose').show();
    $('#ysz_towerChose').hide();
    $('#y_tab_div2').show().siblings('#y_tab_div1').hide();   
    $('#y_tab_li2').addClass('orange').siblings('#y_tab_li1').removeClass('orange');
    if(ysza==0){
        loadTab6();
        setTimeout(function(){
            resizeTab("#tab6");
        },200
        );
        ysza=1;
    }
});
//曲线三要求切换当前选中样式
$('#y_tab_div2 li,#y_tab_div1 li').click(function(){
    $(this).addClass('y_selected_tab').siblings().removeClass('y_selected_tab')
});






var chart6 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab6_container1',
        type: 'spline',
        width:$("#tabContainer0").width(),
        height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
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
    yAxis: {
        min:0,
        max:25,
        tickInterval:5,
        title:{
            text:'风速(m/s)'
        },
        opposite:false,
    },
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
//第二个
// var chart7 = new Highcharts.Chart({
//             chart : {
//                 renderTo : 'tab7_container1',
//                 type:'spline'
//             },
//             title : {
//                 text : ''
//             },
//             xAxis : {
//                 tickmarkPlacement: 'between',
//                 categories:['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
//                 gridLineColor: '#fff',
//                 gridLineWidth: 1
//             },
//             yAxis: {
//                 min: 0,
//                 endOnTick: false,
//                 showLastLabel: true,
//                 labels: {
//                     formatter: function () {
//                         return this.value;
//                     }
//                 }
//             },
//             plotOptions: {
//                 series: {
//                     stacking: 'normal',
//                     shadow: false,
//                     groupPadding: 0,
//                     pointPlacement: 'on'
//                 }
//             },
//             tooltip: {
//                 valueDecimals: 2,
//                 valueSuffix: '',
//                 followPointer: true
//             },
//             legend:{
//                 enabled:false
//             },
//             exporting:{
//                 enabled : false
//             }
//         });
var chart7 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab7_container1',
        type: 'spline',
        width:$("#tabContainer0").width(),
        height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,

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
    yAxis: {
        opposite:false,
        title:{
            text:'偏航角度(°)'
        },
        //categories: ['0','5','10','15','20','25','30'],
    },
    tooltip: {
        dateTimeLabelFormats:function() {
            return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
        },
        // formatter:function(){
        //     return "功率:"+this.y
        // },
        useHTML: true,
        type: 'datetime', 
        valueDecimals: 2,
        borderColor:'gray',
        borderWidth: 1
    },
    legend:{
        enabled : false,
        verticalAlign:'bottom',
        borderWidth:0,
    },
    exporting:{
        enabled : false
    }
});
// var chart72 = new Highcharts.Chart({
//     chart : {
//                 renderTo : 'tab7_container2',
//                 polar: true,
//                 type:'column'
//             },
//             title : {
//                 text : ''
//             },
//             xAxis : {
//                 tickmarkPlacement: 'between',
//                 categories:['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
//                 gridLineColor: '#fff',
//                 gridLineWidth: 1
//             },
//             yAxis: {
//                 min: 0,
//                 endOnTick: false,
//                 showLastLabel: true,
//                 labels: {
//                     formatter: function () {
//                         return this.value;
//                     }
//                 }
//             },
//             plotOptions: {
//                 series: {
//                     stacking: 'normal',
//                     shadow: false,
//                     groupPadding: 0,
//                     pointPlacement: 'on'
//                 }
//             },
//             tooltip: {
//                 valueDecimals: 2,
//                 valueSuffix: '',
//                 followPointer: true
//             },
//             legend:{
//                 enabled:false
//             },
//             exporting:{
//                 enabled : false
//             }
//         });
//第三个
var chart8 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab8_container1',
        type: 'spline',
        width:$("#tabContainer0").width(),
        height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,

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
    yAxis: {
        opposite:false,
        title:{
            text:'温度(℃)'
        },
        //categories: ['0','5','10','15','20','25','30'],
    },
    tooltip: {
        dateTimeLabelFormats:function() {
            return Highcharts.dateFormat('%Y-%m-%d %H:%M:%S')
        },
        // formatter:function(){
        //     return "功率:"+this.y
        // },
        useHTML: true,
        type: 'datetime', 
        valueDecimals: 2,
        borderColor:'gray',
        borderWidth: 1
    },
    legend:{
        enabled : false,
        verticalAlign:'bottom',
        borderWidth:0,
    },
    exporting:{
        enabled : false
    }
});
//第四个
var chart9 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab9_container1',
        type: 'spline',
        width:$("#tabContainer0").width(),
        height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
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
    yAxis: {
        title:{
            text:'功率(MW)'
        },
        opposite:false,
    },
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
        enabled : false,
        verticalAlign:'bottom',
        borderWidth:0,
    },
    exporting:{
        enabled : false
    }
});
var chart0 = new Highcharts.StockChart({
    chart : {
        renderTo : 'tab0_container1',
        type: 'spline',
        width:$("#tabContainer0").width(),
        height: $(document.body).height()-$('.media').height()-$('.tile').height()-$('.y_tab_ul').height()-20,
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
    yAxis: {
        title:{
            text:'气压(shPa)'
        },
        opposite:false,
    },
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
        enabled : false,
        verticalAlign:'bottom',
        borderWidth:0,
    },
    exporting:{
        enabled : false
    }
});
