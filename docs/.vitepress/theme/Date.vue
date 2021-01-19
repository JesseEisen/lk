<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd class="text-base leading-8 font-medium text-gray-500">
      <time :datetime="getDateTime()"> {{ date.string }} </time>
    </dd>
  </dl>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  date: Object,
})

function getDateTime() {
  return new Date(props.date.time).toISOString()
}
</script>