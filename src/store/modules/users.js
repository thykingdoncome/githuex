import axios from 'axios'

const state = {
    user: "",
    // userRepo: '',
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
        }
    ]
}

const getters = {
    allDefaultUsers: state => state.defaultUsers,
    currentUser: state => state.user,
    // userRepo: state => [...state.user.login]
}

const actions = {

    async fetchUser( {commit}, username) {
        const res = await axios.get(`https://api.github.com/users/${username}`);
        commit('setUser', res.data)
    },
    // async fetchUserRepo({commit}) {
    //     const user = [...state.user.login]
    //     const res = await axios.get(`https://api.github.com/users/${user}/repos`);
    //     console.log(res); 
    //     commit('setRepos', res)
    // }

}

const mutations = {
    setUser: ( state, username ) => (state.user = username),
    // setRepos: (state, user) => (state.userRepo = user)
}


export default {
    state, getters, actions, mutations
}