<template>
    <article class="use_info_container">
        <div class="info_container">
            <div class="item">
                <div class="img_box">
                    <Img pName="use/p_icon1.png" mName="use/m_icon1.png"></Img>
                </div>
                <p>
                    대한민국 대표 통신사
                    <br />
                    SK텔레콤의
                    <br />
                    개인정보 보안
                </p>
            </div>
            <div class="item">
                <div class="img_box">
                    <Img pName="use/p_icon2.png" mName="use/m_icon2.png"></Img>
                </div>
                <p>
                    복잡한 단계는 그만!
                    <br />
                    휴대폰만 있으면
                    <br />
                    어디서든 간편 결제
                </p>
            </div>
            <div class="item">
                <div class="img_box">
                    <Img pName="use/p_icon3.png" mName="use/m_icon3.png"></Img>
                </div>
                <p>
                    휴대폰 요금과
                    <br />
                    함께 청구되는
                    <br />
                    편리한 요금 정산
                </p>
            </div>
        </div>
        <div class="brands_container">
            <h2>
                <strong>다양한 마켓플레이스</strong>
                <span>에서</span>
                <br />
                휴대폰 결제 혜택을 누리세요!
            </h2>
            <div class="rolling_wrap">
                <div class="rolling"></div>
                <div class="rolling reverse only_mo"></div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref } from "vue"
import "./useInfo.scss"
import Img from "@/components/Img.vue"
</script>
