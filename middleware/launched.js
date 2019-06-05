export default function({ app, store, redirect }) {
    if (!store.getters["countdown/isLaunched"]) {
        return redirect("/")
    }
}