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
      <div class="box" v-for="data in array" :key="data.title">
        <h2>{{data.title}}</h2>
          <p>{{data.wordsa}}</p>
          <div class="photo">
            <img :src="data.photoa" alt="">
          </div>
          <p>{{data.wordsb}}</p>
          <div class="photo">
            <img :src="data.photob" alt="">
          </div>
          <p>{{data.wordsc}}</p>
          <div class="photo">
            <img :src="data.photoc" alt="">
          </div>
          <p>{{data.wordsd}}</p>
          <p>{{data.wordse}}</p>
          <p>{{data.wordsf}}</p>
          <p>{{data.wordsg}}</p>
          <p>{{data.wordsh}}</p>
          <p>{{data.wordsl}}</p>
          <p>{{data.wordsm}}</p>
          <p>{{data.wordsn}}</p>
          <p>{{data.wordso}}</p>
          <p>{{data.wordsp}}</p>
          <p>{{data.wordsq}}</p>
          <p>{{data.wordsr}}</p>
          <p>{{data.wordss}}</p>

      </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus.js'

export default {
  components: {

  },
  data(){
    return{
        array:[]
    }
  },
  methods:{
    handleClick(){
        this.$router.back();
      }
  },
  mounted(){
    var that = this
    eventBus.$on("mseg",(val)=>{
      var data = val[this.$route.params.news].details
      var arr = []
      arr.push(data)
      this.array = arr
    })
  }
  // created() {
  //   this.axios({
  //       url:"/new",
  //       method:"get"
  //   }).then((res)=>{
  //       console.log(res.data[this.$route.params.news].details)
  //       var data = res.data[this.$route.params.news].details
  //       var arr = []
  //       arr.push(data)
  //       this.array = arr

  //   })
  // },
}
</script>
<style lang="scss" scoped>
.box{
    font-size: 0.14rem;
    line-height: 0.3rem;
    margin: 0.2rem 0.1rem;
    padding-top: 0.5rem;
    .photo{
        width: 100%;
        // height: 2.4rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
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