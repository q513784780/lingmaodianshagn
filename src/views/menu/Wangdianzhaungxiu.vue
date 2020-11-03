<template>
  <div>
      <Top></Top>

    <div class="contant">
        <img src="@/assets/wdzxtop.jpg" alt="">
          <div class="banner">
              <swiper :Hangkou="{
                    effect : 'coverflow',
                    slidesPerView: 3,
                    centeredSlides: true,
                    initialSlide :3,
                    loop : true,
                    coverflowEffect: {
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows : flase
                        },
                }">
                    <div class="swiper-slide" >
                        <img src="http://www.lingmaodianshang.com/templets/Images/shao.png" alt="">
                        <p>少栋</p>
                        <div class="button">高级设计师</div>
                    </div>
                    <div class="swiper-slide" >
                        <img src="http://www.lingmaodianshang.com/templets/Images/pc_31.jpg" alt="">
                        <p>恋恋</p>
                        <div class="button">高级设计师</div>
                    </div>
                    <div class="swiper-slide" >
                        <img src="http://www.lingmaodianshang.com/templets/Images/pc_33.jpg" alt="">
                        <p>雪缨</p>
                        <div class="button">高级设计师</div>
                    </div>
                    <div class="swiper-slide" >
                        <img src="http://www.lingmaodianshang.com/templets/Images/pc_34.jpg" alt="">
                        <p>珍珍</p>
                        <div class="button">高级设计师</div>
                    </div>
                    <div class="swiper-slide" >
                        <img src="http://www.lingmaodianshang.com/templets/Images/pc_36.jpg" alt="">
                        <p>小赞</p>
                        <div class="button">高级设计师</div>
                    </div>
                    <div class="swiper-slide" >
                        <img src="http://www.lingmaodianshang.com/templets/Images/pc_37.jpg" alt="">
                        <p>周周</p>
                        <div class="button">高级设计师</div>
                    </div>
                </swiper>
          </div>
          <img src="@/assets/wdzxbottom.jpg" alt="">
      
          
    </div>
            
    
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import Top from '@/components/Top'
import swiper from '@/components/Swiperone'
export default {
  components: {
        Top,
        swiper
    },
}
</script>
<style lang="scss" scoped>
.contant{
    font-size: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.45rem;
    .banner{
        width: 95%;
        margin: 0 auto;
        font-size: 0.1rem;
        .swiper-slide{
            text-align: center;
            .button{
                width: 0.8rem;
                background: orange;
                border-radius: 10px;
                margin: 0.1rem auto;
            }
        }
    }
}
img{
    width: 100%;
}
</style>