<template>
  <div class="home">
    <Swiper></Swiper>
    <!-- 中间的很奇怪的东西 -->
    <div class="top">
        <div class="topbar">
        <div class="anli" @click="wangdian">
          <span class="iconfont">&#xe6b8;</span>
        </div>
        <p>网店托管</p>
      </div>

        <div class="topbar">
          <div class="anli" @click="kefu">
            <span class="iconfont">&#xe604;</span>
          </div>
          <p>客服外包</p>
        </div>

        <div class="topbar">
          <div class="anli" @click="zhibo">
            <span class="iconfont">&#xe728;</span>
          </div>
          <p>直播托管</p>
        </div>
      
        <div class="topbar">
          <div class="anli" @click="zhitongche">
            <span class="iconfont">&#xe654;</span>
          </div>
          <p>直通车托管</p>
        </div>

    </div>
        
    <div class="bom">
        <div class="topbar">
          <div class="anli" @click="zhuangxiu">
            <span class="iconfont">&#xe970;</span>
          </div>
          <p>网店装修</p>
        </div>
      
        <div class="topbar">
          <div class="anli" @click="paishe">
            <span class="iconfont">&#xe671;</span>
          </div>
          <p>产品拍摄</p>
        </div>
      
        <div class="topbar">
          <div class="anli" @click="sheji">
            <span class="iconfont">&#xe617;</span>
          </div>
          <p>品牌设计</p>
        </div>
      
        <div class="topbar">
          <div class="anli" @click="jianshe">
            <span class="iconfont">&#xe661;</span>
          </div>
          <p>网站建设</p>
        </div>
      
    </div>


    <!-- 经典案列 -->
      <div class="exp">
        <div class="exptitle">
          <h4>经典案列<span @click="anlimore">MORE</span >
          </h4>
        </div>
        <div class="expbottom">
          <!-- 准备坐上一个轮播图 -->
           <van-swipe class="my-swipe banner" :show-indicators="false">
              <van-swipe-item>
                <div class="bcenter">
                  <img src="@/assets/1.jpg" alt="" @click="handleClick">
                  <!-- <p>九叶蓝绞股龙须茶首页</p> -->
                </div>
              </van-swipe-item>
              <van-swipe-item>
                 <div class="bcenter">
                  <img src="@/assets/750.jpg" alt="" @click="handleClicka">
                  <!-- <p>美味十足食品店铺首页</p> -->
                </div>
              </van-swipe-item>
            </van-swipe>
        </div>
      </div>
      <!-- 文化短片 -->
       <div class="list moretop">
        <div class="icon"></div><span>文化短片</span><span class="more" @click="videomore">MORE</span>
      </div>
      <div class="shipin">
        <video src="http://www.lingmaodianshang.com/v/lmds.mp4" controls poster="http://www.lingmaodianshang.com/v/lmds.png"></video>
      </div>

      <!-- 合作品牌 -->
      <div class="list moretop">
        <div class="icon"></div><span>合作品牌</span><span class="more" @click="hezuomore">MORE</span>
      </div>

      <div class="hezuo">
         <swiper :Hangkou="{
            slidesPerView: 5,
            slidesPerColumn: 3,
            slidesPerColumnFill:column,
            freeMode: true,
            autoplay:true
          }">
            <div class="swiper-slide" v-for="data in looplist" :key="data.img" >
              <img :src="data.img"/>
            </div>
          </swiper>
      </div>
    <!-- 四个板块 -->
    <div class="list">
      <div class="icon"></div><span>企业文化</span>
    </div>
    <div class="xiantiao">
      <div class="bigbox">
      <div class="smallbox">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589433332284&di=49b0a0f870af03d86c2551d3e7fe12f8&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2e8666da7480e293d13e97e24052441ee5d1316d3683d-qasifT_fw658" alt="">
        <!-- <p>精神理念</p> -->
      </div>
      <div class="smallbox" @click="dashiji">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=563098919,1429226921&fm=26&gp=0.jpg" alt="">
        <!-- <p>大事记</p> -->
      </div>
    </div>
    <div class="bigbox">
      <div class="smallbox">
        <img src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00677-3692.jpg" alt="">
        <!-- <p>旅游版图</p> -->
      </div>
      <div class="smallbox">
        <a href="http://gongyi.lingmaodianshang.com/"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3622578816,50077515&fm=26&gp=0.jpg" alt=""></a>
        <!-- <p>灵猫公益</p> -->
      </div>
    </div>
    </div>
     <!-- 时间轴 -->
      <div class="list">
      <div class="icon"></div><span>灵猫动态</span><span class="more" @click="news">MORE</span>
    </div>
      <div class="shijianzhou"  v-for="data in arr.slice(0,3)" :key="data.id">
        <div class="zhanshi">
          <div class="zhanshileft">
            <h4>{{data.time}}</h4>
            <div class="leftbottom">
              <p>{{data.title}}</p>
            </div>
            <div class="yuandian">
              <div class="xiaoyuandian"></div>
            </div>
          </div>
          <div class="zhanshiright">
            <div class="mixNewsStyleImgBox7_right">
              <div class="newsTitlePic J_newsTitlePic J_img_lazyload">
                <svg width="164" height="103">
                  <defs>
                    <clipPath id="clippath3020">
                      <polygon points="7 0,164 0,164 103,7 103,7 40,2 34,7 28">
                      </polygon>
                    </clipPath>
                  </defs>
                  <image :href="data.imgage" width="159" height="103" style="clip-path: url(&quot;#clippath3020&quot;);">
                  </image>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="shijianzhou">
        <div class="zhanshi">
          <div class="zhanshileft">
            <h4>2020/5/14</h4>
            <div class="leftbottom">
              <p>谁能看透我的，眼睛让我能够不再失明，记住你的样子，像鱼记住水的拥抱</p>
            </div>
            <div class="yuandian">
              <div class="xiaoyuandian"></div>
            </div>
          </div>
          <div class="zhanshiright">
            <div class="mixNewsStyleImgBox7_right">
              <div alt="文章封面图" src-original="//13791877.s61i.faiusr.com/2/AD0IheXJBhACGAAg39fBzwUomrnZowUw_QI40QE!640x640.jpg" class="newsTitlePic J_newsTitlePic J_img_lazyload">
                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="103">
                  <defs>
                    <clipPath id="clippath3020">
                      <polygon points="7 0,164 0,164 103,7 103,7 40,2 34,7 28">
                      </polygon>
                    </clipPath>
                  </defs>
                  <image xmlns:xlink="http://www.w3.org/1999/xlink" alt="文章封面图" xlink:href="http://img2.imgtn.bdimg.com/it/u=136930387,2338488259&fm=26&gp=0.jpg" preserveAspectRatio="none" width="164" height="103" style="clip-path: url(&quot;#clippath3020&quot;);">
                  </image>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shijianzhou">
        <div class="zhanshi">
          <div class="zhanshileft">
            <h4>2020/5/14</h4>
            <div class="leftbottom">
              <p>我要忘了你的样子，像鱼忘了海的味道，放下所有梦和烦恼，却放不下回忆的乞讨</p>
            </div>
            <div class="yuandian">
              <div class="xiaoyuandian"></div>
            </div>
          </div>
          <div class="zhanshiright">
            <div class="mixNewsStyleImgBox7_right">
              <div alt="文章封面图" src-original="//13791877.s61i.faiusr.com/2/AD0IheXJBhACGAAg39fBzwUomrnZowUw_QI40QE!640x640.jpg" class="newsTitlePic J_newsTitlePic J_img_lazyload">
                <svg xmlns="http://www.w3.org/2000/svg" width="164" height="103">
                  <defs>
                    <clipPath id="clippath3020">
                      <polygon points="7 0,164 0,164 103,7 103,7 40,2 34,7 28">
                      </polygon>
                    </clipPath>
                  </defs>
                  <image xmlns:xlink="http://www.w3.org/1999/xlink" alt="文章封面图" xlink:href="http://img5.imgtn.bdimg.com/it/u=1741511873,2652367264&fm=26&gp=0.jpg" preserveAspectRatio="none" width="164" height="103" style="clip-path: url(&quot;#clippath3020&quot;);">
                  </image>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="clear"></div>
      <!-- 联系我们 -->
      <div class="footer">
        <div class="footertop">
          <div class="lingmao">
            <img src="@/assets/lingmao.png" alt="">
            <p class="zhaoshang">400-009-1355</p>
          </div>
        </div>
        <div class="footerbottom">
          <p>友情链接:九叶蓝</p>
          <p>联系电话:029-61682100 <span class="tousu">投诉建议:18392559553</span></p>
          <p>地址:西安市雁塔区电子三路 <span class="tousu">版权所有:西安灵猫电子科技有限公司</span></p>
          <div class="secuiity"><img src="http://res.der-matech.com.cn/7035846.png" alt="" ></div><span>陕ICP备19002013号-1 <span>&nbsp;</span><span class="tousu">2012-2020 All Rights Reserved</span></span>
        </div>
      </div>
      
   
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Swiper from '@/components/Swiper'
import "@/assets/iconfont/iconfont.css";

import swiper from '@/components/Swiperone'
export default {
  data(){
    return {
      looplist:[
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/1.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/2.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/3.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/4.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/5.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/6.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/7.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/8.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/9.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/10.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/11.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/12.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/13.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/14.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/15.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/16.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/17.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/18.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/19.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/20.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/21.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/22.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/23.png'},
        {img:'http://www.lingmaodianshang.com/uploads/hezuokehu/24.png'}
      ],
      arr:[]
    }
  },
  methods:{
    handleClick(){
      this.$router.push("anli")
    },
    handleClicka(){
      this.$router.push("feisifu")
    },
    anlimore(){
      this.$router.push("anlimore")
    },
    videomore(){
      this.$router.push("videomore")
    },
    hezuomore(){
      this.$router.push("hezuomore")
    },
    dashiji(){
      this.$router.push("dashiji")
    },
    news(){
      this.$router.push("activemore")
    },
    wangdian(){
      this.$router.push("wangdiantuoguan")
    },
    kefu(){
      this.$router.push("kefuwaibao")
    },
    zhibo(){
      this.$router.push("zhibotuoguan")
    },
    zhitongche(){
      this.$router.push("zhitongchetuoguan")
    },
    zhuangxiu(){
      this.$router.push("Wangdianzhaungxiu")
    },
    paishe(){
      this.$router.push("chanpinpaishe")
    },
    sheji(){
      this.$router.push("pinpaisheji")
    },
     jianshe(){
      this.$router.push("wangzhanjianshe")
    },



  },

beforeRouteLeave (to, from, next) {
//离开该页面的时候把高度记录
    window.CateListScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    next()
  },
  activated() { 
//返回的时候滚动到记录的高度
//延时200ms，不延迟滚动的话，有商品页内容高度比较小的情况就返不回原来的位置
    setTimeout(() => {
      window.scrollTo(0, window.CateListScrollTop);
    } );
  },
  components: {
    Tabbar,
    Swiper,
    swiper
  },
  created() {
    this.axios({
        url:"/new",
        method:"get"
    }).then((res)=>{
        this.arr = res.data
        console.log(this.arr)
    })
  },
}
</script>
<style lang="scss" scoped>
// 很奇怪的那些东西
.top{
   display: flex;
  //  justify-content: space-around;
   flex-wrap: wrap;
   margin-top: 0.15rem;
}
.bom{
  // margin-top: -0.16rem;
}
.topbar{
  font-size: 0.12rem;
  display: inline-block;
  margin: 0 0.12rem 0 0.25rem;
  p{
    padding-top: 0.09rem;
  }
}
.anli{
  width: 0.5rem;
  height: 0.5rem;
  background: #049483;
  border-radius: 50%;
  span{
    width: 0.2rem;
    height: 0.2rem;
    font-size: 0.24rem;
    color: white;
    line-height: 0.5rem;
    margin-left: 0.13rem;
  }
}
// 案列展示
.exp{
  width: 100%;
  height: 6rem;
  background:	url(http://www.lingmaodianshang.com/templets/Images/wallpaper5.jpg);
  background-size: 100%;
  clip-path: polygon(0 0, 100% 0,100% 100%,0 calc(100% - 15px));
  font-size: 0.2rem;
  color: white;
  // margin-top: 0.16rem;
  .exptitle{
    padding: 0.2rem 0;
    text-align: center;
      span{
        margin-left: 0.8rem;
        font-size: 0.12rem;
        padding: 0.03rem;
        border: 1px dotted  #049483;
        color: #049483;
      }
    h4{
      margin-left: 1.3rem;
    font-size: 0.16rem;
    }
  }
  .bcenter{
    width: 94%;
    height: 5rem;
    margin: 0 auto;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    p{
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 0.1rem;
      background: rgba(240, 128, 128, 0.5);
      padding: 0.1rem 0;
      font-size: 0.16rem;
    }
  }
}
// 那个滑块就是类似于轮播图
.banner{
  width: 100%;
  height: 5rem;
  // background: yellow;
  margin: 0 auto;
  img{
    width: 100%;
    height: 100%;
  }
}
.fist{
  font-size: 0.16rem;
}
.last{
  font-size: 0.09rem;
}
.row{
    font-size: 0.14rem;
}
.timechuo{
  display: flex;
  .timeleft{
    font-size: 0.16rem;
  }
}
// 文化短片
.shipin{
  width: 96%;
  height: 2.2rem;
  margin: 0 auto;
  video{
    width: 100%;
    height: 96%;
  }
}

// 合作品牌
.more{
  padding: 0.02rem;
  border: 1px dotted #049483;
  color: #049483;
  font-size: 0.1rem;
  margin-left: 2.2rem;
}
.listhezuo{
  // text-align: center;
  font-size: 0.2rem;
  color: #049483;
  padding-top: 0.2rem ;
  font-weight: 500;
  margin-bottom: 0.06rem;
  margin-left: 1.4rem;
  // background: url(http://www.lingmaodianshang.com/templets/Images/wallpaper5.jpg)no-repeat;
  // background-size: 100%;
  span{
    padding: 0.03rem;
    font-size: 0.1rem;
    border: 1px dotted  #049483;
    color: #049483;
    margin-left: 0.9rem;
  }
}
.hezuo{
  background: url(http://www.lingmaodianshang.com/templets/Images/wallpaper5.jpg);
  background-size: 100%;
  height:2.04rem;
  padding-top: 0.1rem;
}
.swiper-slide{
  line-height: 0.2rem;
  padding-top: 0.06rem;
  width: 0.2rem;
  height: 0.6rem;
  img{
    width: 70%;
    height: 85%;
  }
}
.swiper-container{
  margin-left: 0.1rem;
}
// 四个板块
.list{
  font-size: 0.16rem;
  color: #049483;
  font-weight: 500;
  margin: 0.16rem 0;
}
.icon{
  display: inline-block;
  background: #049483;
  width: 0.06rem;
  height: 0.06rem;
  border-radius: 50%;
  margin-right: 0.1rem;
  margin-left: 0.16rem;
  margin-bottom: 0.02rem;
}
.dian{
  font-size: 0.2rem;
  padding: .08rem 0.15rem;
  border-bottom: 1px solid #CDC5BF;
  color: 	#049483;
}
.xiantiao{
  border-bottom: 6px solid #CDC5BF;
}
.bigbox{
  display: flex;
  font-size: 0.12rem;
  padding-left: 0.1rem;
  .smallbox{
    width: 50%;
    height: 1.2rem;
    padding: 0 0.1rem 0.1rem 0;
    p{
      text-align: center;
      margin-bottom: 0.1rem;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
// 时间轴
// .shijianzhou{
//   margin-bottom: 0.5rem;
// }
.zhanshi{
  font-size: 0.16rem;
  display: flex;
  .zhanshileft{
    padding: 0.15rem;
    border-right: 2px  solid #e4e4e4;
    position: relative;
    width: 1.31rem;
    height: 1rem;
    h4{
      padding: 0.06rem 0;
      font-size: 0.16rem;
    }
    .leftbottom{
      height: 0.6rem;
      overflow: hidden;
      // font-weight: 400;
      p{
        color: #848e98;
        font-size: 0.13rem;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .zhanshiright{
    width: 60%;
    height: 1.2rem;
    .tupian{
      width: 80%;
      height: 1rem;
      margin: 0.15rem auto;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.newsTitlePic {
  svg{
    margin: 0.1rem 0.2rem 0.1rem 0.3rem;
  }
}
.yuandian{
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  border: 2px solid rgba(206,206,206,1);
  background: white;
  position: absolute;
  top: 0.4rem;
  left: 94%;
  z-index: 10;
  .xiaoyuandian{
    width: 0.12rem;
    height: 0.12rem;
    border-radius: 50%;
    background: rgba(206,206,206,1);
    position: absolute;
    left: 15%;
    top: 15%;
  }
}
.clear{
  height: 0.3rem;
}
// 联系我们
.zhaoshang{
  color: #00bda2;
  font-size: 0.26rem;
  font-weight: 600;
}
.footer{
  height: 2.54rem;
  background: #212121;
  font-size: 0.1rem;
  text-align: center;
  color: #999;
  margin-bottom: 0.42rem;
  .footertop{
    color: #FFFFFF;
    padding-top: 0.2rem;
    padding-bottom: 0.15rem;
    border-bottom: 1px solid 	#2c2b2b;
    .lingmao{
      img{
        width: 2.6rem;
        height: 0.52rem;
      }
    }
  }
  p{
    margin-top: 0.04rem;
  }
  img{
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.1rem;
  }
}
.secuiity{
  display: inline-block; 
  width: 0.1rem;
  height: 0.1rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.footercenter{
  width: 1.2rem;
  height: 0.5rem;
  padding-right: 0.1rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.gongan{
  width: 0.12rem;
  height: 0.12rem;
}
.footerbottom{
  margin:  0.13rem 0;
}
// 底部挤出去的span标签
.tousu{
  padding-left: 0.1rem;
}

</style>
