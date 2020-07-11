<template>
  <div>
      <div class="bottom">
          <div class="lingmao">
            <!-- <img src="@/assets/lingmao.png" alt="">
            <p class="zhaoshang">400-009-1355</p> -->
            <img src="http://wap.lingmaodianshang.com/templets/m_img/zx32.jpg" alt="">
            <img src="http://wap.lingmaodianshang.com/templets/m_img/zx33.jpg" alt="">
            <img src="@/assets/bottom.jpg" alt="">
          </div>
      </div>
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
export default {
  components: {
    // Tabbar
  }
}
</script>
<style lang="scss" scoped>
.bottom{
  background: #212121;
  .lingmao{
    width: 100%;
    height: auto;
    text-align: center;
    color: #00bda2;
    font-size: 0.26rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
img{
  display: block;
}
</style>