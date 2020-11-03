<template>
  <div class="xiangqing">
      <Top></Top>
     <div class="contant">
         <div class="clicer"></div>
         <h3>项目介绍</h3>
     </div>
     <p>妃丝芙祛皱精华露详情页</p>
     <div class="contant">
         <div class="clicer"></div>
         <h3>设计欣赏</h3>
     </div>

     <div class="eg">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410094394958.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410094863737.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410095299628.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410095830812.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410100296574.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410101287181.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410101835594.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410102369932.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410102835673.jpg" alt="">
         <img src="http://res.der-matech.com.cn/upload/ueditor/image/20190614/2019061410103346577.jpg" alt="">
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
    margin-bottom: 0.45rem;
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
            font-size: 0.14rem;
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

