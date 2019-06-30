export default function({ app, store, redirect }) {
    if (!store.getters["auth/isAuthenticated"]) {
        return redirect("/main/login")
    }
}