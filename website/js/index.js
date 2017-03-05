// JavaScript Document
//风机点击显示隐藏
$('.y_fengji').click(function(e) {
	$('.y_fj_show').show();
});
$('#example').popover();


//map
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
