/**
 * Created by 12 on 2016/7/21.
 */

    window.onload=function(){
        changgebgc();
        bannermove();
        timeback();
    }


//��ӹ���ͷ����ɫ���¼�
var flag=true;
function changgebgc(){
        var head=document.querySelector(".head");
        var banner=document.querySelector(".banner");
        //��ȡbanner�ĸ߶�
        var bannerhigh=banner.offsetHeight;
        var alpha=1;
        window.onscroll=function(){
            //��ȡ����������ʱ�����Ļ�Ϸ��ĸ߶�
            var scroltop=document.body.scrollTop;
            if(scroltop<bannerhigh){
                //console.log(scroltop/bannerhigh)
                head.style.backgroundColor="rgba(233,35,34,"+alpha*(scroltop/bannerhigh)+")";
            }else{
                head.style.backgroundColor="rgba(233,35,34,1)";
            }
        }
    }




function  bannermove() {
    var banner=document.querySelector(".banner");
    var width=banner.offsetWidth;
    var index=1;

    var ull=banner.querySelector(".ull");
    var settime= function () {
        timeID=setInterval(function(){
            index++;
            gettranslate();
        },1000);
    };
   //���ʱ�䶨ʱ��
    var timeID=null;
    settime();



//��װ�ƶ��ĺ����й���Ч��
    var gettranslate= function () {
        ull.style.webkitTransition="all .3s";
        ull.style.transition="all .3s";
        ull.style.webkitTransform="translateX("+(-width*index)+"px)";
        ull.style.transform="translateX("+(-width*index)+"px)";
    }
//��װ�ƶ��ĺ���û�й���Ч��
    var gettranslate2= function () {
        ull.style.webkitTransition="none";
        ull.style.transition="none";
        ull.style.webkitTransform="translateX("+(-width*index)+"px)";
        ull.style.transform="translateX("+(-width*index)+"px)";
    }

    //���ʱ�����
    ull.addEventListener("transitionEnd", function(){
        if(index==9){
            index=1;
        }
        else if(index==0){
            index=8
        }
        gettranslate2();
        flag=true;
    } )





    //���ʱ����������ƶ���
  ull.addEventListener("webkitTransitionEnd", function(){
        //console.log(0)
        if(index==9){
            index=1
        }
      else if(index==0){
          index=8
      }
      gettranslate2();
      //���СԲ���¼�
      var point=document.querySelector(".point");
      var lis=point.querySelectorAll("li");
        //���û��СԲ�������
      for(var i=0;i<lis.length;i++){
          lis[i].className="";
      }
      if(index>=1){
          //index--;

      }
      lis[index-1].className="backcolor";

      flag=true;

      console.log("transition");

  } )



    //��Ӵ����¼�
    var starposition=0;
    var endposition=0;
    var changpositin=0;
    ull.addEventListener("touchstart",function(e){
        flag=false;
        //��õ�ǰ�ľ���
      starposition= e.touches[0].pageX;
        //��������Ļʱ�������ʱ��
        clearInterval(timeID);
    } )
    ull.addEventListener("touchmove",function(e){
        //��û����ľ���
        endposition= e.touches[0].pageX;
        //��û������ÿһ���ľ���
        changpositin=endposition-starposition;
        //ͨ�������ľ������ı�ͼƬ�ľ���
        ull.style.webkitTransition="none";
        ull.style.transition="none";
        ull.style.webkitTransform="translateX("+(-width*index+changpositin)+"px)";
        ull.style.transform="translateX("+(-width*index+changpositin)+"px)";
        flag=true

    } )
    ull.addEventListener("touchend",function(e){
        if(flag){
            //flag=false;
            if(Math.abs(changpositin)>width/3){
                //����1/3�����Ҫ�ж������ƶ��������ƶ�
                if(changpositin>0){
                    index--;
                    if(index>0){
                        gettranslate()
                    }else{
                        index=8
                        gettranslate2()
                    }

                }else{
                    index++;
                    gettranslate()
                }
                //flag=false;
                //����ƶ�����С��1/3,�Ͳ��ƶ�
            }else{
                gettranslate()
            }
            //���¿�ʼ��ʱ��
            settime();


            //console.log("touchend");
        }


        } )


}







//����ʱ��ʼ
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
