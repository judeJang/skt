<template>
    <section class="use_content">
        <Visual />
        <Info />
        <Payment />
        <Customer />
    </section>
</template>
<script setup lang="ts">
import "@/styles/pages/_use.scss"
import Visual from "@/components/use/UseVisual.vue"
import Info from "@/components/use/UseInfo.vue"
import Payment from "@/components/use/UsePayment.vue"
import Customer from "@/components/use/UseCustomer.vue"
</script>
