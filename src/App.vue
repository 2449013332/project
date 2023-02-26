<template>
  <router-link
    v-for="(item, index) in routeList"
    :key="index"
    :to="item.path"
    >{{ filter(item.path) }}</router-link
  >
    <router-view class="right_content"></router-view>
</template>
<script>
import { reactive } from 'vue'
import {routes} from "./router/index"
export default{
    setup(){
        let routeList=reactive(routes)
        function filter(item){
            return item.replace("/","")
        }
        return{
            routeList,
            filter
        }
    }
}
</script>
<style scoped>
a {
  color: orange;
  padding: 20px;
  font-size: 16px;
  text-decoration: none;
}
a:focus {
  color: green;
}
.right_content {
  margin-top: 40px;
  margin-left: 20px;
}
</style>
