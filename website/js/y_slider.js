// JavaScript Documentvar gwwsMap;
var weatherLayer;

$(function(){
	init1();
});

function init1(){
	initTimeAxis();
	attachPageEvent();
}

function attachPageEvent(){
	$("#preTime").bind("click",showPreTime);
	$("#nextTime").bind("click",showNextTime);
	//$(this).bind("resize",resizePage);
}

function resizePage(){
	//var width = document.documentElement.clientWidth - 150;
	$('#timeAxis').slider('resize',{width:width});
}

function initTimeAxis(){

	// util.js
Date.parseString = function(dateString,formatter){
	var today = new Date();
	if (!dateString || dateString == "") {
		return today;
	}
	if (!formatter || formatter == "") {
		formatter = "yyyy-MM-dd";
	}	
	var yearMarker = formatter.replace(/[^y|Y]/g,'');
	var monthMarker = formatter.replace(/[^M]/g,'');	
	var dayMarker = formatter.replace(/[^d]/g,'');
	var hourMarker = formatter.replace(/[^h|H]/g,'');
	var minuteMarker = formatter.replace(/[^m]/g,'');
	var secondMarker = formatter.replace(/[^s|S]/g,'');
	
	var year = 1900;
	if (yearMarker.length > 1) {
		var yearPosition = formatter.indexOf(yearMarker);
		var yearLength = yearMarker.length;
		year =	dateString.substring(yearPosition ,yearPosition + yearLength) * 1;
		if( yearLength == 2){
			if(year < 50 ){
		year += 2000;
		}
		else{
		year += 1900;
		}
	}
	}
	var month = 0;
	if (monthMarker.length > 1) {
		var monthPosition = formatter.indexOf(monthMarker);
		month = dateString.substring(monthPosition,monthPosition + monthMarker.length) * 1 - 1;
	}
	var day = 1;
	if (dayMarker.length > 1) {
		var dayPosition = formatter.indexOf(dayMarker);
		day = dateString.substring( dayPosition,dayPosition + dayMarker.length )* 1;
	}
	var hour = 0;
	if (hourMarker.length > 1) {
		var hourPosition = formatter.indexOf(hourMarker);
		hour = dateString.substring( hourPosition,hourPosition + hourMarker.length )* 1;
	}
	var minute = 0;
	if (minuteMarker.length > 1) {
		var minutePosition = formatter.indexOf(minuteMarker);
		minute = dateString.substring( minutePosition,minutePosition + minuteMarker.length )* 1;
	}
	var second = 0;
	if (secondMarker.length > 1) {
		var secondPosition = formatter.indexOf(secondMarker);
		second = dateString.substring( secondPosition,secondPosition + secondMarker.length )* 1;
	}
	var date = new Date(year,month,day,hour,minute,second);
	if(isNaN(date)) date = today;
	return date;
};

Date.prototype.format = function(formatter){
	if(!formatter || formatter == ""){
	formatter = "yyyy-MM-dd";
	};
	var year = this.getYear() < 2000 ? ( 1900 + this.getYear() ) : this.getYear();
	var month = (this.getMonth() + 1).toString();
	var day = this.getDate().toString();
	var hour = this.getHours().toString();
	var minute = this.getMinutes().toString();
	var second = this.getSeconds().toString();
	var yearMarker = formatter.replace(/[^y|Y]/g,'');
	if(yearMarker.length > 1){
		if (yearMarker.length == 2) {
			year = year.substring(2, 4);
		}	
	};
	var monthMarker = formatter.replace(/[^M]/g,'');
	if (monthMarker.length > 1) {
		if (month.length == 1) {
			month = "0" + month;
		}
	}	
	var dayMarker = formatter.replace(/[^d]/g,'');
	if (dayMarker.length > 1) {
		if (day.length == 1) {
			day = "0" + day;
		}
	}	
	var hourMarker = formatter.replace(/[^h|H]/g,'');
	if (hourMarker.length > 1) {
		if (hour.length == 1) {
			hour = "0" + hour;
		}
	}
	var minuteMarker = formatter.replace(/[^m]/g,'');
	if (minuteMarker.length > 1) {
		if (minute.length == 1) {
			minute = "0" + minute;
		}
	}
	var secondMarker = formatter.replace(/[^s|S]/g,'');
	if (secondMarker.length > 1) {
		if (second.length == 1) {
			second = "0" + second;
		}
	};
	return formatter.replace(yearMarker?yearMarker:"!",year).replace(monthMarker?monthMarker:"!",month).replace(dayMarker?dayMarker:"!",day).replace(hourMarker?hourMarker:"!",hour).replace(minuteMarker?minuteMarker:"!",minute).replace(secondMarker?secondMarker:"!",second);	
};

	//const.js里截取的
	var gPageSize = 20;
	var gData1MinPageSize = 60;
	var gData5MinPageSize = 72;
	var gData15MinPageSize = 48;
	var gMaxPredictionCurverCount = 5;
	var gMaxHistoryCurverCount = 5;
	var gBaseDate = "2013-07-20";

	var width = document.documentElement.clientWidth - 350;
	var rule = [];
	var startTime = Date.parseString($("#startDate").val(),"yyyy-MM-dd");
	for (var i = 0; i <= 24*(parseInt($("#shortPredictionDayCount").val()) + 1); i++) {
		var time = new Date();
		time.setTime(startTime.valueOf() + 3600*1000*i);
		if(i % 24 == 0){
			rule.push(time.format("M月d日"));
		}else if(i % 8 == 0){
			rule.push(time.format("hh时"));
		}else if(i % 2 == 0){
			rule.push("|");
		}
	}
	var curValue = Math.floor(((gBaseDate?Date.parseString(gBaseDate+(new Date()).format(" hh:00:00"),'yyyy-MM-dd hh:00:00'):new Date()).getTime() - startTime)/(3600*1000));
	$('#timeAxis').slider({
		showTip:true,
		width:width,
		min:0,max:24*(parseInt($("#shortPredictionDayCount").val()) + 1),step:1,
		value:curValue,
		rule: rule,
        tipFormatter: function(value){  
        	var time = new Date();
			time.setTime(startTime.valueOf() + 3600*1000*value);
			return time.format("yyyy-MM-dd hh时");
        },  
        onChange: function(newValue,oldValue){
        	if(newValue != oldValue) {
        		var time = new Date();
				time.setTime(startTime.valueOf() + 3600*1000*newValue);
				//gwwsMap.updateForecastWeatherLayerFilter(weatherLayer,time.format("yyyy-MM-dd hh:00:00"));
				//gwwsMap.updateWarningLayerFilter(warningLayer,time.format("yyyy-MM-dd hh:00:00"));
        	}
        }
	});
}

function showPreTime(){
	var value = $('#timeAxis').slider('getValue') - 1;
	if(value < 0) return;
	$('#timeAxis').slider('setValue',value);
}

function showNextTime(){
	var value = $('#timeAxis').slider('getValue') + 1;
	if(value > 24*(parseInt($("#shortPredictionDayCount").val()) + 1)) return;
	$('#timeAxis').slider('setValue',value);
}

/*function initMap(){
	var mapConfigOptions = {
		containerID:"map",
		showScaleLine:false
	};
	gwwsMap = new GwwsMap();
	gwwsMap.init(mapConfigOptions);
	var gridLayerConfigOptions = {
		type : "database",
		dataUrl:$("#baseUrl").val() + "weather/gis/getGridInfo.htm",
		iconBaseUrl:$("#baseUrl").val() + "styles/images/icon/",
		selectable:false,
		queryable:false
	};
  	gwwsMap.loadGridLayers(gridLayerConfigOptions);
  	
  	var initTime = gBaseDate?Date.parseString(gBaseDate):new Date();;
  	initTime.setHours(initTime.getHours());
  	var weatherLayerConfig = {
		name:"气象预报",
		dataUrl:$("#baseUrl").val() + "weather/gis/getWeatherForecastInfo.htm",
		iconBaseUrl:$("#baseUrl").val() + "styles/images/icon/",
		initTime:initTime.format("yyyy-MM-dd hh:00:00")
	};
  	weatherLayer = gwwsMap.loadForecastWeatherLayer(weatherLayerConfig);
  	
  	var warningLayerConfig = {
		name:"灾害预警",
		dataUrl:$("#baseUrl").val() + "weather/gis/getWeatherWarningInfo.htm",//
		iconBaseUrl:$("#baseUrl").val() + "styles/images/icon/",
		initTime:initTime.format("yyyy-MM-dd hh:00:00")
	};
  	warningLayer = gwwsMap.loadWarningLayer(warningLayerConfig);

	var startTime = Date.parseString($("#startDate").val(),"yyyy-MM-dd");
	var curValue = $('#timeAxis').slider('getValue');
	var curtime = new Date();
	curtime.setTime(startTime.valueOf() + 3600*1000*curValue);
	gwwsMap.updateForecastWeatherLayerFilter(weatherLayer,curtime.format("yyyy-MM-dd hh:00:00"));
	gwwsMap.updateWarningLayerFilter(warningLayer,curtime.format("yyyy-MM-dd hh:00:00"));
}*/
