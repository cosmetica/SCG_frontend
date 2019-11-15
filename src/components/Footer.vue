<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center small">&#169;2019 -- Pakkaphon P.</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-bar",
  props: {
    name: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #footerBar {
    /* position: fixed; */
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 60px;
    line-height: 60px; /* Vertically center the text there */
    background-color: #f5f5f5;
  }
</style>