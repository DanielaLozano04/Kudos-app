<script setup>
import Menu from '../components/Menu.vue'
import Iqthinkers from '../components/Iqthinkers.vue'
import GoesTo from '../components/GoesTo.vue'
import KudosChart from '../components/KudosChart.vue'
import FromTo from '../components/FromTo.vue'
</script>

<template> 
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