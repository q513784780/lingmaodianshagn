<template>
  <div>
      <Top></Top>

    <div class="contant">
        <img src="@/assets/ppsj.jpg" alt="">
        <!-- <Bottom></Bottom>    -->
    </div>

    
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import Top from '@/components/Top'
// import Bottom from '@/components/Bottom'
export default {
  components: {
        Top,
        // Bottom
    },
}
</script>
<style lang="scss" scoped>
.contant{
    font-size: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.45rem;
    
}
img{
    width: 100%;
}
</style>