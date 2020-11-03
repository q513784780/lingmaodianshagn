<template>
  <div class="tabbar">
    <ul>
      <router-link to="home" tag="li" active-class="house">
        <div class="shouye" @click="click()">
          <span class="iconfont">&#xe600;</span>
          <p>首页</p>
        </div>
      </router-link>
      <li>
        <span class="iconfont" @click="handclick">&#xe603;</span>
          <p>在线咨询</p>
      </li>
      <router-link tag="li" to="/" active-class="">
        <div class="shouye">
          <span class="iconfont">&#xe606;</span>
          <p @click="callPhone">免费热线</p>
        </div>
      </router-link>
      <li>
        <span class="iconfont" @click="handclick">&#xe700;</span>
          <p>免费直播</p>
      </li>

    </ul>
<keep-alive>
             <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
  </div>
</template>

<script>
// import "@/assets/iconfont/iconfont.css";

export default {
  methods:{
    callPhone(){
      window.location.href = 'tel://400-009-1355'
    },
    handclick(){
      window.location.href = 'https://p.qiao.baidu.com/cps3/chatIndex?siteToken=6f9a099904eb2a3c9df4c77904c3ab23&speedLogId=15942808173643a70_1594280817364_36683&reqParam=%7B%22from%22%3A0%2C%22sessionid%22%3A%22%22%2C%22siteId%22%3A%228919110%22%2C%22tid%22%3A%22-1%22%2C%22userId%22%3A%2220585309%22%2C%22ttype%22%3A1%2C%22siteConfig%22%3A%7B%22eid%22%3A%2220585309%22%2C%22queuing%22%3A%22%22%2C%22session%22%3A%7B%22displayName%22%3A%22%E5%A4%A9**%E5%A5%B9%22%2C%22headUrl%22%3A%22https%3A%2F%2Fss0.bdstatic.com%2F7Ls0a8Sm1A5BphGlnYG%2Fsys%2Fportraitn%2Fitem%2F803925453525413425413925453825394425384525453425424225393625453825414625423425453425424225393625453725383825423125453525413525423931c8.jpg%22%2C%22status%22%3A0%2C%22uid%22%3A0%2C%22uname%22%3A%22%22%7D%2C%22siteToken%22%3A%226f9a099904eb2a3c9df4c77904c3ab23%22%2C%22userId%22%3A%2220585309%22%2C%22isGray%22%3A%22false%22%2C%22wsUrl%22%3A%22wss%3A%2F%2Fp.qiao.baidu.com%2Fcps3%2Fwebsocket%22%2C%22likeVersion%22%3A%22generic%22%2C%22siteId%22%3A%228919110%22%2C%22online%22%3A%22true%22%2C%22webRoot%22%3A%22%2F%2Fp.qiao.baidu.com%2Fcps3%2F%22%2C%22bid%22%3A%223358669184089191100%22%2C%22isSmallFlow%22%3A0%2C%22isPreonline%22%3A0%2C%22invited%22%3A0%7D%2C%22config%22%3A%7B%22themeColor%22%3A%224d74fa%22%7D%7D'
    },
    click(){
      this.$router.push("/home");
    }

  }
}
</script>
<style scoped lang="scss">
.tabbar{
  z-index:10;
  position: fixed;
  left:0px;
  bottom: 0px;
  width: 100%;
  height: 0.6rem;
  background:rgb(51, 51, 51);
}
.house{
  color: #049483 !important;
  background:rgb(51, 51, 51);

}

.tabbar{
  ul{
    display: flex;
    margin-top: 0.1rem;
    li{
      flex:1;
      line-height:0.3rem;
      font-size: 0.14rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      color: white;
      line-height: 0.22rem;
    }
  }
}
.iconfont{
  font-size: 0.16rem !important;
}
</style>
