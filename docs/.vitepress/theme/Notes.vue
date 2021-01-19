<template>
  <article class="xl:divide-y xl:divide-gray-200">
    <header class="pt-6 xl:pb-10 space-y-1 text-center">
      <h3 class="text-xl leading-9 font-bold text-gray-900 tracking-tigh">{{ data.title }} - {{ data.subtitle }}</h3>
    </header>

    <Content class="prose max-w-none pt-10 pb-8" />
  </article>
</template>

<script setup>
import Date from './Date.vue'
// import Author from './Author.vue'
import { computed } from 'vue'
import { useFrontmatter, useSiteData, useRoute } from 'vitepress'

const data = useFrontmatter()
const route = useRoute()
const posts = useSiteData().value.customData.daily

function findCurrentIndex() {
  return posts.findIndex((p) => p.href === route.path)
}
// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<style scoped>
:deep(p) {
  font-size: 14px;
}

:deep(li) {
  font-size: 14px;
}

:deep(.table-of-contents > ul) {
  columns: 2;
  line-height: 20px;
  font-family: monospace;
  font-size: 12px;
}

:deep(.table-of-contents > ul li) {
  list-style-type: decimal-leading-zero;
  list-style-position: inside;
  text-transform: capitalize;
  font-size: 12px;
}

:deep(.table-of-contents > ul li::marker) {
  color: #777;
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
  text-indent: 0px !important;
  text-align: start !important;
  text-align-last: start !important;
}

:deep(.table-of-contents > ul li::before) {
  content: none;
}

:deep(code) {
  font-family: monospace;
}

:deep(pre) {
  overflow: auto;
  background: #efefef;
  padding: 10px;
  font-size: 80%;
  margin-bottom: 30px;
  color: #000;
}

:deep(.header-anchor) {
  display: none;
}
</style>