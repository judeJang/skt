<template>
    <article>
        <swiper @swiper="firstSwiper" class="fSwiper">
            <swiper-slide v-for="index in 5" :key="index">{{ index }}</swiper-slide>
        </swiper>
    </article>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick, onBeforeUnmount } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"

export default defineComponent({
    name: "SwiperTest",
    components: { Swiper, SwiperSlide },
    data() {
        return {}
    },

    setup() {
        let fSwiper: any = null
        const firstSwiper = (swiper: any) => {
            console.log(typeof fSwiper)
            fSwiper = swiper
        }

        onMounted(() => {
            fSwiper.slideTo(3, 1000)
        })

        onBeforeUnmount(() => {
            fSwiper.destroy()
        })

        return {
            firstSwiper
        }
    },
    mounted() {
        //console.log(document.querySelector(".fSwiper"))
        // const swiperObj =  new SwiperSlide()
        // console.log(this.$refs.fSwiper)
        // this.swiper.slideTo(3, 1000, false)
    },
    computed: {
        swiper() {
            // return this.$refs.mySwiperRef.$swiper
        }
    }
})
</script>
<style lang="scss" scoped>
.fSwiper {
    .swiper-slide {
        height: 50px;
        background: rgba(black, 0.5);
    }
}
</style>
