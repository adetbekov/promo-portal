import moment from "moment-timezone"
import axios from "axios"

export const state = () => ({
    launch: moment("2019-07-01").unix(),
    now: null
})

export const mutations = {
    NOW: (state, date) => {
        state.now = date
    }
}

export const actions = {
    set_now: async({ commit }) => {
        let { data } = await axios.get("http://worldclockapi.com/api/json/est/now")
        let now = moment(
            data.currentDateTime
        ).tz('Asia/Almaty').set({ seconds: new Date().getSeconds() }).unix()
        commit('NOW', now)
    },
    serverInit: async({ commit, dispatch }, { req }) => {
        await dispatch("set_now")
    },
    clientInit: async({ commit, dispatch }) => {
        await dispatch("set_now")
    }
}

export const getters = {
    getCountdown: state => moment.unix(state.launch).diff(moment.unix(state.now)),
    isLaunched: state => moment.unix(state.launch) <= moment.unix(state.now)
}