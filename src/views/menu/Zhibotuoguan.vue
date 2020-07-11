<template>
  <div>
      <Top></Top>

    <div class="contant">
        <img src="http://www.lingmaodianshang.com/templets/1000zhu/newimg/img/zhibotuoguan/11.jpg" alt="">
        
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
}
img{
    width: 100%;
}
</style>