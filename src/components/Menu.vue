<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
const todayDate = dayjs().format('dddd MMM D, YYYY')
const todayHour = ref(dayjs().format('h:mm A'))

setInterval(()=>{
 todayHour.value = dayjs().format('h:mm A')
},5000)

</script>

<template>
<div class="flex justify-between px-[32px] py-[14px] border-b border-[#E5E9EB] ">
  <div class="flex items-center">
    <img class="h-10 pr-[18px] border-r border-[#B0BABF]"
    src="/imagenes/SVG/kudos-logo.svg"
    alt="Kudos Logo">

    <img class="h-5 pl-[18px]"
    src="/imagenes/SVG/iqthink-logo.svg"
    alt="IQTHINK Logo">
  </div>
  <div class="flex flex-col text-sm text-right uppercase">
    <span class="font-semibold text-[#6E7C87]">
       {{ todayDate }}
    </span>
    <span class="font-regular text-[#252C32]">
        {{ todayHour }}
    </span>
  </div>
</div>
</template>
