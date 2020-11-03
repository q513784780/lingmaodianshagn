<template>
    <div class="contant">
        <Top></Top>
          <img src="@/assets/six.jpg" alt="">
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
  img{
      width: 100%;
      height: 100%;
  }
}
</style>