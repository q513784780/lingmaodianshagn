<template>
  <div class="cont">
      <Top></Top>
      
        <div class="top">
            <div class="text">
                <p>COOPERATION</p>
                <p class="textb">他们与灵猫电商长期合作</p>
            </div>
            <div class="bigbox">
                <div class="smallbox" v-for="data in arr" :key="data.image">
                    <img :src="data.image" alt="">
                </div>
            </div>
            <van-pagination v-model="currentPage" :total-items="20" page-count="5" :items-per-page="4" @change="handClick(currentPage)"/>

        </div>
        <!-- <div class="clear"></div> -->
        <Bottom></Bottom>
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'

export default {
    data(){
        return {
            arr: [],
            currentPage: 1,
        }
    },
    components: {
    Top,
    Bottom
    },
    created() {
        this.axios({
            url:"/hezuopinpai",
            method:"get"
        }).then((res)=>{
            this.arr = res.data
        })
    },
    methods:{
        handClick(currentPage){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          switch(currentPage){
            case 1:this.axios({url:"/hezuopinpai",method:"get"}).then((res)=>{
                this.arr = res.data
                })
                break;
            case 2:this.axios({url:"/hezuopinpaia",method:"get"}).then((res)=>{
                this.arr = res.data
                })
                break;
            case 3:this.axios({url:"/hezuopinpaib",method:"get"}).then((res)=>{
                this.arr = res.data
                })
                break;
            case 4:this.axios({url:"/hezuopinpaic",method:"get"}).then((res)=>{
                this.arr = res.data
                })
                break;
            case 5:this.axios({url:"/hezuopinpaid",method:"get"}).then((res)=>{
                this.arr = res.data
                })
                break;
                  
          }
          
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/ .van-pagination__item--active{
    background-color: #049483!important; 
    color: white!important;
}
/deep/ .van-pagination__item{
    color: #049483;
    font-weight: 700;
}

.cont{
    margin-bottom: 0.5rem;
}
.top{
    position: relative;
    top: 0.5rem;
    height: 100%;
    background: url(http://www.lingmaodianshang.com/templets/Images/wallpaper4.jpg);
    background-size:120%;
    margin-bottom: 0.5rem;
}
.bigbox{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-around;
    padding-bottom: 0.6rem;
    margin-top: -0.5rem;
    .smallbox{
        width: 25%;
        height: 0.7rem;
        padding: 0 0.1rem;
        box-sizing: border-box;
        margin-bottom: 0.1rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
// .clear{
//     height: 0.5rem;
// }
.text{
    width: 100%;
    // height: 0.5rem;
    // background: url(http://www.lingmaodianshang.com/templets/Images/words.png) no-repeat -152px -528px
    p{
        font-size: 0.4rem;
        color: #00dfb9;
        text-align: center;
        font-weight: 900;
        font-family: "YouYuan";
    }
    .textb{
        font-size: 0.16rem;
        color: black;
        font-weight: 600;
        margin:0 0 0.1rem  0;
    }
}
</style>