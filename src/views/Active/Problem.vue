<template>
  <div  @click="fun()" class="ttop">
        <div class="bigbox">
          <div class="box" v-for="data in arr" :key="data.id" @click="handleClick(data.id)">
            <div class="top">
              <img :src="data.imgage" alt="">
            </div>
            <div class="center">
              <h4>{{data.title}}</h4>
              <p>{{data.txt}}</p>
            </div>
            <div class="bottom" >
              <span class="moree" >查看更多</span>
            </div>
            <div class="footer">
               <span class="iconfont">&#xe6ce;{{data.time}}</span>
               <span class="iconfont">&#xe616;常见问题</span>
               <span class="iconfont">&#xe650;{{data.hot}}</span>
               
            </div>
          </div>
        </div>
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import eventBus from '@/eventBus.js'
export default {
  components: {
    // Tabbar
  },
  data(){
    return{
      arr:[],

    }
  },
  created() {
    this.axios({
        url:"/problem",
        method:"get"
    }).then((res)=>{
        this.arr = res.data
    })
  },
  methods:{
    handleClick(id){
      this.$router.push(`/newsde/${id}`) // 切换页面
    },
    fun(){
      eventBus.$emit("mseg",this.arr)
    }
  }
}
</script>
<style lang="scss" scoped>

.ttop{
  margin-top: 1.9rem;
}
.bigbox{
  font-size: 0.16rem;
  background: #f2e9e9;
  padding: 0.1rem 0;
  .box{
    margin: 0.1rem;
    padding: 0.1rem 0;
    background: whitesmoke;
    .top{
      height: 2rem;
      width: 100%;
      margin: 0 auto;
       width: 95%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .center{
      margin: 0 auto;
      width: 95%;
      h3{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;//规定几行显示省略号
        -webkit-box-orient: vertical;
        color: #000;
        line-height: 0.3rem;
      }
      p{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;//规定几行显示省略号
        -webkit-box-orient: vertical;
        color: #666;
        line-height: 0.25rem;
      }
    }
    .bottom{
      margin: 0 auto;
      width: 95%;
      .moree{
        background: #ec6c58;
        color: #FFFFFF;
        display: inline-block;
        font-size: 0.12rem;
        width: 0.8rem;
        height: 0.25rem;
        line-height: 0.25rem;
        text-align: center;
        border-radius: 0.15rem;
        margin: 0.1rem 0;
      }
    }
    .footer{
      margin: 0 auto;
      width: 95%;
      .iconfont{
        color: black; 
      }
      span{
        padding-right: 0.3rem;
        font-size: 0.14rem;
      }
    }
  }
}
</style>
