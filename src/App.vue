<template>
  <div id="app">
    <div class="container">
      <Header></Header>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.main-container {
  min-height: calc(100vh - 64px);
}

a {
  text-decoration: none;
}

.read-data {
  width: 100%;
  min-height: calc(100vh - 64px);
  padding: 0 1rem 0 3rem;
  overflow: hidden;
}

#read-data {
  margin: 0 auto;
}
</style>
