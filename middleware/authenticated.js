export default function({ app, store, redirect }) {
    let authenticated = store.getters["auth/isAuthenticated"]
    if (!authenticated) {
        return redirect("/main/login")
    }

    if (authenticated) {
        if (!store.getters["auth/getUser"]) {
            store.dispatch('auth/set_user')
        }
    }
}