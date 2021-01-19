<template>
  <div>
    <div class="grid grid-cols-2 gap-4 grid-flow-col">
      <div>
        <h4 class="my-3 text-xl leading-9">Notes</h4>
        <ul>
          <li class="py-0.5" v-for="{ title, href, date, category, excerpt } of $site.customData.daily">
            <article class="spance-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <!-- <Date :date="date" /> -->
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <p class="text-base leading-8 tracking-tight">
                    <span>
                      <a class="list-link text-black hover:bg-black hover:text-white" :href="href">{{ category }}</a>
                      - last update {{ title }}
                    </span>
                  </p>
                  <!-- <div v-if="excerpt" class="prose max-w-none text-gray-500" v-html="excerpt"></div> -->
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="my-0.5 text-xl leading-9">Posts</h4>
        <ul>
          <li class="py-1" v-for="{ title, href, date, excerpt } of $site.customData.posts">
            <article class="spance-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <Date :date="date" />
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <p class="text-base leading-8 tracking-tight">
                    <a class="post-link text-gray-900 hover:bg-black hover:text-white" :href="href"> {{ title }} </a>
                  </p>
                  <!-- <div v-if="excerpt" class="prose max-w-none text-gray-500" v-html="excerpt"></div> -->
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Date from './Date.vue'
</script>

<style scoped>
.list-link::before {
  content: '{';
}

.list-link::after {
  content: '}';
}
</style>