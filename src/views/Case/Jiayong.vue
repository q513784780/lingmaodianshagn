<template>
  <div>
    <div class="center">
      <div class="image">
          <img src="http://www.lingmaodianshang.com/uploads/180914/1-1P91415364EW.jpg" alt="">
          <div class="text">
                <p>滤水器</p>
          </div>
      </div>   
      <div class="sheji">
          <span>设计师：董贞</span>   <van-tag mark type="success" class="right">找她做设计</van-tag>
      </div>   
    </div>

    <div class="center">
      <div class="image">
          <img src="http://www.lingmaodianshang.com/uploads/180914/1-1P91415354Ib.jpg" alt="">
          <div class="text">
                <p>吉他详情页</p>
          </div>
      </div>   
      <div class="sheji">
          <span>设计师：董贞</span>   <van-tag mark type="success" class="right">找她做设计</van-tag>
      </div>   
    </div>

    <div class="center">
      <div class="image">
          <img src="http://www.lingmaodianshang.com/uploads/180914/1-1P914152533B9.jpg" alt="">
          <div class="text">
                <p>画册详情页</p>
          </div>
      </div>   
      <div class="sheji">
          <span>设计师：李聪</span>   <van-tag mark type="success" class="right">找她做设计</van-tag>
      </div>   
    </div>

    <div class="center">
      <div class="image">
          <img src="http://www.lingmaodianshang.com/uploads/allimg/180914/1-1P9141501380-L.jpg" alt="">
          <div class="text">
                <p>棉被首页</p>
          </div>
      </div>   
      <div class="sheji">
          <span>设计师：张雪</span>   <van-tag mark type="success" class="right">找她做设计</van-tag>
      </div>   
    </div>
    
    <div class="center">
      <div class="image">
          <img src="http://www.lingmaodianshang.com/uploads/allimg/180914/1-1P9141453330-L.jpg" alt="">
          <div class="text">
                <p>锅具详情页</p>
          </div>
      </div>   
      <div class="sheji">
          <span>设计师：王潼潼</span>   <van-tag mark type="success" class="right">找她做设计</van-tag>
      </div>   
    </div>
    
  </div>
</template>

<script>
// import Tabbar from '@/components/Tabbar'
export default {
  components: {
    // Tabbar
  }
}
</script>
<style lang="scss" scoped>
.text{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    p{
        color: white;
        margin: 0.1rem 0.2rem;
    }
}
.text{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    p{
        color: white;
        margin: 0.1rem 0.2rem;
    }
}
.center{
    padding: 0.4rem 0 0.2rem 0;
    border-bottom: 2px solid #d8d5d5;
    .image{
        width: 3.15rem;
        height: 1.85rem;
        margin: 0 auto;
        position: relative;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
        img{
            width: 100%;
            height: 100%;
        }

    }
}
.sheji{
    margin-left: 0.3rem;
    margin-top: 0.1rem;
    font-size: 0.14rem;
    .right{
        font-size: 0.1rem;
        margin-left: 1.5rem;
    }
}
</style>    