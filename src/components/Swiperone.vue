<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
props: ['Hangkou'],
  mounted(){
    new Swiper(".swiper-container",this.Hangkou)
  }
}
</script>
