<template>
    <article class="home_content">
        <!-- 비주얼 -->
        <HomeSwiper />
        <HomeAbout />
        <HomeDownload />
    </article>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import HomeSwiper from "@/components/home/HomeSwiper.vue"
import HomeAbout from "@/components/home/HomeAbout.vue"
import HomeDownload from "@/components/home/HomeDownload.vue"

import "@/styles/pages/_home.scss"

export default defineComponent({
    name: "Home",
    components: { HomeSwiper, HomeAbout, HomeDownload }
})
</script>
