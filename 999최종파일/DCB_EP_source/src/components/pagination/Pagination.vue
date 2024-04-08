<template>
  <article class="paging">
    <!--    <template v-if="isPrev">
          <span @click="read(props.currentPage - 1)">&lt;</span>
        </template>-->
    <span v-for="i in displayPage" :key="i" :class="{ active: i === props.currentPage }" @click="read(i)">{{ i }}</span>
    <!--    <template v-if="isNext">
          <span @click="read(props.currentPage + 1)">&gt;</span>
        </template>-->
  </article>
</template>

<script setup lang="ts">
import {computed, defineEmits, defineProps, ref, watchEffect} from "vue";
import router from "@/router";
import {useRoute} from "vue-router";

const route = useRoute();
const props = defineProps({
  totalCount: {type: Number, default: 0},
  rowsPerPage: {type: Number, default: 10},
  currentPage: {type: Number, default: 1},
  displayPageRange: {type: Number, default: 5},
})

const emit = defineEmits(['read'])
const displayPage = ref<number[]>([])
const isPrev = ref<boolean>(false)
const isNext = ref<boolean>(false)

const lastPage = computed(() => {
  return Math.ceil(props.totalCount / props.rowsPerPage)
})

const pageArr = computed(() => {
  return [...Array(lastPage.value)].map((_, index) => index + 1)
})

const read = async (idx: number) => {
  const to = {path: route.path};
  await router.push(to);
  emit('read', idx);
}

watchEffect(() => {
  isPrev.value = (props.currentPage !== 1)
  isNext.value = (props.currentPage !== lastPage.value)
  const startIndex = Math.floor((props.currentPage - 1) / props.displayPageRange) * props.displayPageRange
  displayPage.value = pageArr.value.slice(startIndex, startIndex + props.displayPageRange)
})

</script>
