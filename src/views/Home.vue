<template>
  <div class="user-container">
    <Header />

    <SearchUser />

    <div class="users">
      <div v-for="user in allDefaultUsers" :key="user.id" class="user">
        <div class="avatar">
          <img :src="user.avatar_url" alt="user" />
        </div>
        {{ user.login }}
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SearchUser from "../components/SearchUser";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    SearchUser,
  },
  methods: {
  },
  computed: mapGetters(["allDefaultUsers"]),
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 3rem 0;
}
.user {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.avatar {
  width: 100px;
  height: 100px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

@media (max-width: 500px) {
  .users {
    grid-template-columns: 1fr;
  }
}
</style>
