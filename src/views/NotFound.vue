<template>
  <div class="not-found">
      <img src="../../src/assets/images/404-provident.gif" alt="Page Not Found">

      <div>
        <h2>Ooops!!!... Seems You are Lost</h2>
        <router-link to="/">Return Home</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.not-found {
  text-align: center;
  line-height: 2;
  color: #2a7e58;
}

.not-found img {
  max-width: 100%;
}

a {
  border: 1px solid #2a7e58;
  padding: .5rem 1rem;
  color: #2a7e58;
}

a:hover {
  background: #2a7e58;
  color: rgba(245, 245, 245, 1)
}

</style>