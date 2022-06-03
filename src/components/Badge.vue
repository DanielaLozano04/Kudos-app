<script setup>
import { computed } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    requered: true
  },
  modelValue: Array
})
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
<div class="flex items-center ">
  <input type="checkbox" :id="`chbx-${data.nombre}`" :name="`chbx-${data.nombre}`" v-model="value" :value="data" class="w-0 h-0 peer">
  <div class="bg-[#F6F8F9] peer-checked:bg-[#D1FAE5] text-[#6C727F] peer-checked:text-[#065F46] border rounded-full border-[#D1D5DB] w-full hover:bg-slate-200">
      <label :for="`chbx-${data.nombre}`" class="flex items-center cursor-pointer">
        <img class="w-6 h-6 mr-1 rounded-full" :src="data.imagen" :alt="data.nombre">
        <span class="text-[10px]  font-semibold line-clamp-1">{{ data.nombre }}</span>
      </label>
  </div>
</div>
</template>