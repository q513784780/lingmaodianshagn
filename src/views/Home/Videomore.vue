<template>
  <div class="box">
    <Top></Top>
    <div class="shipintop">
      <div class="bigbox">
        <div class="shipin">
          <video src="http://www.lingmaodianshang.com/v/lmds.mp4" controls poster="http://www.lingmaodianshang.com/v/lmds.png"></video>
          <div class="text">
            <p>专业电商外包团队</p>
          </div>
        </div>
        <div class="bottombox">
          <p>打造西北值得信赖的第三方网店服务品牌</p>
        </div>
      </div>


      <div class="bigbox">
        <div class="shipin">
          <video src="http://www.lingmaodianshang.com/v/2018710164234.mp4" controls poster="http://www.lingmaodianshang.com/v/XingXiangDaShi.png"></video>
          <div class="text">
            <p>专注网站第三方服务商</p>
          </div>
        </div>
        <div class="bottombox">
          <p>放心选择，选择放心！</p>
        </div>
      </div>
      
     
    </div>
    
    <div class="bigbox">
      <div class="shipin">
        <video src="http://www.lingmaodianshang.com/v/lmds.mp4" controls poster="http://www.lingmaodianshang.com/v/lmds.png"></video>
        <div class="text">
          <p>专业电商外包团队</p>
        </div>
      </div>
      <div class="bottombox">
        <p>打造西北值得信赖的第三方网店服务品牌</p>
      </div>
    </div>

    
      <div class="bigbox">
        <div class="shipin">
          <video src="http://www.lingmaodianshang.com/v/2018710164234.mp4" controls poster="http://www.lingmaodianshang.com/v/XingXiangDaShi.png"></video>
          <div class="text">
            <p>专注网站第三方服务商</p>
          </div>
        </div>
        <div class="bottombox">
          <p>放心选择，选择放心！</p>
        </div>
      </div>


    <Bottom></Bottom>

  </div>
</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'

export default {
  components: {
    Top,
    Bottom
  }
}
</script>
<style lang="scss" scoped>
  
.shipintop{
  margin-top: 0.5rem;
}
.shipin{
  width: 96%;
  height: 2.2rem;
  margin: 0 auto;
  position: relative;
  font-size: 0.16rem;
  border-radius: 15px;
  overflow: hidden;
  video{
    width: 100%;
    height: 96%;
  }
  .text{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    p{
      color: white;
      margin: 0.1rem 0.2rem;
      font-weight: 800;
    }
  }
}
.bigbox{
  margin-bottom: 0.3rem;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid rgb(216, 213, 213);
}
.bottombox{
  font-size: 0.14rem;
  margin-left: 0.12rem;
  font-weight: 900;
}
</style>