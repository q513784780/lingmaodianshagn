<template>
    <div class="contant">
        <Bottom style="z-index:1000"></Bottom>
          
    </div>
</template>

<script>
import Bottom from '@/components/Top'
export default {
  components: {
    Bottom
    
  },
  
}
</script>
<style lang="scss" scoped>
.contant{
  margin: 0.3rem 0 0.45rem 0;
  font-size: 0;
  img{
      margin-top: 0.2rem;
      width: 100%;
      height: 100%;
  }
}
</style>