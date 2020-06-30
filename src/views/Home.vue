<template>
  <div class="user-container">
    <!-- <Header /> -->

    <SearchUser />

 
    <h3 class="appreciation">Appreciation</h3>

    <div class="users">
      <div
        v-for="user in allDefaultUsers"
        :key="user.id"
        @click="viewUser(user.login)"
        class="user"
      >
        <div class="avatar">
          <img :src="user.avatar_url" alt="user" />
        </div>
        <p>{{ user.name }}</p>
        <p>@{{ user.login }}</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer";
import SearchUser from "../components/SearchUser";
import { mapGetters } from "vuex";

import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Footer,
    SearchUser,
  },
  computed: mapGetters(["allDefaultUsers"]),
  methods: {
    ...mapActions(["fetchUser", "userRepos"]),
    async viewUser(username) {
      await this.fetchUser(username);
      this.userRepos(username);
      this.$router.push({
        name: "user",
        params: { username: username },
      });
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin:0 0 3rem;
}
.user {
  border: 1px solid #ccc;
  background: #41b883;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.appreciation {
  margin: 3rem 0 1rem;
  color: #2a7e58;
}
.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto;
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
