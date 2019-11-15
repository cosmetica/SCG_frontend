<template>
  <div id="app">
    <nav-bar name="TopBar" />
    <div id='router-view'>
      FIND XYZ (Please Ctrl + R) 

    </div>
    <footer-bar id="footerBar" name="footerBar"/>
  </div>

</template>

<script>

import TopBar from './TopBar.vue'
import Footer from './Footer.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'findXYZ',
  components: {
    'nav-bar': TopBar,
    'footer-bar': Footer,
  }
}

  var htmlReturn = "";
  function sumSeries(arr){
    //document.write(arr[0]);
    for(var i=0;i<arr.length;i++){
      if(typeof arr[i] == "number"){
        htmlReturn += (parseInt(3 +i +i*i) + "<br/>");
      }
      else{
        htmlReturn += (arr[i] + "=" + parseInt(3 +i +i*i) + "<br/>");
      }
    }
    return htmlReturn;
  }
    
  window.addEventListener("load", function(event) {
    // here is the Vue code
    //check for proper page!!
    //alert(window.location.pathname);
    if (window.location.pathname.indexOf("XYZ") > -1) {
      console.log(event);
      var testSet = ["X", 5, 9, 15, 23, "Y", "Z"];
      document.getElementById("router-view").innerHTML += "<br/>"; 
      document.getElementById("router-view").append("Test set: ");
      document.getElementById("router-view").append(testSet);
      // document.getElementById("router-view").append("<br/>");
      // document.getElementById("router-view").append(sumSeries(testSet));

      //document.getElementById("router-view").innerHTML +=  testSet; 
      document.getElementById("router-view").innerHTML += "<br/>"; 
      document.getElementById("router-view").innerHTML += sumSeries(testSet);
    }
    
  });
  </script> 


<style>


#router-view {
  padding: 20px 0px;
  margin: 0 auto;
}
</style>
