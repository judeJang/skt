import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { getComponent } from "@/apps/common/funs"
import MenuList from "@/apps/common/menuList"

// const variableCount = Object.keys(MenuList).length
// console.log(variableCount) // 변수의 개수 출력

const routes: Array<RouteRecordRaw> = []

interface Menu {
    name: string
    path: string
    component: any
}

for (const key in MenuList) {
    if (Object.prototype.hasOwnProperty.call(MenuList, key)) {
        const menu: Menu = MenuList[key as keyof MenuList]
        const route: RouteRecordRaw = {
            name: menu.name,
            path: menu.path,
            component: menu.component
        }
        routes.push(route)
    }
}

const testRoutes: Menu[] = [
    {
        path: "/swiper",
        name: "swiperComp",
        component: getComponent("SwiperTest")
    }
]

routes.push(...testRoutes)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
