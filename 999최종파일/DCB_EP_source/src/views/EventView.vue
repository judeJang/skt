<template>
    <article class="event_content">
        <Tabs @event-change="eventChange" />
        <OnGoing v-if="onGoing" />
        <Finished v-else />
    </article>
</template>
<script setup lang="ts">
import { ref } from "vue"
import "@/styles/pages/_event.scss"
import Tabs from "@/components/event/EventTabs.vue"
import OnGoing from "@/components/event/Ongoing.vue"
import Finished from "@/components/event/Finished.vue"

let onGoing = ref(true)

const eventChange = (state: boolean) => (onGoing.value = state)
</script>
