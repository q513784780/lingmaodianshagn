<template>
  <div>
      <Top></Top>

    <div class="contant">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_banner.jpg" alt="">
        <div class="text">
             <p>灵猫电商--您的托管专家</p>
            <h2>精准锁定目标人群·合理调整排名出价</h2>
            <p>Accurately target the target population and adjust the position bids reasonably</p>
        </div>
        <div class="kong">
            <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_2.jpg" alt="">
        </div>
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/tu.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_06.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_cl.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/client_1.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_10.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_11.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhitongche/ztc_12.jpg" alt="">
    </div>
     <Bottom></Bottom>

    
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
    .text{
        font-size: 0.1rem;
        text-align: center;
        line-height: 0.3rem;
        margin: 0.2rem;
    }
    .kong{
        margin-bottom: 0.2rem;
    }

}
img{
    width: 100%;
}
</style>