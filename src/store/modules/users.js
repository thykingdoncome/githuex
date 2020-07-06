import axios from 'axios'
import dotEnv from 'dotenv'

dotEnv.config({ debug: process.env.DEBUG })

const {
    VUE_APP_BASE_URL,
     VUE_APP_CLIENT_ID,
     VUE_APP_CLIENT_SECRET
     } = process.env;

const state = {
    user: "",
    userRepo: '',
    defaultUsers: [
        {
            id: 1,
            login: "thykingdoncome",
            name: "Azemoh David Israel",
            avatar_url: `https://avatars3.githubusercontent.com/u/45788810?v=4`
        },
        {
            id: 2,
            login: "azemoh",
            name: "Joshua Azemoh",
            avatar_url: `https://avatars1.githubusercontent.com/u/11008869?v=4`
        },
        {
            id: 3,
            login: "DavyCode",
            name: "Paul Azemoh",
            avatar_url: `https://avatars0.githubusercontent.com/u/12392710?v=4`
        },
        {
            id: 4,
            login: "femioladeji",
            name: "Femi Oladeji",
            avatar_url: `https://avatars0.githubusercontent.com/u/17332992?v=4`
        },
        {
            id: 5,
            login: "otoloye",
            name: "Otoloye Tosin Oyeniran",
            avatar_url: `https://avatars2.githubusercontent.com/u/24937859?v=4`
        },
        {
            id: 6,
            login: "obayomi96",
            name: "Obayomi Martins",
            avatar_url: `https://avatars1.githubusercontent.com/u/43539944?v=4`
        },
        {
            id: 7,
            login: "bradtraversy",
            name: "Brad Traversy",
            avatar_url: `https://avatars2.githubusercontent.com/u/5550850?v=4`
        }
    ]
}

const getters = {
    allDefaultUsers: state => state.defaultUsers,
    currentUser: state => state.user,
    setRepos: state => state.userRepo
}

const actions = {
    async fetchUser( {commit}, username) {
       try {
        const res = await axios.get(`${VUE_APP_BASE_URL}/users/${username}?client_id=${VUE_APP_CLIENT_ID}&client_secret=${VUE_APP_CLIENT_SECRET}`);
        commit('setUser', res.data)
       } catch(error) {
        throw "user does not exist"
       }
    },
    async userRepos({commit}, username) {
        const res = await axios.get(
            `${VUE_APP_BASE_URL}/users/${username}/repos?per_page=100&client_id=${VUE_APP_CLIENT_ID}&client_secret=${VUE_APP_CLIENT_SECRET}`
        );
        commit('getRepo', res.data)
    }
}

const mutations = {
    setUser: ( state, username ) => (state.user = username),
    getRepo: (state, repos) => (state.userRepo = repos)
}


export default {
    state, getters, actions, mutations
}