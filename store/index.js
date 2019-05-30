export const actions = {
    nuxtServerInit: ({ dispatch }, { req }) =>
        Promise.all([dispatch("auth/serverInit", { req })]),
    nuxtClientInit: ({ dispatch }, { app }) => {
        Promise.all([
            dispatch("auth/clientInit"),
            //dispatch("user/clientInit", { app })
        ])
    }
}