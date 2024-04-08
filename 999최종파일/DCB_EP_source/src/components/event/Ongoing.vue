<template>
  <article class="list_container">
    <a @click="eventPopup(item.prmViewUrl)" v-for="(item, index) in promotion?.prmList" :key="index" class="item">
      <Img :pName="item.ptileImgUrl" :mName="item.mtileImgUrl" :alt="item.prmTitle"/>
    </a>
  </article>
  <Pagination :total-count="promotion?.totalCount" :rows-per-page="rowsPerPage" :current-page="currentPage"
              @read="read"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import "./list.scss"
import Img from "@/components/Img2.vue"
import Pagination from "@/components/pagination/Pagination.vue"
import {Promotion, PromotionStatType} from "@/apps/common/interface/promotion"
import {getPromotionList, eventPopup} from "@/apps/common/funs";

const promotion = ref<Promotion | null>(null)
const prmStat = ref<PromotionStatType>('ING')
const rowsPerPage = ref<number>(4)
const currentPage = ref<number>(1)

const read = async (idx: number = 1) => {
  currentPage.value = idx
  const {data} = await getPromotionList(prmStat, currentPage, rowsPerPage);
  promotion.value = (data?.resultCode === '0') ? data : null
}

onMounted(async () => {
  await read()
})
</script>
