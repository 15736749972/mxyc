/**
 * Created by liu on 2016/11/5.
 */
$(function () {
    /*视频栏，第一张图片放大*/
    $('.bigPic ul li').first().css({
        'width':'428px',
        'height':'338px',
        'position':'relative'
    });
    $('.bigPic ul li').first().children('dl').append('<dd class="position_box"></dd>');
    $('.bigPic ul li').first().children('dl').find('dd').eq(0).children('a').css({
        'position':'absolute',
        'color':'#fff',
        'font-weight':'bold',
        'top':'305px',
        'left':'10px',
        'z-index':"3"
    }).end().end().eq(1).css({
        'position':'absolute',
        'top':'305px',
        'left':'315px',
        'color':'#fff',
        'z-index':'3'
    });
//选项卡
    $('.ipt_main ul li').mouseenter(function () {
            $(this).addClass('hover').siblings().removeClass('hover');
            var targetliId=$(this).attr('id');
            $('#con_'+targetliId).css({
                'display':'block'
            }).siblings('.con').css({
                'display':'none'
            });
    });

    /*首页轮播图*/
    var i=1,timer,picNum;
    $('.slideUl').find('li').eq(0).show().siblings().hide();
    // alert($('.slideUl').find('li').eq(0));
    picNum=$('.slideUl').find('li').length;
    //alert(picNum)
    function autoSlide() {
        if(i==picNum){
            i=0;
        }
        i++;
        $('.slideUl').find('li').eq(i-1).fadeIn(400).siblings().hide();
        // alert(i);
    }
    timer=setInterval(autoSlide,3000);
    $('.slideUl ').find('li').hover(function () {
        i=$(this).index()+1;
        //alert(i)
        clearInterval(timer);
    },function () {
        timer=setInterval(autoSlide,3000);
    });
/*公告栏信息滚动*/
var clieWidth=$('.notice')[0].clientHeight
    var scrollWidth=$('.notice')[0].scrollHeight;
    var dis=scrollWidth-clieWidth;
    setInterval(autosize,100);
    function autosize() {
        $('.notice')[0].scrollTop+=1;
        if ($('.notice')[0].scrollTop==dis){
            $('.notice')[0].scrollTop=0;
        }
    }


    // var a=0;
    // var num= $('.notice').find('li').length;
    // //alert(num)
    // $('.notice').find('ul').clone().appendTo('.notice');
    // function slide() {
    //     a++;
    //     $('.notice').find('ul').eq(0).animate({'margin-top': '-=30px'});
    //     //alert(a)
    //     if(a%(num+1)==0){
    //         //alert(a)
    //         // var mar_top=$('.notuce_list').find('li').eq(i).css('margin-top');
    //         $('.notice').find('ul').eq(0).remove().clone().appendTo('.notice').attr('style','');
    //     }
    //
    // }
    // setInterval(slide,1000);
});