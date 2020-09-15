/**
 * Created by 蛤蛤 on 2020/4/2.
 */



$(document).ready(function(){
   var k = $(window).height();
   var flag = false;

   $('.next').click(function(event){
      $.fn.fullpage.moveSectionDown()
   });
   $('.next').fadeIn();
   $('#fullpage').fullpage({
      navigation:true,
      scrollingSpeed:1200,
      //回调函数

      afterLoad:function(anchorLink,index ){

         if(index==2){
            $('.next').fadeOut();
            $('.search').show().animate({'right':370},1500,'easeOutBack',function(){
               $('.search-words').animate({'opacity':1},500,function(){
                  $('.search').hide();
                  //图片上走缩小
                  $('.search-02-1').show().animate({'height':30,'right':250,'bottom':452},1000);
                  //同时沙发图片变大
                  $('.goods-02').show().animate({'height':218},1000);
               //   同时文字显示
                  $('.words-02').animate({'opacity':1},500,function(){
                     $('.next').fadeIn();
                  })

               });
            });
         }
      },

   //   滚动屏幕是执行的动画
      onLeave:function(index,nextIndex,direction){
         $('.next').fadeOut();
         if (index == 2&&nextIndex==3){
            $('.shirt-02').show().animate({'bottom':-(k-250),'width':207,'left':260},2000,function(){
               $('.img-01-a').animate({'opacity':1},500,function(){
                  $('.btn-01-a').animate({'opacity':1},500,function(){
                     $(".next").fadeIn();
                  });
               });
            });
            $('.cover').show();
         }
         if (index == 3 && nextIndex == 4){
            $('.next').fadeOut();
            $('.shirt-02').hide();

            $('.t1f').show().animate({'bottom':-((k-250)),'left':250},1000,function() {
               $(this).hide();
               $('.car-img').show();
               $('.car').animate({'left':2000},2500,'easeInElastic',function(){
                  $('.note').show();
                  $('.note-img,.words-04-a').animate({'opacity':1},1000,function(){
                     $(".next").fadeIn();
                  });

               });
            });
         }
         if (index == 4 && nextIndex == 5) {
            $('.next').fadeOut();
            $('.hand-05').animate({'bottom':0},2000,function(){
               $('.mouse-05-a').animate({'opacity':1},1000);
               $('.t1f-05').show().animate({'bottom':0},1000,function(){
                  $('.order-05').animate({'bottom':390},function(){
                     $(".next").fadeIn();
                  })
               });
            });

         }
         if (index == 5 && nextIndex == 6) {
            $('.next').fadeOut();
            $('.t1f-05').animate({'bottom':-(k-500),'left':'40%',"width":65},1500,function(){
               $('.t1f-05').hide();
            });
            $('.box-06').animate({'left':'38%'},1500,function(){
               $('.box-06').animate({'bottom':40},500,function(){
                  $('.box-06').hide();
               //   行走过程就是背景移动过程
               //   jquery不好做
                  $('.section6').animate({'backgroundPositionX':'100%'},4000,function(){

                     $('.boy').animate({'height':305,'bottom':116},1000,function(){
                        $(this).animate({'right':500},500,function(){
                           $('.door').animate({'opacity':1},200,function(){
                              $('.girl').show().animate({'right':350,'height':306},500,function(){
                                 $('.pop-07').show();
                                 $(".next").fadeIn();
                              })
                           });
                        });
                     });
                     $('.words-06-a').show().animate({'left':'30%'},2000,'eseOutElastic')


                  });
                  $('.pop-06').show();
               });
            })
         }
         if (index == 6 && nextIndex == 7) {
            $('.next').fadeOut();
            //$('.star').animate({'width':120},1500);
            setTimeout(function(){
               $('.star').animate({'width':120},1000,function(){
                  $('.good-07').animate({'opacity':1},1000,function(){
                     $('.next').fadeIn();
                  })
               })
            },1000)

         }
      //   第八屏动画
      //   $('.beginShopping').mouseenter(function(event){
      //      $('.btn-08-a').show();
      //   }).mouseleave(function(event){
      //      $('.btn-08-a').hide();
      //   })

         $('.beginShopping').hover(function(){
            $('.btn-08-a').toggle();
         });
         $(document).mousemove(function(event){
            var x = event.pageX- $('.hand-08').width() / 2;
            var y = event.pageY+10;
            var minY= k -449;
            if(y < minY){
               $('.hand-08').css({'left':x,'top':minY})
            }else{
               $('.hand-08').css({'left':x,'top':y});
            }

         });
      //   再来一次
         $('.again').click(function(event){
            $.fn.fullpage.moveTo(1);
            $('img,.move').attr('style','');
         })
      }
   });

});