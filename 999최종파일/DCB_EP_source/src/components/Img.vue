<template>
    <picture>
        <source :srcset="require(`@/assets/imgs/${mName}`)" :media="`all and (max-width: ${mobile}px)`" />
        <source :srcset="require(`@/assets/imgs/${pName}`)" :media="`all and (min-width: ${mobile + 1}px)`" />
        <img :src="require(`@/assets/imgs/${pName}`)" :alt="alt" />
    </picture>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    props: {
        //pc img
        pName: {
            type: String,
            default: ""
        },
        //mo img
        mName: {
            type: String,
            default: ""
        },
        //alt
        alt: {
            type: String,
            default: "img"
        }
    },
    data() {
        return { mobile: Number(this.$mobile) }
    }
})
</script>
