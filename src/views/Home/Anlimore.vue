<template>
  <div class="xiangqing">
    <div class="box">
        <div class="back" @click="back">
            <span class="iconfont">&#xe66d;</span>
        </div>
        <div class="image">
            <img src="@/assets/logo_cases.png" alt="">
        </div>
    </div>
    <Topbar></Topbar>
        <keep-alive>
             <router-view ></router-view>
        </keep-alive>


    <!-- <Bottom></Bottom> -->

     
  </div>
</template>

<script>
import Top from '@/components/Top'
// import Bottom from '@/components/Bottom'
import Topbar from '@/components/Topbar'
export default {
  components: {
    Top,
    // Bottom,
    Topbar
  },
  methods:{
      back(){
        this.$router.push("/home");
      }
  }
}
</script>
<style lang="scss" scoped>
// 顶部的导航栏
.box{
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
    }
}
.xiangqing{
    font-size: 0.16rem;
    margin-top: 0.5rem;
    margin-bottom: 0.45rem;
    .center{
        margin-bottom: 0.2rem;
        .image{
            width: 3.15rem;
            height: 1.85rem;
            margin: 0 auto;
            position: relative;
            background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
            img{
                width: 100%;
                height: 100%;
            }

        }
    }
}
.sheji{
    margin-left: 0.3rem;
    margin-top: 0.1rem;
    font-size: 0.14rem;
    .right{
        font-size: 0.06rem;
        margin-left: 1.5rem;
    }
}
</style>