<template>
    <nav class="tabs">
        <button type="button" v-for="(btn, index) in data" :key="btn.name" @click="tabClick(index)" :class="{ active: btn.isActive }">{{ btn.name }}</button>
    </nav>
</template>
<script setup lang="ts">
import { defineComponent, ref } from "vue"
import "./eventTabs.scss"
const data = ref([
    { name: "진행 중인 이벤트", isActive: true },
    { name: "종료된 이벤트", isActive: false }
])
let onGoing = ref(true)

const emit = defineEmits(["eventChange"])

let tabClick = (id: number) => {
    for (let [index, value] of data.value.entries()) {
        if (id == index) {
            value.isActive = true
            if (value.name == "진행 중인 이벤트") {
                onGoing.value = true
            } else {
                onGoing.value = false
            }
        } else {
            value.isActive = false
        }
    }
    emit("eventChange", onGoing.value)
}
</script>
