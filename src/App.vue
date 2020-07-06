<template>
  <div id="app" :class="{ darktheme: this.theme != 'light' }">
    <div class="container" :class="{ darktheme: this.theme != 'light' }">
      <div class="app-header">
        <div>
          <span class="logo">
            <router-link to="/">
              <h1>GITHUBEX<i class="fab fa-github"></i></h1>
            </router-link>
          </span>
        </div>
        <div class="theme-box">
          <span v-if="this.theme != 'dark'">
            <i id="dark" class="fas fa-moon" @click="setDarkMode"></i>
          </span>

          <span v-else>
            <i id="light" class="fas fa-sun" @click="setLightMode"></i
          ></span>
        </div>
        <div class="contact-wrapper">
          <span class="contact">
            <i class="far fa-envelope"></i>
            <a href="mailto:davidisrael194@gmail.com" target="_top">
              davidisrael194@gmail.com</a
            >
          </span>

          <span class="contact">
            <i class="fas fa-phone-volume"></i>
            <a href="tel:+2349064688408">+2349064688408</a>
          </span>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
   data() {
			return {
				theme: localStorage.getItem("theme")
			};
		},
  methods: {
    setDarkMode() {
      localStorage.setItem("theme", "dark");
      this.theme = localStorage.getItem("theme")
      console.log('daarrrkk', this.theme)
    },

    // Set Light Mode
    setLightMode() {
      localStorage.setItem("theme", "light");
      this.theme = localStorage.getItem("theme")
      console.log('lighttttt', this.theme)

    },
  }
};
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
  background: rgba(245, 245, 245, 1);
}

#app {
  min-height: 100vh;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
}

.app-header {
  color: rgb(21, 99, 99);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em 0;
  width: 100%;
  margin: 0 auto 3rem;
}

.logo {
  font-size: 1em;
  letter-spacing: 7px;
  font-weight: bold;
}

.contact-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.contact-wrapper span:nth-of-type(1) {
  padding-right: 2em;
}

a {
  text-decoration: none;
  color: #41b883;
}
a:hover {
  text-decoration: wavy;
}

.contact {
  font-size: 0.9em;
}

.contact a:hover {
  text-decoration: underline;
}

.theme-box i {
  font-size: 1.5rem;
  cursor: pointer;
}

#light {
  color: white;
}
#dark {
  color: black;
}

.darktheme {
  background: black;
}

a {
  text-decoration: none;
}

.read-data {
  width: 100%;
  min-height: calc(100vh - 83px);
  padding: 0 1rem 0 3rem;
  overflow: hidden;
}

#read-data {
  margin: 0 auto;
}

@media (max-width: 750px) {
  .contact-wrapper {
    display: none;
  }
}
</style>
