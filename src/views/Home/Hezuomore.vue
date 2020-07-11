<template>
  <div>
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
        </div>
        <div class="clear"></div>
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
            arr: []
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
            console.log(res.data)
            this.arr = res.data
        })
    },
}
</script>
<style lang="scss" scoped>
.top{
    position: relative;
    top: 0.5rem;
    height: 100%;
    background: url(http://www.lingmaodianshang.com/templets/Images/wallpaper4.jpg)repeat;
    // background-size:100% 100%;
}
.bigbox{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-around;
    padding-bottom: 0.2rem;
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
.clear{
    height: 0.5rem;
}
.text{
    width: 100%;
    height: 0.5rem;
    // background: url(http://www.lingmaodianshang.com/templets/Images/words.png) no-repeat -152px -528px;
    // background: red;
    padding: 0.2rem 0;
    p{
        font-size: 0.4rem;
        color: #00dfb9;
        text-align: center;
        font-weight: 400;
        font-family: "YouYuan";
    }
    .textb{
        font-size: 0.16rem;
        color: black;
        font-weight: 600;
    }
}
</style>