<template>
  <div class="cont">
    <Top></Top>
    <div class="contant">
        <div class="header">
            <h3>旅游版图</h3>
            <p>The world is so big, don't you want to see it?</p>
        </div>
        <img src="@/assets/travel.jpg" alt="">
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
.cont{
    margin-bottom: 0.45rem;
}
.contant{
    margin-top: 0.5rem;
    font-size: 0.14rem;
    img{
        width: 100%;
        height: 100%;
    }
    .header{
        margin: 0 0.1rem 0 0.1rem;
        h3{
        font-size: 0.18rem;
        font-weight: 600;
        margin: 0.1rem 0;
        }
    }
}
</style>