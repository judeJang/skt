<template>
    <article class="about_event">
        <div class="inner_wrap">
            <div class="text_box">
                <h2>
                    <strong>T 휴대폰 결제</strong>
                    <span>란?</span>
                </h2>
                <p>
                    Google Play, App Store 등 다양한 마켓플레이스에서
                    <br />
                    SKT 휴대폰으로 결제하고 결제 금액은 <br class= /> 다음 달 휴대폰 요금에 합산되어 고객님께 청구되는 방식
                </p>
                <button type="button" @click="goUse()">자세히 알아보기</button>
            </div>
            <div class="img_box">
                <Img pName="home/p_main_visual1.png" mName="home/m_main_visual1.png" />
            </div>
        </div>
    </article>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"
import "./homeAbout.scss"
import Img from "@/components/Img.vue"

const router = useRouter()

const goUse = () => {
    router.push("/use")
}
</script>
