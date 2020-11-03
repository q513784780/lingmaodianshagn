<template>
    <div class="contant">
        <Top></Top>

        <div class="header">
          <h2>灵猫大事件</h2>
          <span></span>
          <h3>2015</h3>
          <!-- <div class="icon"></div> -->
          <p>自2010年创立以来，致力于专业电商外包，打造西北值得信赖的第三方网店服务品牌</p>
          <p class="english">Since it was founded in 2010, it is committed to outsourcing professional business and building a trusted third party store service brand in Northwest China</p>
        </div>
        <div class="box">
          <img src="@/assets/five.jpg" alt="">
        </div>
    </div>
</template>

<script>
import Top from '@/components/Top'
export default {
  components: {
    Top
  }
}
</script>
<style lang="scss" scoped>
.contant{
  margin: 0.3rem 0 0.45rem 0;
  font-size: 0;
  .header{
    margin-top: 0.5rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2017-1.jpg)no-repeat;
    background-size: 150%;
    font-size: 0.12rem;
    color: white;
    line-height: 0.24rem;
    .english{
      font-size: 0.1rem;
    }
    p{
      margin: 0 0.12rem 0 0.12rem;
    }
    span{
      width: 0.4rem;
      height: 0.05rem;
      display: block;
      background-color: #2fd0b5;
      margin: 0.02rem auto;
    }
    h2{
      padding-top: 0.1rem;
      font-size: 0.25rem;
      text-align: center;
    }
    h3{
      font-size: 0.25rem;
      text-align: center;
    }
  }
  img{
    width: 100%;
    // height: 200%;
  }
  .box{
    width: 100%;
    height: 10rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>