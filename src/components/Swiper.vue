<template>
<div>
    <div class="top">
        <div class="logo">
            <img src="@/assets/caidan.png" alt="" @click="showPopup">
        </div>
        <div class="logoright">
            <img src="@/assets/logotop.png" alt="" class="logotop">
            <p>灵猫电商</p>
        </div>
        <!-- <p><img src="@/assets/logotop.png" alt="" class="logotop"><span>灵猫电商  </span></p> -->
        <!-- 弹出层 -->
        <van-popup v-model="show" position="left" :style="{ height: '100%',width:'55%'}">
            <div class="box">
                <div class="photo">
                    <img src="@/assets/logo1.png" alt="">
                </div>
                <div id="menu">
                    <p @click="wangdian"><span class="iconfont">&#xe6b8;</span>网店托管</p>
                    <p @click="kefu"><span class="iconfont">&#xe604;</span>客服外包</p>
                    <p @click="zhibo"><span class="iconfont">&#xe728;</span>直播托管</p>
                    <p @click="zhitongche"><span class="iconfont">&#xe654;</span>直通车托管</p>
                    <p @click="zhuangxiu"><span class="iconfont">&#xe970;</span>网店装修</p>
                    <p @click="paishe"><span class="iconfont">&#xe671;</span>产品拍摄</p>
                    <p @click="sheji"><span class="iconfont">&#xe617;</span>品牌设计</p>
                    <p @click="jianshe"><span class="iconfont">&#xe661;</span>网站建设</p>

                </div>
            </div>

        </van-popup>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#049483">
            <van-swipe-item><img src="@/assets/mbzxeleven.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/mbtgeleven.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/12.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/11.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/09.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/08.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/13.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/10.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/07.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/06.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/05.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/04.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/03.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/02.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="@/assets/01.jpg" alt=""></van-swipe-item>
        </van-swipe>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },

    methods: {
        showPopup() {
            this.show = true;
        },
        wangdian() {
            this.$router.push("wangdiantuoguan")
        },
        kefu() {
            this.$router.push("kefuwaibao")
        },
        zhibo() {
            this.$router.push("zhibotuoguan")
        },
        zhitongche() {
            this.$router.push("zhitongchetuoguan")
        },
        zhuangxiu() {
            this.$router.push("Wangdianzhaungxiu")
        },
        paishe() {
            this.$router.push("chanpinpaishe")
        },
        sheji() {
            this.$router.push("pinpaisheji")
        },
        jianshe() {
            this.$router.push("wangzhanjianshe")
        },
    }
}
</script>

<style lang="scss" scoped>
.box {
    // display: flex;
    // justify-content: center;
    width: 100%;
    height: 100%;
    background: black;

}

.photo {
    background: #17aa90;
    width: 100%;
    height: 25%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px));

    img {
        width: 0.8rem;
        height: 1.2rem;
        padding-top: 0.45rem;
    }
}

#menu {
    height: 75%;

    p {
        font-size: 0.15rem;
        color: white;
        font-weight: 300;
        text-align: left;

        span {
            margin-right: 0.25rem;
        }
    }
}

.logo {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.1rem;
    margin-right: 1rem;

    img {
        width: 100%;
        height: 100%;
    }
}

.logoright {
    display: flex;

    p {
        margin-left: 0.05rem !important;
    }
}

.top {
    font-size: 0.2rem;
    height: 0.5rem;
    width: 100%;
    line-height: 0.5rem;
    background: #2a2a2a;
    text-align: center;
    position: fixed;
    top: 0px;
    z-index: 200;
    display: flex;

    p {
        color: #049483;
        font-weight: 600;
        margin-left: 0.2rem;
    }
}

.banner {
    margin-top: 0.5rem;
}

.my-swipe {
    height: 2.2rem;
    width: 98%;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
    }
}

.logotop {
    width: 0.25rem;
    height: 0.2rem;
    margin-top: 0.14rem;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>
