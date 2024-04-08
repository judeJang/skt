<template>
    <article class="main_swiper_container">
        <swiper
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :options="swiperOpt"
            :loop="true"
            :navigation="true"
            :modules="modules"
            :autoplay="{
                delay: 100000,
                disableOnInteraction: false
            }"
            class="main_swiper"
        >
            <swiper-slide v-for="(banner, index) in swiperData" :key="index">
                <router-link :to="banner.link">
                    <picture>
                        <source :srcset="banner.moImg" :media="`all and (max-width: ${mobile}px)`" />
                        <source :srcset="banner.pcImg" :media="`all and (min-width: ${mobile + 1}px)`" />
                        <img :src="banner.pcImg" :alt="banner.name" />
                    </picture>
                </router-link>
            </swiper-slide>
        </swiper>
        <div class="paging">{{ swiperCurrent }} / {{ bannerLen }}</div>
        <button @click="changeSwiperData('1')">asfdfsdafsdaf</button>
        <button @click="changeSwiperData('2')">ccccccccccccccc</button>
    </article>
</template>
<script lang="ts">
import { Ref, ref, defineComponent, onBeforeUnmount, onMounted } from "vue"

import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
// import { swiperData, swiperData2 } from "@/apps/dummy/dummyData"
import { swiperData } from "@/apps/dummy/dummyData"

import "swiper/css"
import "swiper/css/navigation"
import "./homeSwiper.scss"

export default defineComponent({
    name: "HomeSwiper",
    components: { Swiper, SwiperSlide },
    data() {
        return {
            swiperData: [...swiperData],
            mobile: Number(this.$mobile)
        }
    },
    computed: {
        bannerLen(): number {
            return this.swiperData.length
        }
    },
    setup() {
        let visualSwiper: any = ref(null)
        let swiperCurrent: Ref<number> = ref(1)

        const swiperOpt = {
            speed: 500,
            observeParents: true,
            observeSlideChildren: true,
            resizeObserver: true,
            slidesPerView: 1,
            loop: true
            //wrapperClass: "swiper-wrapper"
        }

        const onSwiper = (swiper: object) => {
            visualSwiper.value = swiper
        }

        const onSlideChange = (swiper: any) => {
            swiperCurrent.value = swiper.realIndex + 1
        }

        const gotoSlide = (num: number) => {
            visualSwiper.value.slideTo(num, 1000)
        }

        onMounted(() => {})

        const reset = () => {
            //visualSwiper.value.update()
            visualSwiper.value.updateSlides()
            visualSwiper.value.slideTo(0, 0)
        }

        //hooks
        onBeforeUnmount(() => {})

        const destory = () => {
            // visualSwiper.destroy()
        }
        //use
        return {
            visualSwiper,
            swiperCurrent,
            swiperOpt,
            onSwiper,
            onSlideChange,
            reset,
            destory,
            gotoSlide,
            modules: [Navigation, Autoplay]
        }
    },
    methods: {
        changeSwiperData: function (state: string) {
            this.swiperData = []
            if (state == "1") {
                // this.swiperData = []
                this.swiperData = [...swiperData]
                setTimeout(() => {
                    // this.visualSwiper.update()
                    // this.gotoSlide(0)
                }, 15)
            } else {
                // this.swiperData = []
                // this.swiperData = [...swiperData2]
                setTimeout(() => {
                    // this.visualSwiper.update()
                    // this.gotoSlide(0)
                }, 15)
            }

            // this.visualSwiper.updateProgress()

            if (this.visualSwiper && this.visualSwiper.value) {
                // this.visualSwiper.value.slideTo(1, 1000)
            }
            // console.table(this.swiperData, this.visualSwiper.value)
        }
    },
    watch: {
        swiperData: function (n, o) {
            this.visualSwiper.update()
            setTimeout(() => {
                this.gotoSlide(0)
            }, 10)
        }
    }
})
</script>
