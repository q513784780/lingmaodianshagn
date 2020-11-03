<template>
    <div>
        <div class="my" v-show="searchBarFixed"> 
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592647652518&di=2239dd96226c54b47f922701c21def6b&imgtype=0&src=http%3A%2F%2Fwww.dyzl.ltd%2Fdata%2Fupload%2Fimage%2F20190116%2F1547648508909691.jpg" alt="">
        </div>
        <div :class="searchBarFixed ==true?'top':'topp'">
            <router-link to="news"><span>公司新闻</span></router-link>
            <router-link to="report"><span>媒体报道</span></router-link>
            <router-link to="information"><span>行业资讯</span></router-link>
            <router-link to="problem"><span>常见问题</span></router-link>
            <router-link to="point"><span>灵猫观点</span></router-link>
        </div>
            <router-view></router-view>
    </div>
</template>
<script>    
export default {
    data(){
        return{
            searchBarFixed:true
        }
    },
    mounted () {
    window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
              if (scrollTop > 40) {
                    this.searchBarFixed = false
                } else {
                    this.searchBarFixed = true
                }
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="scss" scoped>
.my{
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 0.1rem;
    left: 0;
    img{
        width: 100%;
        height: 100%;
    }
}
.top{
   overflow-x: auto;
   white-space: nowrap;
   padding-top: 0.1rem;
   padding-bottom: 0.2rem;
   width: 100%;
   position: fixed;
   top: 1.5rem;
   left: 0;
   background: white;
   z-index: 100;
    font-size:0.16rem;
  }
  .top>a{
    flex: 1;
    font-size:0.16rem;
    height: 0.2rem;
    margin: 0.3rem 0.05rem;
    text-decoration:none;
  }
.router-link-active span{
    // font-size: 0.18rem;
    // font-weight: 700;
    color: #049483;
    border-bottom: 2px solid orange;
    font-size: 0.18rem;
    font-weight: 700;
}



.topp{
   overflow-x: auto;
   white-space: nowrap;
   padding-top: 0.1rem;
   padding-bottom: 0.2rem;
   width: 100%;
   position: fixed;
   top: 0.5rem;
   left: 0;
   background: white;
   z-index: 100;
    font-size:0.16rem;
  }
  .topp>a{
    flex: 1;
    font-size:0.16rem;
    height: 0.2rem;
    margin: 0.3rem 0.05rem;
    text-decoration:none;
  }
.router-link-active span{
    // font-size: 0.18rem;
    // font-weight: 700;
    color: #049483;
    // border-bottom: 2px solid orange;
    font-size: 0.18rem;
    font-weight: 700;
    
}

</style>