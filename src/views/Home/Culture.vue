<template>
  <div>
    <Top></Top>
    <div class="contant">
      <img src="@/assets/culture.jpg" alt="">
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
    font-size: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.45rem;
  img{
    width: 100%;
  }
}


</style>