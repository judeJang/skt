<template>
    <component :is="currentLayout">
        <router-view />
    </component>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
import "@/styles/index.scss"

import AppDefaultLayout from "@/layout/AppLayout.vue"

export default defineComponent({
    components: { AppDefaultLayout },
    computed: {
        currentLayout() {
            const route = useRoute()
            const layout = route.meta.layout || "AppDefaultLayout"
            return layout
        }
    }
})
</script>
