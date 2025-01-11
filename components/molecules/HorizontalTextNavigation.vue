<template>
  <nav class="w100">
    <ul class="d-flex justify-between text-center">
      <li :class="{'mr-4': items.length - 1 !== i}" v-for="(item, i) in items" :key="i">
        <a :href="'#' + item.href" @click.prevent="emits('click:item', item)">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps([
  'items'
])
const emits = defineEmits([
  'click:item'
])
</script>

<style scoped>

</style>