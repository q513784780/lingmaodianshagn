<template>
    <div>
        <div class="topbar">
            <router-link to="fuzhuang"><span>服装</span></router-link>
            <router-link to="shipin"><span>食品茶饮</span></router-link>
            <router-link to="muying"><span>母婴用品</span></router-link>
            <router-link to="shuma"><span>数码家电</span></router-link>
            <router-link to="jiajian"><span>家居建材</span></router-link>
            <router-link to="jiayong"><span>家具用品</span></router-link>
            <router-link to="zhubao"><span>珠宝饰品</span></router-link>
            <router-link to="huazhuang"><span>化妆美容</span></router-link>
            <router-link to="xiangbao"><span>箱包</span></router-link>
            <router-link to="neiyi"><span>内衣</span></router-link>
            <router-link to="shoes"><span>鞋类</span></router-link>
            <router-link to="hotel"><span>酒店旅游</span></router-link>
        </div>

           
    </div>
</template>
<script>    
export default {

}
</script>
<style scoped>
.topbar{
   overflow-x: auto;
   /* display: flex; */
   white-space: nowrap;
   width: 100%;
   height: 0.4rem;
   line-height: 0.23rem;
   position: fixed;
   background: white;
   z-index: 100;
  }
  .topbar>a{
    flex: 1;
    font-size:0.16rem;
    padding: 0.1rem 0.15rem;
    line-height: 0.23rem;
  }
.router-link-active span{
    font-size: 0.18rem;
    /* border-bottom:2px solid orange; */
    font-weight: 700;
    color: #049483;
}
.topbar::-webkit-scrollbar { display: none;}
</style>