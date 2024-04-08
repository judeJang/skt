<template>
    <article class="faq">
        <h2>자주 묻는 질문</h2>
        <dl v-for="(word, index) in data" :key="index" :class="{ is_open: word.isActive }">
            <dt @click="toggleClick(index)">{{ word.question }}</dt>
            <dd v-html="word.answer"></dd>
        </dl>
    </article>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue"
import "./supportFaq.scss"
import { faqWord } from "@/apps/dummy/dummyData"
import Img from "@/components/Img.vue"

type Faq = {
    question: string
    answer: string
    isActive?: boolean
}

const data: Ref<Faq[]> = ref([...faqWord])
for (let word of data.value) {
    word.isActive = false
}

const toggleClick = (id: number) => {
    for (let index in data.value) {
        if (id !== parseInt(index)) {
            data.value[index].isActive = false
        } else {
            data.value[id].isActive = !data.value[id].isActive
        }
    }
}
</script>
