export default function({ store, $axios, redirect }) {
    $axios.onError(error => {
        if (error.code === 500) {
            redirect("/sorry")
        }
        if (error.code == 401 || error.code == 403) {
            // store.dispatch("auth/remove")
            location.reload()
        }
        if (error.code === 400) {
            redirect("/400")
        }
    })

    $axios.interceptors.request.use(request => {
        const token = store.getters["auth/getToken"]
        if (token) {
            request.headers.common["Authorization"] = `JWT ${token}`
        }
        request.headers.common["Content-Type"] = "application/x-www-form-urlencoded"
        request.headers.common["API-Key"] = ""

        return request
    })
}