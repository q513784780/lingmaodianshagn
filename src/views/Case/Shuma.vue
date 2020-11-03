<template>
  <div>
   <div class="center" v-for="data in arr" :key="data.image"  @click="fun()" >
      <div class="image" @click="handleClick(data.id)">
          <img :src="data.image" alt="">
      </div>   
      <p>{{data.text}}</p>
      <div class="sheji">
          <span>设计师：{{data.name}}</span>   <van-tag mark type="success" class="right">找她做设计</van-tag>
      </div>   
    </div>

    
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import eventBus from '@/eventBus.js'
export default {
    data(){
    return{
      arr:[]
    }
  },
  components: {
    // Tabbar
  },
  created() {
      this.axios({
          url:"/shuma",
          method:"get"
      }).then((res)=>{
          this.arr = res.data
      })
  },
  methods: {
    handleClick (id) {
      // console.log(id)
      this.$router.push(`/xiangqing/${id}`) // 切换页面
    },
    fun(){
      eventBus.$emit("fuzhuang",this.arr)
      // console.log(this.arr)
    }
  },
  beforeDestroy() {
      eventBus.$emit("fuzhuang",this.arr)
  },
  components: {
    // Tabbar
  }
}
</script>
<style lang="scss" scoped>
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
.center{
  padding: 0.4rem 0 0.2rem 0;
  border-bottom: 2px solid #d8d5d5;
  .image{
      width: 3.5rem;
      height: 2rem;
      margin: 0 auto;
      position: relative;
      background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
      img{
          width: 100%;
          height: 100%;
      }
    }
    p{
      font-size: 0.18rem;
      font-weight: 800;
      margin-left: 0.1rem;
      font-family:  "YouYuan";
      padding: 0.1rem 0;
    }
}
.sheji{
    margin-left: 0.15rem;
    // margin-top: 0.rem;
    font-size: 0.14rem;
    .right{
        font-size: 0.1rem;
        margin-left: 1.5rem;
    }
}
</style>