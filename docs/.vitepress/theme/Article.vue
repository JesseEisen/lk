<template>
  <article class="xl:divide-y xl:divide-gray-200">
    <header class="pt-6 xl:pb-10 space-y-1 text-center">
      <Date :date="date" />
      <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tigh sm:text-4xl sm:leading-10 md:text-5xl md:leanding-14">
        {{ data.title }}
      </h1>
    </header>

    <Content class="prose max-w-none pt-10 pb-8" />
  </article>

  <footer class="text-right my-12">
    <p class="author-show">{{ data.author }}</p>
  </footer>
</template>

<script setup>
import Date from './Date.vue'
// import Author from './Author.vue'
import { computed } from 'vue'
import { useFrontmatter, useSiteData, useRoute } from 'vitepress'

const data = useFrontmatter()
const route = useRoute()
const posts = useSiteData().value.customData.posts

function findCurrentIndex() {
  return posts.findIndex((p) => p.href === route.path)
}
// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<style scoped>
:deep(a:hover) {
  color: #fff;
  background-color: #000;
}

:deep(.author-show::before) {
  content: '- ';
}

:deep(.author-show::after) {
  content: '.';
}
</style>