<template>
  <div>
    <div class="top">
                <div class="back" @click="handleClick">
                    <span class="iconfont">&#xe66d;</span>
                </div>
                <div class="image">
                    <img src="@/assets/logo_cases.png" alt="">
                </div>
            </div>
    <Newstopbar></Newstopbar>


     
  </div>
</template>

<script>
import Newstopbar from '@/components/Newstopbar'
export default {
  components: {
    Newstopbar
  },
  methods:{
    handleClick(){
        this.$router.push({ path:'/home'});
    }
  }
}
</script>
<style lang="scss" scoped>
.top{
  width: 100%;
  font-size: 0.2rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 100;
  .back{
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      margin-left: 0.1rem;
  }
  .image{
    width: 1.5rem;
    height: 0.5rem;
    margin-left: 0.8rem;
    img{
        width: 100%;
        height: 100%;
    }
  }
}
</style>