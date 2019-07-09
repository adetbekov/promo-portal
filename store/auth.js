import cookieparser from "cookieparser"
import Cookie from "js-cookie"
import axios from "axios"

export const state = () => ({
    authToken: null,
    expiration: null,
    user: null
})

export const actions = {
    set: ({ commit, dispatch }, token) => {
        let now = new Date()
        let auth = {
            token: token,
            expiration: new Date().setDate(now.getDate() + 15)
        }
        Cookie.set("auth", auth)
        commit("UPDATE", auth)
        dispatch("set_user")
    },
    set_user: async({ commit, rootState, getters }) => {
        let { data } = await axios.get(`${rootState.authURL}/api/accounts/current`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": `JWT ${ getters.getToken }`
            }
        })
        commit('SET_USER', data)
        console.log("welcome to hell", data)
    },
    remove: ({ commit }) => {
        commit("REMOVE")
    },
    serverInit: ({ commit }, { req }) => {
        let auth = null
        if (req.headers.cookie) {
            let parsed = cookieparser.parse(req.headers.cookie)
            if (parsed.auth) {
                auth = JSON.parse(parsed.auth)
                commit("UPDATE", auth)
            }
        }
    },
    clientInit: ({ commit }) => {
        if (Cookie.get("auth")) {
            let auth = JSON.parse(Cookie.get("auth"))
            commit("UPDATE", auth)
        }
    }
}

export const getters = {
    getToken: state => state.authToken,
    getExpirationTime: state => state.expiration,
    isAuthenticated: state => Boolean(state.authToken),
    getUser: state => state.user
}

export const mutations = {
    UPDATE: (state, auth) => {
        state.authToken = auth.token
        state.expiration = auth.expiration
    },
    SET_USER: (state, user) => {
        state.user = user
    },
    REMOVE: state => {
        state.authToken = null
        state.expiration = null
    }
}