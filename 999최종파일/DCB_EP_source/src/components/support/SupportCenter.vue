<template>
    <article class="support_center">
        <h2>고객 센터</h2>
        <div class="center_info">
            <div class="box">
                <Img pName="support/p_icon1.png" mName="support/m_icon1.png" />
                <div class="text_box">
                    <strong>114</strong>
                    또는
                    <br class="only_pc" />
                    <strong>080-011-6000</strong>
                    <br />
                    (무료)
                </div>
            </div>
            <div class="box">
                <Img pName="support/p_icon2.png" mName="support/m_icon2.png" />
                <div class="text_box">
                    <strong>1599-0011</strong>
                    <br />
                    (유료)
                </div>
            </div>
            <div class="box">
                <Img pName="support/p_icon3.png" mName="support/m_icon3.png" />
                <div class="text_box">
                    <strong>09~12시/13~18시</strong>
                    <br />
                    (평일)
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
import "./supportCenter.scss"
import { faqWord } from "@/apps/dummy/dummyData"
import Img from "@/components/Img.vue"
</script>
