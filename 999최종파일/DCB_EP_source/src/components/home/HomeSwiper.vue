<template>
    <article class="home_swiper_container">
        <swiper
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :options="swiperOpt"
            :modules="modules"
            :followFinger="false"
            :loop="true"
            :speed="800"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false
            }"
            class="home_swiper"
        >
            <swiper-slide v-for="(swiper, index) in swiperImages" :key="index">
                <!--        <router-link :to="swiper.prmViewUrl">-->
                <a @click="eventPopup(swiper.prmViewUrl)" target="_blank">
                    <Img2 :pName="swiper.pswipeImgUrl" :mName="swiper.mswipeImgUrl" :alt="swiper.prmTitle" />
                </a>
                <!--        </router-link>-->
            </swiper-slide>
        </swiper>
        <!-- custom modules -->
        <!-- 
        230725 수정 사항 - 버튼 제거
        <button type="button" class="swiper-button-prev" @click="prev()"></button>
        <button type="button" class="swiper-button-next" @click="next()"></button> 
    -->

        <div class="controller">
            <div class="num">
                <button type="button" class="prev_btn" @click="prev()"></button>
                <span class="cur">{{ swiperCurrent }}</span>
                <span class="total">{{ length }}</span>
                <button type="button" class="next_btn" @click="next()"></button>
            </div>
            <button type="button" @click="control()">
                <img src="@/assets/imgs/home/icon_pause.png" alt="pause" v-if="autoplayState" />
                <img src="@/assets/imgs/home/icon_play.png" alt="play" v-else />
            </button>
        </div>
    </article>
</template>

<script lang="ts">
//default
import { defineComponent, onMounted, ref } from "vue"

//plug in
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

//data
//components
import Img2 from "@/components/Img2.vue"

//styles
import "swiper/css"
import "swiper/css/navigation"
import "./homeSwiper.scss"
import { getPromotionList, eventPopup } from "@/apps/common/funs"
import { PromotionList, PromotionStatType } from "@/apps/common/interface/promotion"

export default defineComponent({
    name: "HomeSwiper",
    components: { Swiper, SwiperSlide, Img2 },
    data() {
        return {
            mobile: Number(this.$mobile)
        }
    },
    setup: function () {
        let swiperCurrent = ref<number>(1)
        let swiperObj: any = ref(null)
        let curSwiper = ref<string>("first")
        let autoplayState = ref<boolean>(true)
        let length = ref<number>(0)
        let swiperImages = ref<PromotionList[]>([])
        const prmStat = ref<PromotionStatType>("ING")
        const rowsPerPage = ref<number>(1)
        const currentPage = ref<number>(100)
        // let swiperImages = ref();

        const swiperOpt = {
            speed: 800,
            observeParents: true,
            observeSlideChildren: true,
            resizeObserver: true,
            slidesPerView: 1
        }

        const getList = async () => {
            const { data } = await getPromotionList(prmStat, rowsPerPage, currentPage)
            length.value = data?.totalCount
            swiperImages.value = data?.prmList
        }

        const onSwiper = (swiper: any) => {
            swiperObj = swiper
        }

        const onSlideChange = (swiper: any) => {
            swiperCurrent.value = (swiper.realIndex || 0) + 1
            // console.log(swiperObj.autoplay)
        }

        const prev = () => {
            swiperObj.slidePrev()
        }
        const next = () => {
            swiperObj.slideNext()
        }

        const control = () => {
            if (autoplayState.value) {
                swiperObj.autoplay.stop()
                autoplayState.value = false
            } else {
                swiperObj.autoplay.start()
                autoplayState.value = true
            }
        }

        onMounted(() => {
            init()
        })

        const init = () => {
            getList()
        }

        //use
        return {
            swiperObj,
            swiperCurrent,
            onSlideChange,
            onSwiper,
            prev,
            next,
            control,
            autoplayState,
            swiperOpt,
            curSwiper,
            length,
            modules: [Autoplay],
            swiperImages,
            eventPopup
        }
    }
})
</script>
