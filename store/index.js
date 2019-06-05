export const actions = {
    nuxtServerInit: ({ dispatch }, { req }) =>
        Promise.all([dispatch("countdown/serverInit", { req })]),
    nuxtClientInit: ({ dispatch }, { app }) => {
        Promise.all([
            dispatch("countdown/clientInit"),
            //dispatch("user/clientInit", { app })
        ])
    }
}