// JavaScript Document
//首页效果
$('#y_moveLt').click(function(){
	$('.y_nav').css({'width':'40px'});
	//$('.y_nav li a').hide();
	$('.y_single').hide();
	$('#content').css({'margin-left':'40px'});
	$('#y_moveRt').show();
	$('#y_moveLt').hide();
});
$('#y_moveRt').click(function(){
	$('.y_nav').css({'width':'233px'});
	//$('.y_nav li a').show();
	$('.y_single').show();
	$('#content').css({'margin-left':'233px'});
	$('#y_moveLt').show();
	$('#y_moveRt').hide();
});	
    
	    <!--tab切换-->
			/*window.onload = function(){
				var all_content = document.getElementById('y_all_content');
				var oLi = all_content.getElementsByClassName('y_tab_li');
				var oDiv = all_content.getElementsByClassName('y_tab_div');
				var y_tab_li3 = document.getElementById('y_tab_li3');
				var y_choose_windmill_btn = document.getElementById('y_choose_windmill_btn');
				var y_windmill_list_one = document.getElementById('y_windmill_list_one');
				var y_windmill_list_two = document.getElementById('y_windmill_list_two');
				for (var i = 0; i < oLi.length; i++) {
					oLi[i].index = i
					oLi[i].onclick = function(){
						
						for(var i = 0; i < oLi.length; i++){
							oLi[i].className = 'y_tab_li';
							oDiv[i].style.display='none';
						}
						
						this.className = 'orange y_tab_li';
						oDiv[this.index].style.display='block';
					}
				};
			}*/

//查询按钮点击样式
$('.y_btn_bg').mousedown(function(e) {
	$('.y_btn_bg').css({'background':'linear-gradient(to top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 100%)'});
});	
$('.y_btn_bg').mouseup(function(e) {
	$('.y_btn_bg').css({'background':'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 100%)'});
});	
//单风机选择获取风机val
$('#y_windmill_list_two span').click(function(e) {
	$('#y_windmill_list_two').hide();
});
$("#y_windmill_list_two").delegate("li span", "click", function(){
	$("#y_choose_windmill_btn").val($(this).html())
});
$('.y_certain_windmill_btn').click(function(e) {
	$('#y_windmill_list_one').hide();
});

//点击屏幕隐藏选择风机
$(document).click(function(e) {
	$('.y_choose_windmill').children('ul').hide();
});
/*var menu = $('#y_choose_windmill_btn,#y_choose_windmills_btn');
$(document).click(function(e) {
	if(!(e.target == menu[0] || $.contains(menu[0], e.target))) {
		menu.siblings('ul').hide();
	}
});*/
//风机选择点击样式
$('#y_choose_windmill_btn').click(function(e) {
	//event.cancelBubble = true;
	var theEvent = window.event || arguments.callee.caller.arguments[0];
	theEvent.stopPropagation();
	$('#y_windmill_list_one').hide();
	$('#y_windmill_list_two').show();
});
$('#y_choose_windmills_btn').click(function(e) {
	//event.cancelBubble = true;
	var theEvent = window.event || arguments.callee.caller.arguments[0];
	theEvent.stopPropagation();
	$('#y_windmill_list_two').hide();
	$('#y_windmill_list_one').show();
});
//风场点击选中
$("#time .dropdown-menu li a").click(function(){
	$('.y_changeInnerHTML').html($(this).html());
})
//消息警告弹出
$('#y_message_icon').click(function(e) {
	$('.y_message').slideToggle();
});
$('#y_warning_icon').click(function(e) {
	$('.y_warning').slideToggle();
});



/*$('#warningAndMessage').mouseout(function(e) {
    $('.y_message,.y_warning').slideUp();
});*/