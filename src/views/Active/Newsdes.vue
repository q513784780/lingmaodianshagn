<template>
  <div class="con">
    <div class="top">
        <div class="back" @click="handleClick">
            <span class="iconfont">&#xe66d;</span>
        </div>
        <div class="image">
            <img src="@/assets/logo_cases.png" alt="">
        </div>
    </div>
      <div class="box" v-for="data in array" :key="data.title">
        <h4 class="mytitle">{{data.title}}</h4>
        
        <div class="contanttext">
          <p style="margin:-0.06rem 0;font-size:0.12rem;color:#999;text-indent:0px;">发布时间：{{data.time}}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.wordsa}}</p>
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
        <div class="next">
          <p><span class="iconfont">&#xe675;</span>上一篇</p>
          <p>下一篇<span class="iconfont">&#xe673;</span></p>
        </div>
        <div class="poster">
          <img src="@/assets/poster.jpg" alt="">
        </div>
          
          <div class="toptitle">
            <p class="toptitleleft">大家都在看</p>
            <p class="toptitleright">查看更多<span class="iconfont">&#xe673;</span></p>
          </div>
          <div class="news">
            <div class="list">
              <div class="new" v-for="data in somearr.slice(0,3)" :key="data.id" @click="handclick(data.id)">
                <div class="left">
                  <img :src="data.imgage" alt="">
                </div>
                <div class="right">
                  <h3>{{data.title}}</h3>
                  <p class="time">{{data.time}}</p>
                  <p class="txt">{{data.txt}}</p>   
                </div>
              </div>
            </div>
            <Bottom></Bottom>
          </div>
        
      </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus.js'
import Bottom from '@/components/Bottom'

export default {
  components: {
    Bottom
  },
  data(){
    return{
        array:[],
        somearr:[]
    }
  },
  
  methods:{
    handleClick(){
      this.$router.back();
    },
    handclick(id){
      // console.log(id)
      // this.$router.push(`/newsde/${id}`)
      // console.log(this.somearr)
      // console.log(this.array)
      var id = id
      this.array = []
      this.somearr = []
      this.array = this.somearr[id]
      console.log(this.somearr[id])

      // 这个是想使用跳转路径来实现 but失败了
      // var num= this.somearr[id]
      // console.log(num)
      // this.$router.push(`/newsde/${num}`)


      
     
    }
  },
  created(){
    var that = this
    eventBus.$on("mseg",(val)=>{
        conosle.log(val)
      var data = val[this.$route.params.wangjins].details
      var arr = []
      arr.push(data)
      this.array = arr
      this.somearr= val
      console.log(arr)
    })
  },
  mounted(){
      this.handclick()

  },
  beforeDestroy() {
      eventBus.$off("mseg",this.arr)
  },
}
</script>
<style lang="scss" scoped>
.con{
    margin-bottom: 0.6rem;
}
.box{
    margin-bottom: 0.5rem;
    font-size: 0.14rem;
    padding-top: 0.5rem;
    h4{
      font-size: .2rem;
      color: #333;
      text-align: left;
      margin: 0.15rem auto;
      font-weight: 600;
    }
    p{
      margin: 0.12rem 0;
      line-height: 0.22rem;
    }
    .mytitle{
      width: 92%;
      line-height: 0.3rem;
      letter-spacing:2px;
    }
    .contanttext{
      width: 91%;
      margin: 0 auto;
      //  background: rgb(243, 237, 237);
      line-height: 0.26rem;
      p{
        text-indent:0.26rem;
        font-size: 0.14rem;
        color: #333;
        letter-spacing:1px;
        line-height: 0.25rem;
      }
    }
    .photo{
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
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
.next{
  width: 80%;
  font-size: 0.1rem;
  color: #666;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 0.2rem;
  p{
    span{
      font-size: 0.1rem;
    }
  }
}
.poster{
  overflow: hidden;
  width: 3.4rem;
  height: 0.65rem;
  margin: 0 auto;
  border-radius: 10px;
  background: red;
  img{
    width: 100%;
    height: 100%;
  }
}
.toptitle{
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 0.1rem;
  padding-top: 0.15rem;
  p{
    margin: 0.1rem 0 0.01rem 0;
  }
  .toptitleleft{
    font-size: 0.19rem;
    font-weight: 600;
    color: #333;
  }
  .toptitleright{
    color: #666666;
    font-size: 0.1rem;
    span{
      font-size: 0.1rem;
    }
  }
}
.list{
  font-size: 0.14rem;
  background-color: #fff;
  padding-top: 0.05rem;
  .new{
    display: flex;
    width: 90%;
    margin: 0.1rem auto;
    border: 1px solid #eeeeee;
    .left{
      margin: 0.09rem;
      border-radius: 0.02rem;
      img{
        width: 0.8rem;
        height: 0.8rem;
      }
    }
    
    .right{
      margin: 0.09rem;
      h3{
      font-size: 0.15rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p{
      margin: 0.06rem 0;
      line-height: 0.17rem;
       overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 0.11rem;
      color: #999;
      line-height: 0.16rem;
    }
      .time{
        font-size: 0.1rem;
        color: #999;
      }
    }
  }
}
</style>