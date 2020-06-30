<template>
  <div>
    <form @submit.prevent="searchUser">
      <input
        type="text"
        name="login"
        v-model="login"
        autofocus
        placeholder="Search User..."
      />
      <input type="submit" value="Search" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchUser",
  data() {
    return {
      login: ""
    };
  },
  methods: {
    ...mapActions(["fetchUser", "userRepos"]),
    searchUser() {
      this.$router.push({ path: "/user", params: { username: this.login } });
      this.fetchUser(this.login);
      this.userRepos(this.login);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
