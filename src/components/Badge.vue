<script setup>
defineProps({
  data: {
    type: Object,
    requered: true
  }
})
</script>

<template>
  <div class="bg-[#F6F8F9] border rounded-full border-[#D1D5DB] items-center flex">
      <img class="w-6 h-6 mr-1 rounded-full" :src="data.imagen" :alt="data.nombre">
      <span class="text-[10px] text-[#6C727F] font-semibold line-clamp-1">{{ data.nombre }}</span>
  </div>
</template>