// Home.vue
<template>
  <div id="app">
    <nav-bar name="TopBar" id="TopBar" />
    <div id="router-view">
      Restaurants in Bangsue area.
      <googleMapLoader id="map" apiKey="AIzaSyDN2VogMc3abkzW48N1v9uTe_kKcSt2StU"></googleMapLoader>
      <li v-for="(value, key) in post" :key="key">
        <strong>{{ key }}</strong> : {{ value }} 
      </li>
    

    <footer-bar id="footerBar" name="footerBar" />
  </div>
  </div>
</template>

<script>
import TopBar from "./TopBar.vue";
import Footer from "./Footer.vue";
import GoogleMapLoader from "./GoogleMapLoader.vue"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";

export default {
  name: "SCG",
  components: {
    "nav-bar": TopBar,
    "footer-bar": Footer,
    "googleMapLoader": GoogleMapLoader
  },

  created: function() {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts/1")
      .get("http://localhost:3000/GetBangsueRestaurants/bangsue/",{
        timeout: 1000, // default is `0` (no timeout)
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        withCredentials: false, // default
      })
      .then(res => {
        this.post = res.data.results;
        console.log(this.post)
      })
       .catch(err => {
        this.loading = false;
        this.error = err;
      });
  },
  data() {
    return {
      post: null,
    };
  },
};
</script>

<style>
#router-view {
  padding: 20px 0px;
  margin: 0 auto;
}
</style>
