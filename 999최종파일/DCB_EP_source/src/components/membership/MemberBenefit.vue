<template>
    <article class="benefit">
        <h2>
            <strong>월 2,900원</strong>
            <span>(부가세 포함)으로</span>
            <br />
            쓸수록 커지는 혜택을 받아 보세요!
        </h2>
        <div class="flex_container">
            <div class="first">
                <p class="name">
                    콘텐츠 이용료
                    <br />
                    결제 금액의
                    <strong>3% 할인</strong>
                </p>
                <div class="img_box">
                    <Img pName="membership/p_img_2.png" mName="membership/m_img_2.png" />
                </div>
                <p class="secret">*월 최대 1만 원 청구 할인</p>
            </div>
            <div class="second">
                <p class="name">
                    <span class="small">매달 콘텐츠 이용료와 휴대폰 결제를 합하여</span>
                    <br />
                    30만 원 이상 이용 시
                    <br />
                    <strong>5천 원 추가 할인</strong>
                </p>
                <div class="img_box">
                    <Img pName="membership/p_img_3.png" mName="membership/m_img_3.png" />
                </div>
                <p class="secret">*매달 1일부터 마지막 날까지 결제한 금액 기준</p>
            </div>
        </div>
        <a :href="link" target="_blank" class="go_benefit">휴대폰 결제 멤버십 가입하기</a>
    </article>
</template>
<script setup lang="ts">
import { ref } from "vue"
import "./memberBenefit.scss"
import Img from "@/components/Img.vue"

let link = ref("")

let mobileCheck = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

link.value = mobileCheck() ? "https://skt.sh/7iVrv" : "https://www.tworld.co.kr/web/product/callplan/NA00008061"
</script>
