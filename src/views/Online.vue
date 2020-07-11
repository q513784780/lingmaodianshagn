<template>
  <div>
    <!-- <Tabbar></Tabbar> -->
    <Top></Top>
    <div class="top">
      <h3>发展历程</h3>
      <h5>自2010年创立以来，致力于专业电商外包，打造西北值得信赖的第三方网店服务品牌</h5>
      <p class="english">Since it was founded in 2010, it is committed to outsourcing professional business and building a trusted third party store service brand in Northwest China</p>
    </div>
    

    <div class="contant">
      <div class="one">
        <p>2010年成立至今</p>
      </div>
      <div class="tow">
        <h4 class="towrighttop">2010</h4>
        <h6 class="towrightcenter">2010年公司成立</h6>
        <p class="towightbottom">灵猫电商工作室创立，是全国最先涉及网店服务的三家之一</p>

        <h4 class="towlefttop">2011</h4>
        <h6 class="towleftcenter">2011年3月</h6>
        <p class="towleftbottom">工作室服务客户达到<span>1000家</span></p>
      </div>
      <div class="three">
        <h4 class="threerighttop">2012</h4>
        <h6 class="threerightcenter">2012年工作室升级为公司</h6>
        <!-- <p class="threerightbottom">2012年5月工作室升级为公司，员工20人</p> -->
        <p class="threerightbottom">2012年9月灵猫电商员工旅游版图出图出炉，第一站：<span>陕西大秦岭</span></p>

        <h4 class="threecentertop">2013</h4>
        <h6 class="threecentercenter">2013年业绩突飞猛进</h6>
        <p class="threecenterbottom">2013年10月公司业绩突飞猛<br>进，服务客户达到<span>4000家</span></p>

        <h4 class="threebotop">2014</h4>
        <h6 class="threebocenter">灵猫电商成为中国知名电商品牌</h6>
        <p class="threebobottom">
          <!-- 2014年灵猫电商员工旅游第二站出发：<span>云南</span><br> -->
        2014年入住<span>阿里巴巴</span>旗下淘宝买家服务市场</p>
      </div>
      <div class="four">
        <h4 class="fourrightt">2015</h4>
        <h6 class="fourrightc">商家突破1000家，员工200多人</h6>
        <p class="fourrightb">2015年1月中国四大名酒之一<span>西凤酒</span>天猫专卖店同灵猫电商达成合作</p>

        <h4 class="fourleftt">2016</h4>
        <h6 class="fourleftc">灵猫电商宣传片成<br>为CCTV展播品牌</h6>
        <p class="fourleftb">灵猫电商宣传片在<span>CCTV2</span>和<span>CCTV7</span>同步播出，成为唯一一家上榜央视的网店服务商</p>
      </div>
      <div class="five">
        <h4 class="fivet">2017</h4>
        <h6 class="fivec">灵猫电商提出了立足陕西，辐射全国，跨国合作的新理念</h6>
        <p class="fiveb">2017年2月灵猫电商与中国互联网时装品牌<span>“妖精的口袋”</span>专卖店合作成功</p>
      </div>
      <div class="six"></div>
    </div>

  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
import Top from '@/components/Top'


export default {
  components: {
    // Tabbar
    Top

  }
}
</script>
<style lang="scss" scoped>
span{
  font-size: 0.12rem;
  font-weight: 600;
}
.top{
  width: 100%;
  height: 2rem;
  background: url(http://www.lingmaodianshang.com/dashiji/image/bg_01.jpg)no-repeat;
  background-size: 100% 100%;
  color: white;
  font-size: 0.16rem;
  h3{
    display: inline-block;
    margin: 0.2rem 0.1rem 0 0.1rem;
    border-bottom: 2px solid #049483;
  }
  h5{
    padding: 0.15rem 0.1rem 0rem 0.1rem;
  }
  p{
    padding: 0.1rem 0.1rem 0rem 0.1rem;
  }
  .english{
    font-size: 0.1rem;
  }
}
.contant{
  // height: 2rem;
  // background: red;
  font-size: 0.1rem;
  .one{
    height: 0.6rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2010-17_02.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
    p{
      font-size: 0.1rem;
      position: absolute;
      top: 0.34rem;
      left: 1.5rem;
    }
  }
  .tow{
    height: 1rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2010-17_03.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
    .towrighttop{
      position: absolute;
      top: 0.1rem;
      right: 1.38rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .towrightcenter{
      position: absolute;
      top: 0.75rem;
      right: 1rem;
      font-size: 0.1rem;
    }
    .towightbottom{
      position: absolute;
      font-size: 0.1rem;
      top: 0.2rem;
      left: 2.5rem;
    }
    .towlefttop{
      position: absolute;
      top: 0.85rem;
      left: 1.3rem;
      color: #99005e;
      font-size: 0.16rem;
    }

    .towleftcenter{
      position: absolute;
      top: 0.73rem;
      left: 1.22rem;
      font-size: 0.1rem;
    }
    .towleftbottom{
      position: absolute;
      font-size: 0.1rem;
      top: 0.4rem;
      right: 2.7rem;
      padding-left: 0.2rem;
    }
  }
  .three{
    height: 2rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2010-17_04.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
    .threerighttop{
      position: absolute;
      top: 0.3rem;
      right: 1.75rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .threerightcenter{
      position: absolute;
      top: 0.5rem;
      right: 0.8rem;
      font-size: 0.1rem;
    }
    .threerightbottom{
      position: absolute;
      font-size: 0.1rem;
      top: 0;
      left: 2.5rem;
    }

    .threecentertop{
      position: absolute;
      top: 1rem;
      left: 1.45rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .threecentercenter{
      position: absolute;
      top: 1.03rem;
      left: 0.3rem;
      font-size: 0.1rem;
    }
    .threecenterbottom{
      position: absolute;
      font-size: 0.1rem;
      top: 1.2rem;
      left: 0.01rem;
    }

    .threebotop{
      position: absolute;
      top: 1.55rem;
      left: 1.6rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .threebocenter{
      position: absolute;
      top: 1.35rem;
      left: 1.7rem;
      font-size: 0.1rem;
    }
    .threebobottom{
      position: absolute;
      font-size: 0.1rem;
      top: 1.5rem;
      left: 2rem;
    }
  }
  .four{
    height: 0.85rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2010-17_05.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
    .fourrightt{
      position: absolute;
      top: 0;
      left: 2rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .fourrightc{
      position: absolute;
      font-size: 0.1rem;
      top: 0.2rem;
      left: 1.8rem;
    }
    .fourrightb{
      position: absolute;
      font-size: 0.1rem;
      top: 0.7rem;
      left: 1.7rem;
    }
    
    .fourleftt{
      position: absolute;
      top: 0.5rem;
      left: 1.1rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .fourleftc{
      position: absolute;
      font-size: 0.08rem;
      top: -0.06rem;
      right: 2.4rem;
    }
    .fourleftb{
      position: absolute;
      font-size: 0.1rem;
      top: 0.61rem;
      right: 2.2rem;
    }
  }
  .five{
    height: 0.85rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2010-17_06.jpg)no-repeat;
    background-size: 100% 100%;
    position: relative;
    .fivet{
      position: absolute;
      top: 0.1rem;
      left: 1.6rem;
      color: #99005e;
      font-size: 0.16rem;
    }
    .fivec{
      position: absolute;
      font-size: 0.1rem;
      top: 0.25rem;
      left: 1.7rem;
    }
    .fiveb{
      position: absolute;
      font-size: 0.1rem;
      top: 0.6rem;
      left: 1.7rem;
    }
  }
  .six{
    height: 0.85rem;
    background: url(http://www.lingmaodianshang.com/dashiji/image/2010-17_07.jpg)no-repeat;
    background-size: 100% 100%;
  }

}
</style>
