<template>
  <div class="main-container">
    <!-- <Header /> -->
    <div class="main-wrapper">
      <!-- <input type="text" placeholder="search" /> -->
      <div class="user-info">
        <div class="image-div"><img :src="currentUser.avatar_url" /></div>
        <div>
          <h2>{{ currentUser.name }}</h2>
          <h3>
            <em>@{{ currentUser.login }}</em>
          </h3>
          <p><span>Location:</span> {{ currentUser.location }}</p>
          <p><span>Followers:</span> {{ currentUser.followers }}</p>
          <p><span>Following:</span> {{ currentUser.following }}</p>
          <p><span>Member Since:</span> {{ currentUser.created_at }}</p>
        </div>
      </div>

      <div class="repos-sec">
        <h2 class="repo-header">
          REPOSITORIES
        </h2>
        <!-- <h3 class="repo-header" v-if="this.repos.length == 0">
            This User has no Public repository or 0 repositories
          </h3> -->
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
              <!-- <router-link :to="{name: 'Readme', params: {username: userName, repo: item.name}}"> -->
              <router-link :to="`/readme/${currentUser.login}/${repo.name}`">
                <button>
                  View Readme
                </button>
              </router-link>

              <a v-if="repo.homepage" :href="repo.homepage" target="_blank" >
                <button>Live Preview</button>
                </a >
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";


export default {
  name: "User",
  computed: mapGetters(["currentUser", "setRepos"]),
  methods: {
  //  fetchReaddme() {
  //    this.router
  //  }
  },
};
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color: rgb(21, 99, 99);
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
  color: rgb(21, 99, 99);
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
  background: rgb(21, 99, 99);
  list-style: none;
  width: 45%;
  color: rgb(212, 211, 211);
  border-radius: 4px;
  height: fit-content;
}

.italic {
  display: flex;
  justify-content: space-between;
  padding-top: 0.7em;
}

li button {
  border: 1px solid black;
  padding: 0.6em;
  outline: none;
  color: rgb(21, 99, 99);
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
}

li button:hover {
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
