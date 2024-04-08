<template>
    <picture>
        <source :srcset="mName" :media="`all and (max-width: ${mobile}px)`" />
        <source :srcset="pName" :media="`all and (min-width: ${mobile + 1}px)`" />
        <img :src="pName" :alt="alt" />
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
