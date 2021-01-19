<template>
  <div>
    <main class="max-w-4xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h3 class="text-xl leading-9 font-extrabold text-gray-900 tracking-tight sm:leading-10 md:leading-14">
          <a aria-label="Chan" href="/">Chan</a>
        </h3>
      </div>
      <Home v-if="isIndex" />
      <Notes v-else-if="isDaily" />
      <Article v-else />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Notes from './Notes.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
const isDaily = computed(() => route.path.includes('/daily/'))
</script>