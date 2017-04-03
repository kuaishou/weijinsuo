/**
 * Created by Administrator on 2017/3/9.
 */

'use strict';

$(function() {
    // 当文档加载完成才会执行
    /**
     * 根据屏幕宽度的变化决定轮播图片应该展示什么
     * @return {[type]} [description]
     */
    function resize() {
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        // 根据大小为界面上的每一张轮播图设置背景
        // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
        $(' .carousel-inner > .item').each(function(i, item) {
            // 因为拿到是DOM对象 需要转换
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'">')
            }else{
                $item.empty();
            }

        });
    }
    $(window).on('resize', resize).trigger('resize');
});

 /*$(function(){
     function resize(){

     var  windowWidh=$(window).width();
     console.log(111);

     var isSmallScreen=windowWidh<768;
     $('.carousel-inner>.item').each(function(i,item){
         console.log(101);
         var $item=$(item);
         var imgSrc=$item.data(isSmallScreen?'imge-xs':'imge-xs');
         $item.css('backgroudImage','url("'+imgSrc+'")')
     });

         $(window).on('resize',resize).trigger('resize');


     console.log(121);
     }
 });*/
var $newstitle=$('.news-title');
$('#news .nav-tabs a').on('click', function(){
    var $this=$(this);
    var title=$this.data('title');
    $newstitle.text(title);
});