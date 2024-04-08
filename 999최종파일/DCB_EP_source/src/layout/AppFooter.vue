<template>
    <footer>
        <div class="inner_wrap">
            <div class="text_container">
                <p class="logo">
                    <Img pName="p_footer_logo.png" mName="m_footer_logo.png" alt="T 휴대폰 결제" />
                </p>
                <p class="info">고객센터(무료) : 휴대폰 국번없이 114 또는 080-011-6000 (오전 9시 ~ 오후 6시, 주말 및 공휴일 제외)</p>
                <p class="info">
                    이벤트 문의 :
                    <a href="mailto:payment_voc@sktelecom.com">payment_voc@sktelecom.com</a>
                </p>
                <p class="copyright">COPYRIGHT © SK TELECOM CO., LTD. ALL RIGHTS RESERVED.</p>
            </div>
            <a href="https://www.tworld.co.kr/poc/html/main/MA.html" target="_blank" class="footer_link">
                T world
                <Img pName="p_footer_arr.png" mName="m_footer_arr.png" />
            </a>
        </div>
    </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Img from "@/components/Img.vue"
export default defineComponent({
    name: "Footer",
    components: { Img }
})
</script>
