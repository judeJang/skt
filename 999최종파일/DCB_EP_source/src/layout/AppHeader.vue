<template>
    <header class="header">
        <div class="inner_wrap">
            <div class="logo_box">
                <router-link to="/" class="logo">
                    <img :src="require(`@/assets/imgs/logo.png`)" alt="T" />
                    휴대폰 결제
                </router-link>
            </div>
            <nav class="menu">
                <router-link :to="menu.path" v-for="menu in menuData" :key="menu.name" :class="{ active: menu.isActive }">
                    {{ menu.name }}
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import { watch, reactive } from "vue"

import Img from "@/components/Img.vue"

export default defineComponent({
    name: "Header",
    components: { Img },
    setup() {
        const route = useRoute()
        const menuData = reactive([
            {
                name: "이벤트",
                path: "/event",
                isActive: false
            },
            {
                name: "멤버십",
                path: "/membership",
                isActive: false
            },
            {
                name: "고객 지원",
                path: "/support",
                isActive: false
            },
            {
                name: "사용방법",
                path: "/use",
                isActive: false
            }
        ])

        // path로 GNB 활성화
        watch(route, (n) => {
            for (const item of menuData) {
                if (item.path == n.path) {
                    item.isActive = true
                } else {
                    item.isActive = false
                }
            }
        })
        return {
            menuData
        }
    }
})
</script>
