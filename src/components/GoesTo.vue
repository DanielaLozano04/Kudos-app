<script setup>
import { computed } from "vue"
import useUsers from "../composables/useUsers";
import useFileGenerator from "../composables/useFileGenerator";

const { kudos } = useUsers()
const { parse, generateBlobTxtFile, urlHref } = useFileGenerator()

const kudosReverse = computed(() => {
    let newKudos = [...kudos.value]
    return newKudos.reverse()
})

const generateDownloadFile = () => {
    if(!confirm("Deseas descargar los kudos ingresados?")) return false
    let texto = parse(kudos)

    if(texto){
        generateBlobTxtFile(texto)
    }else{
        alert("No se encontraron kudos en la lista :(")
    }
}
</script>

<template>
  <div class="bg-[#F6F8F9] px-6 py-4 ml-4 mr-8 mt-4 mb-4">

      <div class="flex items-center pb-4 place-content-between">
       <span class="text-sm text-[#6E7C87] font-semibold uppercase">  🏆 #kudos goes To...</span>
       <button class="bg-white text-[10px] font-semibold text-[#6E7C87] rounded-md border border-[#D1D5DB] px-4 py-[4px] mr-2" @click="generateDownloadFile">download</button>
      </div>

      <div v-if="kudosReverse.length > 0" class="h-[20rem] overflow-y-auto">
          <div v-for="(kudo, index) in kudosReverse" :key="index" class=" border rounded-md border-[#D1D5DB] bg-white px-6 py-4 mb-2">
              <p class=" text-[#111827] font-normal text-sm">{{kudo.descripcion}}</p>
              <div class="flex justify-between">
                  <div class="flex w-1/2 pt-3">
                      <img class="w-[25px] h-[25px] grid content-center rounded-full" :src="kudo.from.imagen" :alt="kudo.from.nombre" :title="kudo.from.nombre">
                      <img class="p-[2px]" src="/imagenes/SVG/Arrow-narrow.svg" alt="Arrow">
                      <img v-for="(person, index) in kudo.to" :key="index" class="w-[25px] h-[25px] grid content-center rounded-full" :src="person.imagen" :alt="person.nombre" :title="person.nombre">
                  </div>
                  <div  class="flex justify-end w-1/2 pt-3">
                      <img v-for="(mention, index2) in kudo.mentions" :key="index2" class="w-[25px] h-[25px] grid content-center -mr-[2px] ring-2 ring-white rounded-full" :src="mention.imagen" :alt="mention.nombre" :title="mention.nombre">
                  </div>
              </div>
          </div>
      </div>
      <div v-else class="h-[20rem] overflow-y-auto">
            <div class="flex items-center justify-center h-full">
                <img src="/imagenes/SVG/empty-goesto.svg" alt="emty state">
            </div>
      </div>
 </div>
</template>