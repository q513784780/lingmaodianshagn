<template>
  <div id="app">
    <keep-alive>
    <!-- <transition name="app" mode="out-in"> -->
      <router-view></router-view>
    <!-- </transition> -->

    </keep-alive>
    <!-- <Tabbar></Tabbar> -->
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


<style lang="scss">
*{
  margin: 0;
  padding: 0;
  touch-action: manipulation;
}
html{
  font-size: 26.67vw;
}
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,input,td,select,textarea{
	margin:0;
	padding: 0;
}

a {
	text-decoration: none;
	color:black;
}
li {
	list-style: none;
}
.app-enter-active {
  animation: aaa .5s;
}
.app-leave-active {
  animation: aaa .5s reverse;
}
@keyframes aaa {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
