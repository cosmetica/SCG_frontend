<template>
    <nav class="navbar navbar-light navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">SCG TEST</a>
      <div class="navbar" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
             <router-link to='/' class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
           <router-link to='/findXYZ' class="nav-link">findXYZ</router-link>
          </li>
          <li class= "nav-item">
            <router-link to='/showResume' class="nav-link">showResume</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    name: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  width: 100px;
  margin-top: -3px;
}
.navbar.bg-dark a {
    color:whitesmoke;
}

.navbar.bg-dark a:hover {
    color:white;
}
</style>