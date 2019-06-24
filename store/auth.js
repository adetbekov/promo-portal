import cookieparser from "cookieparser"
import Cookie from "js-cookie"

export const state = () => ({
    authToken: null,
    expiration: null
})

export const actions = {
    set: ({ commit }, token) => {
        let now = new Date()
        let auth = {
            token: token,
            expiration: new Date().setDate(now.getDate() + 15)
        }
        Cookie.set("auth", auth)
        commit("UPDATE", auth)
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
    getToken: state => state.token,
    getExpirationTime: state => state.expiration,
    isAuthenticated: state => Boolean(state.token)
}

export const mutations = {
    UPDATE: (state, auth) => {
        state.token = auth.token
        state.expiration = auth.expiration
    },
    REMOVE: state => {
        state.token = null
        state.expiration = null
    }
}