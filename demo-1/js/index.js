/**
 * Created by john5 on 2017/3/6.
 */
$(document).ready(function(){
    $('.tit-list').click(function () {
        $(this).css({"background":'none'});
        $(this).siblings().css({"background":'#CCCCCC'});
        $('.tip-top').html($(this).html());
        if($(this).index()==0){
           $('#pic').attr('src',"img/1.bmp");
        }else if($(this).index()==1){
            $('#pic').attr('src',"img/2.bmp");
        }else if($(this).index()==2){
            $('#pic').attr('src',"img/3.bmp");
        }else if($(this).index()==3){
            $('#pic').attr('src',"img/4.bmp");
        }
    })
});