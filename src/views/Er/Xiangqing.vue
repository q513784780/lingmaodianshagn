<template>
  <div class="xiangqing" >
      <Top></Top>
      <div class="bos" :key="menukey">
        <div class="contant">
            <div class="clicer"></div>
            <h3>项目介绍</h3>
        </div>
        <p>{{text}}</p>
        <div class="contant">
            <div class="clicer"></div>
            <h3>设计欣赏</h3>
        </div>

        <div class="eg" >
            <img :src="imagea" alt="">
            <img :src="imageb" alt="">
            <img :src="imagec" alt="">
            <img :src="imaged" alt="">
            <img :src="imagee" alt="">
            <img :src="imagef" alt="">
            <img :src="imageg" alt="">
            <img :src="imageh" alt="">
            <img :src="imagei" alt="">
            <img :src="imagej" alt="">
            <img :src="imagek" alt="">
            <img :src="imagel" alt="">
            <img :src="imagem" alt="">
            <img :src="imagen" alt="">
            <img :src="imageo" alt="">
            <img :src="imagep" alt="">
            <img :src="imageq" alt="">
            <img :src="imager" alt="">
            <img :src="images" alt="">
            <img :src="imaget" alt="">
            <img :src="imageu" alt="">
            <img :src="imagev" alt="">
            <img :src="imagew" alt="">
            <img :src="imagex" alt="">
            <img :src="imagey" alt="">
            <img :src="imagez" alt="">
            <img :src="imageaa" alt="">
            <img :src="imagebb" alt="">
            <img :src="imagecc" alt="">
            <img :src="imagedd" alt="">
            <img :src="imageee" alt="">
            <img :src="imageff" alt="">
            <img :src="imagegg" alt="">
            <img :src="imagehh" alt="">
            <img :src="imageii" alt="">
            <img :src="imagejj" alt="">
            <img :src="imagekk" alt="">
            <img :src="imagell" alt="">
            <img :src="imagemm" alt="">
            <img :src="imagenn" alt="">
            <img :src="imageoo" alt="">
            <img :src="imagepp" alt="">
            <img :src="imageqq" alt="">
            <img :src="imagerr" alt="">
            <img :src="imagess" alt="">
            <img :src="imagett" alt="">
            <img :src="imageuu" alt="">
            <img :src="imagevv" alt="">
            <img :src="imageww" alt="">
            <img :src="imagexx" alt="">
            <img :src="imageyy" alt="">
            <img :src="imagezz" alt="">
        </div>
     <Bottom></Bottom>

      </div>
      
     
     <!-- 底部的 -->
  </div>
</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
export default {
    data(){
        return{
            imagea:null,
            imageb:null,
            imagec:null,
            imaged:null,
            imagee:null,
            imagef:null,
            imageg:null,
            imageh:null,
            imagei:null,
            imagej:null,
            imagek:null,
            imagel:null,
            imagem:null,
            imagen:null,
            imageo:null,
            imagep:null,
            imageq:null,
            imager:null,
            images:null,
            imaget:null,
            imageu:null,
            imagev:null,
            imagew:null,
            imagex:null,
            imagey:null,
            imagez:null,
            imageaa:null,
            imagebb:null,
            imagecc:null,
            imagedd:null,
            imageee:null,
            imageff:null,
            imagegg:null,
            imagehh:null,
            imagehh:null,
            imageii:null,
            imagejj:null,
            imagekk:null,
            imagell:null,
            imagemm:null,
            imagenn:null,
            imageoo:null,
            imagepp:null,
            imageqq:null,
            imagerr:null,
            imagess:null,
            imagett:null,
            imageuu:null,
            imagevv:null,
            imageww:null,
            imagexx:null,
            imageyy:null,
            imagezz:null,
            name:null,
            text:null,
            // isShow:true,
            menukey:1
        }
    },
    components: {
        Top,
        Bottom
    },
    created() {
    // console.log(this.$route.params.wangjinid,"利用id去请求接口数据")
        this.axios({
            url:`/fuzhuang`,
            method:"get"
        }).then((res)=>{
            console.log(res.data[this.$route.params.wangjinid])
            this.menuTree = res.data[this.$route.params.wangjinid]

            var obj = res.data[this.$route.params.wangjinid]
            for(let key in  obj){
                this.imagea = obj.imagea
                this.imageb = obj.imageb
                this.imagec = obj.imagec
                this.imaged = obj.imaged
                this.imagee = obj.imagee
                this.imagef = obj.imagef
                this.imageg = obj.imageg
                this.imageh = obj.imageh
                this.imagei = obj.imagei
                this.imagej = obj.imagej
                this.imagek = obj.imagek
                this.imagel = obj.imagel
                this.imagem = obj.imagem
                this.imagen = obj.imagen
                this.imageo = obj.imageo
                this.imagep = obj.imagep
                this.imageq = obj.imageq
                this.imager = obj.imager
                this.images = obj.images
                this.imaget = obj.imaget
                this.imageu = obj.imageu
                this.imagev = obj.imagev
                this.imagew = obj.imagew
                this.imagex = obj.imagex
                this.imagey = obj.imagey
                this.imagez = obj.imagez
                this.imageaa = obj.imageaa
                this.imagebb = obj.imagebb
                this.imagecc = obj.imagecc
                this.imagedd = obj.imagedd
                this.imageee = obj.imageee
                this.imageff = obj.imageff
                this.imagegg = obj.imagegg
                this.imagehh = obj.imagehh
                this.imageii = obj.imageii
                this.imagejj = obj.imagejj
                this.imagekk = obj.imagekk
                this.imagell = obj.imagell
                this.imagemm = obj.imagemm
                this.imagenn = obj.imagenn
                this.imageoo = obj.imageoo
                this.imagepp = obj.imagepp
                this.imageqq = obj.imageqq
                this.imagerr = obj.imagerr
                this.imagess = obj.imagess
                this.imagett = obj.imagett
                this.imageuu = obj.imageuu
                this.imagevv = obj.imagevv
                this.imageww = obj.imageww
                this.imagexx = obj.imagexx
                this.imageyy = obj.imageyy
                this.imagezz = obj.imagezz
                this.text = obj.text
            }
            
            
        })
    },
    // watch:{
    //     menuTree(){
    //         this.isShow = false
    //         this.$nextTick(()=>{
    //         this.isShow = true
    //         })
    //     }
    // }
     watch:{
            menuTree(){
               ++this.menukey
           }
      }
}
</script>
<style lang="scss" scoped>
.xiangqing{
   .bos{
    // margin-top: 0.5rem;
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
        }
    }
    .eg{
        width: 90%;
        height: auto;
        margin: 0 auto;
        font-size: 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
   }
}
// 底部的
</style>

