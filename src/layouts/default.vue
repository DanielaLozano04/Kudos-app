<script setup>
import Menu from '../components/Menu.vue'
import Iqthinkers from '../components/Iqthinkers.vue'
import GoesTo from '../components/GoesTo.vue'
import KudosChart from '../components/KudosChart.vue'
import FromTo from '../components/FromTo.vue'
import { ref } from 'vue'

const loadingScreen = ref(true)

setTimeout(function(){
  loadingScreen.value = false
},3000)

</script>

<template>
  <div v-if="loadingScreen" class="fixed z-40 top-0 left-0 bg-[#ffffff] w-full h-full" >
    <div class="flex items-center justify-center w-full h-full">
      <div class="text-center">
        <div  class="bg-[#EC3425] rounded-3xl p-4">
          <div class="lds-heart"><div></div></div>
        </div>
        <h2 class="">KUDOS APP</h2>
      </div>

    </div>
  </div>
  <Menu/>
  <main class="flex h-[calc(100vh-69px)] pt-5">
    <section class="w-1/2">
        <KudosChart/>
        <Iqthinkers/>
    </section>
    <section class="w-1/2">
        <FromTo/>
        <GoesTo/>
    </section>
  </main>
</template>