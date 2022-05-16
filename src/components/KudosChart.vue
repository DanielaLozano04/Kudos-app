<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Legend } from 'chart.js'
import useUsers from '../composables/useUsers.js'

ChartJS.register(Legend)

const { users, crearArrayDeUsuarios, crearArrayDeKudos } = useUsers()

const chartId = 'doughnut'

const chartData = {
        labels: crearArrayDeUsuarios(),
        datasets: [ { data: crearArrayDeKudos() } ]
      }

const chartOptions = {
  responsive: true,
}
</script>

<template>
<div class="bg-[#F6F8F9] px-6 py-4 ml-8 mr-4 mt-4 mb-4">
		<div class="flex items-center pb-4 place-content-between">
			<span class="text-sm text-[#6E7C87] font-semibold uppercase"> 🔥KUDOSCHARTS</span>
		</div>
    <section>
      <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" ></Bar>
    </section>
</div>
</template>