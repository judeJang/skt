import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"

const app = createApp(App)

app.config.globalProperties.$mobile = 750 as number
app.config.globalProperties.$path = "./assets/imgs/" as string
app.use(router)
app.mount("#app")
