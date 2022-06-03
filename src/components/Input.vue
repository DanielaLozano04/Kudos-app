<script setup>
import { computed } from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="mt-3">
    <div class="relative mt-1 border rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
      </div>
      <textarea v-model="value" class="block w-full py-3 pl-4 pr-12 border-gray-300 rounded-md resize-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Write something" name="kudostext" id="kudostext" cols="30" rows="3"></textarea>
      <div class="absolute inset-y-0 right-0 flex items-center">
      </div>
    </div>
  </div>
</template>