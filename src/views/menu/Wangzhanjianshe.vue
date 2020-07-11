<template>
  <div>
      <Top></Top>

    <div class="contant">
        <img src="http://www.lingmaodianshang.com/templets/Images/js1.png" alt="">
        <div class="text">
            <h2>我们的鼓舞服务就是让你满意</h2>
            <p>技术更跨界、创意更自由，6年丰富网站经验</p>
        </div>
        <img src="http://www.lingmaodianshang.com/templets/photo/jssj.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js30.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js31.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js31.png" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js30.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js31.jpg" alt="">
        <!-- <img src="http://www.lingmaodianshang.com/templets/photo/js32.png" alt=""> -->
        <div class="text">
            <h4>因为优势所以卓越</h4>
        </div>
        <img src="http://www.lingmaodianshang.com/templets/photo/js33.png" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js34.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js35.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js36.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js37.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js38.jpg" alt="">
        <img src="http://www.lingmaodianshang.com/templets/photo/js39.jpg" alt="">
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
        margin: 0.1rem 0;
    }
}
img{
    width: 100%;
}
</style>