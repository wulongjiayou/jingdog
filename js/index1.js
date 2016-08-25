/**
 * Created by 12 on 2016/7/24.
 */
$(function () {
    var ulbox=$(".ull");
    var banner=$(".banner");
    var bannerwidth=banner.width();
    var timeID=null;
    var index=1;
    var points=$(".point");
    var lis=points.find("li")


     //СԲ���ƶ��ĺ���
   var point= function(){
        for(var i=0;i<lis.length;i++){
           $(lis[i]).removeClass("backcolor");
        }
        $(lis[index-1]).addClass("backcolor")
    }

    //���ö�ʱ������
    var settimeid=function () {
        timeID=setInterval(function () {
            index++;
            ulbox.animate({"transform":"translateX("+(-index*bannerwidth)+"px)"},200,"linear", function () {
                if(index==9){
                    index=1
                    ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
                }else if(index==0){
                    index=8
                    ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
                }
                point();
            })
        },1000)
    }
    //ִ�ж�ʱ��
    settimeid();
    //���ýӴ���ʱ�������ʱ��
    var starposition=0;
    var endposition=0;
    var changposition=0;
    ulbox[0].addEventListener("touchstart", function (e) {
        clearInterval(timeID);
        starposition= e.touches[0].pageX;
    })
    //����ָ�ƶ���ʱ��
    ulbox[0].addEventListener("touchmove", function (e) {
        //��û����ľ���
        endposition= e.touches[0].pageX;
        //��û������ÿһ���ľ���
        changposition=endposition-starposition;
        //�����ľ�����ͼƬ������Ӧ�ľ���
        //ulbox.animate({"transform":"translateX("+(-index*bannerwidth+changpositin)+"px)"})
        ulbox[0].style.webkitTransform="translateX("+(-index*bannerwidth+changposition)+"px)";
        ulbox[0].style.transform="translateX("+(-index*bannerwidth+changposition)+"px)";
    })
    //�����뿪��ʱ�����ö�ʱ��
    ulbox[0].addEventListener("touchend", function () {
        if(Math.abs(changposition)>bannerwidth/3){
            //����1/3�����Ҫ�ж������ƶ��������ƶ�
            if(changposition>0){
                index--;
                ulbox.animate({"transform":"translateX("+(-index*bannerwidth)+"px)"},300,"ease", function () {
                    if(index==0){
                        index=8
                        ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
                    }
                    point();
                })
            }else{
                index++;
                ulbox.animate({"transform":"translateX("+(-index*bannerwidth)+"px)"},300,"ease", function () {
                    if(index==9){
                        index=1
                        ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
                    }
                    point();
                })
            }
        }else{
            ulbox.animate({"transform":"translateX("+(-index*bannerwidth)+"px)"},300,"ease", function () {
                if(index==0){
                    index=8
                    ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
                }
            })
        }
        settimeid();
    })


    //������ָʱ�򴥷����¼�
    ////����ָ�һ�����ʱ��
    //banner.on("swipeRight", function () {
    //    index--;
    //    ulbox.animate({"transform":"translateX("+(-index*bannerwidth)+"px)"},300,"linear", function () {
    //        if(index==0){
    //            index=8
    //            ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
    //        }
    //    })
    //})
    ////����ָ�󻬶���ʱ��
    //banner.on("swipeLeft", function () {
    //    index++;
    //    ulbox.animate({"transform":"translateX("+(-index*bannerwidth)+"px)"},300,"linear", function () {
    //        if(index==9){
    //            index=1
    //            ulbox.css({"transform":"translateX("+(-index*bannerwidth)+"px)"});
    //        }
    //    })
    //})

    //����ʱ��ʼ
    timeback()
    //����ʱ�����ķ�װ
    function timeback(){
        var times=document.querySelector("#times");
        console.log(times);
        var lis=times.children;
        console.log(lis);
        var time=10*60*60;
        var hours=0;
        var minutes=0;
        var seconds=0;
        var timeID=setInterval(function () {
            time--;
            if(time==0){
                clearInterval(timeID);
                return;
            }
            hours=Math.floor(time/3600);
            minutes=Math.floor(time%3600);
            seconds=time%60;
            lis[0].innerHTML=Math.floor(hours/10);
            lis[1].innerHTML=Math.floor(hours%10);
            lis[3].innerHTML=Math.floor(minutes/60/10);
            lis[4].innerHTML=Math.floor(minutes/60%10);
            lis[6].innerHTML=Math.floor(seconds/10);
            lis[7].innerHTML=Math.floor(seconds%10);

        },1000)

    }
})
