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

        request.headers.common["Content-Type"] = "application/x-www-form-urlencoded"
        request.headers.common["API-Key"] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTk2Mjg0ODksIm5iZiI6MTU1OTYyODQ4OSwicHJvbW9faWQiOiIxOTA2MDQxMjA3MTQiLCJzb3VyY2UiOiJzaXRlIn0.9uJq0hwP34_xlu2Od5t4IK2IzKqr9ylJE1Aewe1fnzk"
        request.headers.common['Access-Control-Allow-Origin'] = "*"

        if (token) {
            request.headers.common["Authorization"] = `JWT ${token}`
        }
        return request
    })
}