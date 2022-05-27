<script setup>
import useUsers from "../composables/useUsers";

const { kudos } = useUsers()
</script>

<template>
  <div class="bg-[#F6F8F9] px-6 py-4 ml-4 mr-8 mt-4 mb-4">

      <div class="flex items-center pb-4 place-content-between">
       <span class="text-sm text-[#6E7C87] font-semibold uppercase">  🏆 #kudos goes To...</span>
      </div>

      <div class="h-[20rem] overflow-y-auto">
          <div v-for="kudo in kudos" :key="kudo" class=" border rounded-md border-[#D1D5DB] bg-white px-6 py-4 mb-2">
              <p class=" text-[#111827] font-normal text-sm">{{kudo.descripcion}}</p>
              <div class="flex justify-between">
                  <div class="flex w-1/2 pt-3">
                      <img class="w-[25px] h-[25px] grid content-center rounded-full" :src="kudo.from.imagen" :alt="kudo.from.nombre">
                      <img class="p-[2px]" src="/imagenes/SVG/Arrow-narrow.svg" alt="Arrow">
                      <img class="w-[25px] h-[25px] grid content-center rounded-full" :src="kudo.to.imagen" :alt="kudo.to.nombre">
                  </div>
                  <div  class="flex justify-end w-1/2 pt-3">
                      <img v-for="mention in kudo.mentions" :key="mention" class="w-[25px] h-[25px] grid content-center -mr-[2px] ring-2 ring-white rounded-full" :src="mention.imagen" :alt="kudo.mentions">
                  </div>
              </div>
          </div>

      </div>


 </div>
</template>