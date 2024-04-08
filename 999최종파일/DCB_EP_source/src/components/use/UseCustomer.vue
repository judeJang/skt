<template>
    <article class="use_cs_container">
        <h2>
            <span>궁금한 내용은</span>
            <strong>고객지원</strong>
            <span>
                을
                <br class="only_mo" />
                확인해주세요!
            </span>
        </h2>
        <div class="cs_container">
            <div class="box">
                <Img pName="use/p_bottom_icon1.png" mName="use/m_bottom_icon1.png" />
                <p>
                    114 (무료)
                    <br />
                    080-011-6000 (무료)
                    <br />
                    1599-0011 (유료)
                </p>
            </div>
            <router-link class="box link" to="/support">
                <Img pName="use/p_bottom_icon2.png" mName="use/m_bottom_icon2.png" />
                <p>
                    자주 묻는 질문
                    <br />
                    바로가기
                </p>
            </router-link>
        </div>
    </article>
</template>

<script setup lang="ts">
import "./useCustomer.scss"
import Img from "@/components/Img.vue"
</script>
