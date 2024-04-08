<template>
    <section class="content">
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </section>
</template>
<script lang="ts">
import { defineComponent } from "vue"

import Header from "@/layout/AppHeader.vue"
import Footer from "@/layout/AppFooter.vue"

export default defineComponent({
    name: "DefaultLayout",
    components: { Header, Footer },
    setup() {},
    methods: {}
})
</script>
