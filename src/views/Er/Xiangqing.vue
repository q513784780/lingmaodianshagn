<template>
  <div class="xiangqing" >
      <Top></Top>
      <div class="bos" v-for="data in array" :key="data.id">
        <div class="contant">
            <div class="clicer"></div>
            <h3>项目介绍</h3>
        </div>
        <p>{{data.text}}</p>
        <div class="contant" >
            <div class="clicer"></div>
            <h3>设计欣赏</h3>
        </div>

        <div class="eg"  >
            <img :src="data.imagea" alt="">
            <img :src="data.imageb" alt="">
            <img :src="data.imagec" alt="">
            <img :src="data.imaged" alt="">
            <img :src="data.imagee" alt="">
            <img :src="data.imagef" alt="">
            <img :src="data.imageg" alt="">
            <img :src="data.imageh" alt="">
            <img :src="data.imagei" alt="">
            <img :src="data.imagej" alt="">
            <img :src="data.imagek" alt="">
            <img :src="data.imagel" alt="">
            <img :src="data.imagem" alt="">
            <img :src="data.imagen" alt="">
            <img :src="data.imageo" alt="">
            <img :src="data.imagep" alt="">
            <img :src="data.imageq" alt="">
            <img :src="data.imager" alt="">
            <img :src="data.images" alt="">
            <img :src="data.imaget" alt="">
            <img :src="data.imageu" alt="">
            <img :src="data.imagev" alt="">
            <img :src="data.imagew" alt="">
            <img :src="data.imagex" alt="">
            <img :src="data.imagey" alt="">
            <img :src="data.imagez" alt="">
            <img :src="data.imageaa" alt="">
            <img :src="data.imagebb" alt="">
            <img :src="data.imagecc" alt="">
            <img :src="data.imagedd" alt="">
            <img :src="data.imageee" alt="">
            <img :src="data.imageff" alt="">
            <img :src="data.imagegg" alt="">
            <img :src="data.imagehh" alt="">
            <img :src="data.imageii" alt="">
            <img :src="data.imagejj" alt="">
            <img :src="data.imagekk" alt="">
            <img :src="data.imagell" alt="">
            <img :src="data.imagemm" alt="">
            <img :src="data.imagenn" alt="">
            <img :src="data.imageoo" alt="">
            <img :src="data.imagepp" alt="">
            <img :src="data.imageqq" alt="">
            <img :src="data.imagerr" alt="">
            <img :src="data.imagess" alt="">
            <img :src="data.imagett" alt="">
            <img :src="data.imageuu" alt="">
            <img :src="data.imagevv" alt="">
            <img :src="data.imageww" alt="">
            <img :src="data.imagexx" alt="">
            <img :src="data.imageyy" alt="">
            <img :src="data.imagezz" alt="">
        </div>
      </div>
      <div class="bot">
        <Bottom></Bottom>
      </div>

  </div>
</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
import EventBus from '@/eventBus.js'


export default {
    data(){
        return{
            array:[]
        }
    },
    components: {
        Top,
        Bottom
    },
    created(){
        EventBus.$on("fuzhuang",(val)=>{
        var data = val[this.$route.params.wangjinid]
        var arr = []
        arr.push(data)
        this.array = arr
        })
    },
    destroyed(){
        // $eventBus.$emit('fuzhuang',data)
    EventBus.$off('fuzhuang',this.arr)

    },
}
</script>
<style lang="scss" scoped>
.bot{
    margin-bottom: 0.45rem;
}
.xiangqing{
   .bos{
    // margin-top: 0.5rem;.
    position: relative;
    top: 0.5rem;
    left: 0;
    font-size: 0.16rem;
    height: auto;
    p{
        margin-left: 0.2rem;
        font-size: 0.2rem;
    }
    .contant{
        display: flex;
        font-size: 0.16rem;
        margin: 0.2rem ;
        .clicer{
            width: 0.08rem;
            height: 0.25rem;
            background: #2fd0b5;
            border-radius: 3px;
        }
        h3{
            padding-left: 0.2rem;
            font-size: 0.14rem;
        }
    }
    .eg{
        width: 90%;
        height: auto;
        margin: 0 auto;
        font-size: 0;
        margin-bottom: 0.5rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
   }
}
</style>

