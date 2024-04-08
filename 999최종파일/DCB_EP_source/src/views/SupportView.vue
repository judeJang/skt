<template>
    <section class="support_content">
        <Faq />
        <SupportCenter />
    </section>
</template>
<script setup lang="ts">
import { ref } from "vue"
import "@/styles/pages/_support.scss"
import Faq from "@/components/support/SupportFaq.vue"
import SupportCenter from "@/components/support/SupportCenter.vue"
</script>
