<template>
  <div>
    <Tabbar></Tabbar>
  <div v-for="data in arr " :key=data.id> 
    <div>{{data.id}}</div>
  </div>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'

export default {
  components: {
    Tabbar

  },
   data(){
        return {
            arr: []
        }
    },
  created() {
        this.axios({
            url:"/api/api/products/1",
            method:"get"
        }).then((res)=>{
            console.log(res.data.product)
            this.arr = res.data.product
        })
    },
}
</script>
<style lang="scss" scoped>
*{
  font-size: 0.5rem;
}
</style>
