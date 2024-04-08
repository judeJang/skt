<template>
    <article class="app_download">
        <div class="inner_wrap">
            <div class="text_box">
                <h2>
                    언제 어디서나 간편하게
                    <br />
                    <strong>PASS by SKT</strong>
                </h2>
                <p>
                    휴대폰 결제 멤버십 가입과 본인 확인을 편리하게
                    <br />
                    안전하고 간편한 PASS 인증서!
                </p>
                <div class="btn_box">
                    <a :href="androidLink" class="android">Google play</a>
                    <a :href="appLink" class="apple">App Store</a>
                </div>
            </div>
            <div class="img_box">
                <Img pName="home/p_main_visual2.png" mName="home/m_main_visual2.png" />
            </div>
        </div>
    </article>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Img from "@/components/Img.vue"
import "./homeDownload.scss"

export default defineComponent({
    name: "HomeDownload",
    components: { Img },
    data() {
        return {
            androidLink: "https://play.google.com/store/apps/details?id=com.sktelecom.tauth",
            appLink: "https://apps.apple.com/kr/app/pass-by-skt/id1141258007"
        }
    }
})
</script>
