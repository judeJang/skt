<template>
    <article class="use_payment_container">
        <div class="inner_wrap">
            <h2>
                초간단
                <strong>휴대폰 결제 설정</strong>
                하기!
            </h2>

            <div class="navi_swiper_wrap">
                <swiper
                    class="navi_swiper"
                    @swiper="naviSwiper"
                    :slidesPerView="'auto'"
                    :observeParents="true"
                    :observeSlideChildren="true"
                    :resizeObserver="true"
                    :spaceBetween="15"
                    :centeredSlides="true"
                    :centeredSlidesBounds="true"
                    :freeMode="true"
                    :allowTouchMove="false"
                    :breakpoints="{
                        '720': {
                            spaceBetween: 15,
                            allowTouchMove: false
                        },
                        '0': {
                            spaceBetween: 11,
                            allowTouchMove: true
                        }
                    }"
                >
                    <swiper-slide v-for="(brand, index) in navBtn" :key="index" @click="clickNav(index)" :class="{ active: brand.isActive }">
                        <Img :pName="brand.pImg" :mName="brand.mImg" :alt="alt[index]" />
                    </swiper-slide>
                </swiper>
            </div>

            <div class="info_swiper_container">
                <swiper
                    @swiper="infoSwiper"
                    @slideChange="onSlideChange"
                    :speed="600"
                    :observeParents="true"
                    :observeSlideChildren="true"
                    :resizeObserver="true"
                    :pagination="{ clickable: true }"
                    :modules="modules"
                    :spaceBetween="20"
                    class="info_swiper"
                >
                    <swiper-slide v-for="(info, index) in currentInfo" :key="index">
                        <Img :pName="info.pImg" :mName="info.mImg" />
                        <p class="step">STEP {{ addZero(index) }}</p>
                        <p class="desc" v-html="info.description"></p>
                    </swiper-slide>
                </swiper>
                <button type="button" class="prev" :disabled="curSwiper == 'first'" @click="prev()"></button>
                <button type="button" class="next" :disabled="curSwiper == 'ended'" @click="next()"></button>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation } from "swiper"

import { useWindowWidth } from "@/mixins"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./usePayment.scss"

import { howToUse } from "@/apps/dummy/dummyData"
import Img from "@/components/Img.vue"

const data = ref([...howToUse])

let alt = ref<string[]>([]) //네비 이미지 알트 값
let navBtn = ref<{ pImg: string; mImg: string; isActive?: boolean }[]>([]) //스와이퍼 버튼
let currentInfo = ref<{ pImg: string; mImg: string; description: string }[]>([]) //현재 스와이퍼 데이터

let { windowWidth } = useWindowWidth()

//swiper instance
let swiperNav: any = ref(null)
let swiperInfo: any = ref(null)

let curSwiper = ref("first")
let length = ref(NaN)
let swiperCurrent = ref(1)

const prev = () => {
    swiperInfo.slidePrev()
}
const next = () => {
    swiperInfo.slideNext()
}

const onSlideChange = (swiper: any) => {
    swiperCurrent.value = swiper.realIndex + 1
    length.value = currentInfo.value.length
}

watch(swiperCurrent, (n) => {
    if (n == 1) {
        curSwiper.value = "first"
    } else if (n == length.value) {
        curSwiper.value = "ended"
    } else {
        curSwiper.value = ""
    }
})

//가공
for (let obj of data.value) {
    alt.value.push(obj.name)

    let tmpObj: { pImg: string; mImg: string; isActive?: boolean } = { ...obj.img }
    tmpObj.isActive = false
    navBtn.value.push(tmpObj as { pImg: string; mImg: string; isActive?: boolean })
}

//nav click
const clickNav = (num: number | string) => {
    if (typeof num == "number") {
        for (let obj of navBtn.value) {
            obj.isActive = false
        }
        navBtn.value[num].isActive = true
        currentInfo.value = data.value[num].use
        console.log(windowWidth.value)
        if (windowWidth.value < 720) {
            swiperNav.slideTo(num)
        }
        swiperInfo.slideTo(0)
    }
}

//info swiper 부분
const addZero = (num: number): string => "0" + (num + 1)

//스와이퍼 인스턴스 선언
const naviSwiper = (swiper: any) => {
    swiperNav = swiper
}
const infoSwiper = (swiper: any) => {
    swiperInfo = swiper
}
const pagination = { clickable: true }
const modules = [Pagination, Navigation]

//hook
onMounted(() => {
    //첫번째 정보
    currentInfo.value = data.value[0].use
    //첫번째 버튼 활성화
    navBtn.value[0].isActive = true
})
</script>
