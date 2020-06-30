<template>
  <div>
    <form @submit.prevent="searchUser">
      <input
        type="text"
        name="login"
        v-model.trim="login"
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
      login: "",
    };
  },
  methods: {
    ...mapActions(["fetchUser", "userRepos"]),
    async searchUser() {
      const userName = this.login;
      if (userName === "") {
        this.$swal({
          position: "top-end",
          icon: "error",
          html: `<span style="color:#ffff">please input a username!</span>`,
          showConfirmButton: false,
          timer: 3500,
          background: "rgb(97, 27, 27)",
          toast: true,
        });
      } else {
        try {
          await this.fetchUser(userName);
          this.userRepos(userName);
          this.$router.push({
            name: "user",
            params: { username: this.login },
          });
        } catch (error) {
          this.login = '';
          this.$swal({
          position: "top-end",
          icon: "error",
          html: `<span style="color:#ffff">${error}</span>`,
          showConfirmButton: false,
          timer: 3500,
          background: "rgb(97, 27, 27)",
          toast: true,
        });
        }
      }
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
  background: #18412e;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  transition: .3s;
}
.btn:hover {
  background: #666;
}
</style>
