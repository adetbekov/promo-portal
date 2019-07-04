export const actions = {
    nuxtServerInit: ({ dispatch }, { req }) =>
        Promise.all([
            dispatch("countdown/serverInit", { req }),
            dispatch("auth/serverInit", { req })
        ]),
    nuxtClientInit: ({ dispatch }, { app }) => {
        Promise.all([
            dispatch("countdown/clientInit"),
            dispatch("auth/clientInit")
        ])
    }
}
export const state = () => ({
    authURL: "http://92.53.66.206:8000",
})