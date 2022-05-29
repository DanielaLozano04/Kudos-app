<script setup>
import useUsers from '../composables/useUsers.js'
import Modal from '../components/Modal.vue'

const { personas } = useUsers()
</script>

<template>
  <div class="bg-[#F6F8F9] px-6 py-4 ml-8 mr-4 mt-6 mb-4">
		<div class="flex items-center pb-4 place-content-between">
			<span class="text-sm text-[#6E7C87] font-semibold uppercase"> 🔥 iqthinkers</span>
			<div>
				<!-- <Modal/> -->
			</div>

		</div>

		<div class="overflow-hidden rounded-md shadow ring-1 ring-black ring-opacity-5 h-[26rem] overflow-y-auto">
			<table class="w-full text-left">
				<thead class="bg-[#F9FAFB] sticky top-0 shadow">
					<tr>
						<th class="text-[#6B7280] text-xs font-medium pl-6 py-3">
							NAME
						</th>
						<th class="text-[#6B7280] text-xs font-medium pl-6 py-3">
							STATUS
						</th>
						<th class="text-[#6B7280] text-xs font-medium pl-6 py-3">
							RECEIVED
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-[#D1D5DB] bg-white">
					<tr v-for="persona in personas" :key="persona">
						<td>
							<div class="flex flex-row py-3 pl-6 ">
								<div class="pr-3 w-[40px] h-[40px] grid content-center">
									<img class="rounded-full" :src="persona.imagen" alt="Daniel">
								</div>
								<div class="grid grid-rows-2">
									<span class="text-[#111827] font-normal text-sm">{{persona.nombre}}</span>
									<span class="text-[#6B7280] font-normal text-sm">{{persona.cargo}}</span>
								</div>
							</div>
						</td>
						<td>
							<div class="flex py-3 pl-6">
								<img v-for="n in persona.vidas" :key="n" src="/imagenes/SVG/Heart.svg" class="w-5 h-5" alt="Heart">
								<img v-for="ns in (persona.kudosLimite - persona.vidas)" :key="ns" src="/imagenes/SVG/HeartOutLine.svg" class="w-5 h-5" alt="Heart Outline">
							</div>
						</td>
						<td>
							<span class="pl-6 py-3 text-[#6B7280] font-normal text-sm" >{{ persona.kudos }} #Kudos</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
 </div>
</template>