<template>
    <article class="member_event">
        <div class="inner_wrap">
            <h2>
                혜택에 혜택을 더해서!
                <br />
                <strong>멤버십 가입 이벤트</strong>
                <span>에 참여해 보세요!</span>
            </h2>
            <p class="title_info">
                휴대폰 결제 멤버십이 처음이세요?
                <br class="only_mo" />
                지금 가입하면 첫 달 100원!
            </p>
            <div class="first">
                <div class="text_box">
                    <p class="name">휴대폰 결제 멤버십 월정액</p>
                    <del>정가 월 2,900원</del>
                    <p class="result">
                        첫 달
                        <strong>100원</strong>
                    </p>
                    <div class="img_box only_mo">
                        <Img pName="membership/p_img_4.png" mName="membership/m_img_4.png" />
                    </div>
                    <p class="secret">* 최초 신규 가입 1회에 한해 적용됩니다.</p>
                </div>
                <div class="img_box only_pc">
                    <Img pName="membership/p_img_4.png" mName="membership/m_img_4.png" />
                </div>
            </div>
            <p class="title_info">
                신규가입 후 멤버십 유지 시 혜택이 더!
                <br class="only_mo" />
                둘째, 셋째 달 추가 5천 원 청구 할인 제공!
            </p>
            <div class="second">
                <div class="text_box">
                    <p class="name">
                        신규가입 후 둘째, 셋째 달
                        <br class="only_mo" />
                        콘텐츠 이용료 결제 시
                    </p>
                    <p class="result">
                        <strong>5,000원</strong>
                        <br />
                        <span>청구할인</span>
                    </p>
                    <div class="img_box only_mo">
                        <Img pName="membership/p_img_5.png" mName="membership/m_img_5.png" />
                    </div>
                    <p class="secret">* 최초 신규 가입 1회에 한해 적용됩니다.</p>
                    <p class="secret">* 아래 [멤버십 가입 이벤트 참여하기] 버튼을 눌러 이벤트 페이지에서 참여 신청을 완료해야 혜택 제공</p>
                </div>
                <div class="img_box only_pc">
                    <Img pName="membership/p_img_5.png" mName="membership/m_img_5.png" />
                </div>
            </div>
            <a href="https://dcbevent.sktelecom.com/ep/MjAyMzA1MDkwMDAwOTQx" target="_blank" class="go_event">멤버십 가입 이벤트 참여하기</a>
        </div>
    </article>
</template>
<script setup lang="ts">
import "./memberEvent.scss"
import Img from "@/components/Img.vue"
</script>
