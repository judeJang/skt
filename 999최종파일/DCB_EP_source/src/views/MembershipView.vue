<template>
    <section class="membership_content">
        <Visual />
        <Benefit />
        <Event />
    </section>
</template>
<script setup lang="ts">
import { defineComponent } from "vue"
import "@/styles/pages/_membership.scss"
import Visual from "@/components/membership/MemberVisual.vue"
import Benefit from "@/components/membership/MemberBenefit.vue"
import Event from "@/components/membership/MemberEvent.vue"
</script>
