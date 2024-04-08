<template>
    <article class="visual">
        <h1>T 휴대폰 결제 멤버십</h1>
        <p>
            휴대폰 결제만 해도 혜택이 쏟아진다!
            <br />
            월 최대 1만 5천 원 할인 혜택을 받아 보세요
        </p>
        <div class="img_box">
            <Img pName="membership/p_img_1.png" mName="membership/m_img_1.png" />
        </div>
    </article>
</template>
<script setup lang="ts">
import { ref } from "vue"
import "./memberVisual.scss"
import Img from "@/components/Img.vue"
</script>
