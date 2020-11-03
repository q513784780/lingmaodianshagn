<template>
  <div>
      <Top></Top>

    <div class="contant">
        <!-- <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_1.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_2.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_3.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_4.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_5.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_6.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_7.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_8.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_9.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_10.jpg" alt=""> -->
        <!-- <img src="@/assets/cs1.jpg" alt="">
        <img src="@/assets/cs2.jpg" alt="">
        <img src="@/assets/cs3.jpg" alt="">
        <img src="@/assets/cs4.jpg" alt="">
        <img src="@/assets/cs5.jpg" alt="">
        <img src="@/assets/cs6.jpg" alt="">
        <img src="@/assets/cs7.jpg" alt="">
        <img src="@/assets/cs8.jpg" alt="">
        <img src="@/assets/cs9.jpg" alt=""> -->
        <img src="@/assets/cpps.jpg" alt="">
        <div class="video">
            <video src="http://www.lingmaodianshang.com/v/pashe.MP4" style="width:100%" controls poster="http://www.lingmaodianshang.com/v/lmds.png"></video>
        </div>
        <!-- <img src="@/assets/cs10.jpg" alt="">
        <img src="@/assets/cs11.jpg" alt="">
        <img src="@/assets/cs12.jpg" alt="">
        <img src="@/assets/cs13.jpg" alt="">
        <img src="@/assets/cs14.jpg" alt="">
        <img src="@/assets/cs15.jpg" alt="">
        <img src="@/assets/cs16.jpg" alt=""> -->

        <!-- <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_12.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_13.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_14.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_15.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_16.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_17.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/paishe/ps_18.jpg" alt=""> -->
     <Bottom></Bottom>

    </div>

    
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
export default {
  components: {
        Top,
        Bottom
    },
}
</script>
<style lang="scss" scoped>
.contant{
    font-size: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.45rem;
    position: relative;
    .video{
        width: 83%;
        margin: 0 auto;
        position: absolute;
        top: 23.68rem;
        left: 0.3rem;
    }
}
img{
    width: 100%;
}
</style>