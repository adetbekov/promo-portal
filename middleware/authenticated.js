export default function({ app, store, redirect }) {
    if (!store.getters["auth/isAuthenticated"]) {
      return redirect("/login")
    }
    if (store.getters["auth/getExpirationTime"] - new Date() <= 432000) {
      app.$axios
        .post("auth/reload", {
          token: store.getters["auth/getToken"]
        })
        .then(
          response => {
            store.dispatch("auth/set", response.data.token)
            console.log("Token reloaded")
          },
          response => {
            console.log(response.statusText)
          }
        )
    }
}
  
  
  