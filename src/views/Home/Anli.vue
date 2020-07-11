<template>
  <div class="xiangqing">
      <Top></Top>
     <div class="contant">
         <div class="clicer"></div>
         <h3>项目介绍</h3>
     </div>
     <p>九叶蓝绞股龙须茶首页设计</p>
     <div class="contant">
         <div class="clicer"></div>
         <h3>设计欣赏</h3>
     </div>

     <div class="eg">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112957.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112957-50.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112958.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112958-50.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112958-51.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112959.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112959-50.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112959-51.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6112959-52.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6113000.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6113000-50.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6113000-51.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6113001.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6113001-50.jpg" alt="">
         <img src="http://www.lingmaodianshang.com/uploads/allimg/190806/1-1ZP6113001-51.jpg" alt="">
     </div>
     <!-- 底部的 -->
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
.xiangqing{
    margin-top: 0.5rem;
    font-size: 0.16rem;
    p{
        margin-left: 0.2rem;
    }
    .contant{
        display: flex;
        font-size: 0.16rem;
        margin: 0.2rem ;
        .clicer{
            width: 0.08rem;
            height: 0.25rem;
            background: #2fd0b5;
            border-radius: 3px;
        }
        h3{
            padding-left: 0.2rem;
        }
    }
    .eg{
        width: 90%;
        height: auto;
        margin: 0 auto;
        font-size: 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
// 底部的
</style>

