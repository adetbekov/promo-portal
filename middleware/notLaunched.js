export default function({ store, redirect }) {
    if (store.getters["countdown/isLaunched"]) {
        return redirect("/main")
    }
}