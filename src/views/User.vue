<template>
  <div class="main-container">
    <div class="main-wrapper" v-if="currentUser.login">
      <div class="user-info">
        <div class="image-div"><img :src="currentUser.avatar_url" /></div>
        <div>
          <h2>{{ currentUser.name }}</h2>
          <h3>
            <a :href="href" target="_blank" rel="noopener noreferrer">
              @ {{ currentUser.login }}
            </a>
          </h3>
          <p v-if="currentUser.location">
            <span>Location:</span> {{ currentUser.location }}
          </p>
          <p><span>Followers:</span> {{ currentUser.followers }}</p>
          <p><span>Following:</span> {{ currentUser.following }}</p>
          <p><span>Member Since:</span> {{ joined }}</p>
        </div>
      </div>

      <div class="repos-sec" v-if="setRepos.length !== 0">
        <h2 class="repo-header">
          REPOSITORIES
        </h2>
        <ul>
          <li v-for="repo in setRepos" :key="repo.id">
            <h2>{{ repo["name"] }}</h2>
            <p>{{ repo.description }}</p>
            <div class="italic">
              <span v-if="repo.language != null"
                >Language: <em>{{ repo.language }}</em></span
              >
              <em><i class="fas fa-code-branch"></i> {{ repo.forks }}</em>
              <em>
                <i class="fas fa-star"></i>
                {{ repo.stargazers_count }}
              </em>
            </div>
            <div class="italic">
              <router-link :to="`/readme/${currentUser.login}/${repo.name}`">
                View Readme
              </router-link>
              <a v-if="repo.homepage" :href="repo.homepage" target="_blank">
                Live Preview
              </a>
            </div>
          </li>
        </ul>
      </div>
      <h3 class="repo-header" v-else>
        This User has no Public repository or 0 repositories
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "User",
  data() {
    return {
      href: "",
      joined: "",
    };
  },
  computed: mapGetters(["currentUser", "setRepos"]),
  methods: {
    ...mapActions(["fetchUser", "userRepos"]),
    async fetchData() {
      try {
        const username = this.$route.params.username;
        if (
          this.$store.state.users.user === "" ||
          this.$store.state.users.user === null
        ) {
          await this.fetchUser(username);
          this.userRepos(username);
          this.formatDate(this.currentUser.created_at);
          this.href = `http://github.com/${username}`;
        }
      } catch (error) {
        this.$swal({
          icon: "error",
          html: `<span style="color:#ffff">${error}</span>`,
          showConfirmButton: true,
          timer: 3500,
          background: "rgb(97, 27, 27)",
        });
      }
    },
    formatDate(date) {
      const dy = new Date(date);
      const yr = dy.getFullYear();
      const m = dy.getMonth() + 1;
      const d = dy.getDate();
      this.joined = `${d}-${m}-${yr}`;
    },
  },
  created() {
    this.fetchData();
    this.formatDate(this.currentUser.created_at);
    this.href = `http://github.com/${this.currentUser.login}`;
  },
};
</script>

<style scoped>
.main-container {
  min-height: calc(100vh - 83px);
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #41b883;
  margin: 0 auto;
}

.image-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background: #dde1e7;
  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffffa6, 3px 3px 5px rgba(94, 104, 121, 0.712);
  position: relative;
  margin: 1em 0;
}
.image-div:after {
  content: "";
  position: absolute;
  height: 90%;
  width: 90%;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: inset -3px -3px 7px #ffffffb0,
    inset 3px 3px 5px rgba(94, 104, 121, 0.671);
}
img {
  height: 216px;
  width: 216px;
  border-radius: 50%;
}

.user-info div:nth-of-type(2) {
  line-height: 30px;
}
.user-info p span {
  font-weight: 800;
}

.repos-sec {
  padding-top: 1.5em;
}

.repo-header {
  text-align: center;
  padding: 0.3em 0 1em;
  color: #41b883;
}
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

li {
  padding: 0.5em 1em;
  margin: 1em 0 0.5em;
  background: #41b883;
  list-style: none;
  width: 45%;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  height: fit-content;
}

.darktheme li {
  color: black;
}

.italic {
  display: flex;
  justify-content: space-between;
  padding-top: 0.7em;
}

a {
  color: #41b883;
}

li a {
  border: 1px solid black;
  padding: 0.4em;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;
  background: white;
}

 .darktheme li a {
   background: black;
 }

li a:hover {
  background: rgb(52, 54, 54);
  color: rgb(212, 211, 211);
}

@media screen and (max-width: 780px) {
  .main-wrapper {
    width: 100%;
    padding: 0 0.5em;
  }
  .inputs {
    padding: 0;

    margin-bottom: 1em;
  }
  input[type="text"] {
    padding: 0.6em;
    width: auto;
  }

  .user-info {
    display: block;
  }
  .image-div {
    height: 150px;
    width: 150px;
    margin: 0 auto;
  }
  img {
    height: 130px;
    width: 130px;
  }
  .user-info div:nth-of-type(2) {
    line-height: 20px;
    margin: 1em auto 0;
    width: fit-content;
  }
  .repos-sec {
    padding-top: 1em;
  }
  .repo-header {
    padding: 0.3em 0 0.5em;
  }
  ul {
    display: block;
  }
  li {
    width: 100%;
  }
}
</style>
