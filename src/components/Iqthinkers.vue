<script setup>
import useUsers from '../composables/useUsers.js'
import Modal from '../components/Modal.vue'
import { ref } from 'vue'

const openIQThinkersModal = ref(false)
const openOptionsIQThinkersModal = ref(false)

const { personas, appConfig, saveOptions, newIQTHINKERSForm, agregarIQTHINKER, resetApp } = useUsers()


const IQTHINKERSMiddleware = () => {
	if(agregarIQTHINKER()){
		openIQThinkersModal.value = false
	}
}

const optionsMiddleware = () => {
	if(saveOptions()){
		openOptionsIQThinkersModal.value = false
	}else{
		alert("ha ocurrido un error al guardar las opciones")
	}
}
</script>

<template>
  <div class="bg-[#F6F8F9] px-6 py-4 ml-8 mr-4 mt-6 mb-4">
		<div class="flex items-center pb-4 place-content-between">
			<span class="text-sm text-[#6E7C87] font-semibold uppercase"> 🔥 iqthinkers</span>
			<div >
					<button
					type="button"
					@click="openOptionsIQThinkersModal=true"
					class="bg-white text-[10px] font-semibold text-[#6E7C87] rounded-md border border-[#D1D5DB] px-4 py-[4px] mr-2"
					>
					Options
					</button>

					<button
					type="button"
					@click="openIQThinkersModal=true"
					class="bg-white text-[10px] font-semibold text-[#6E7C87] rounded-md border border-[#D1D5DB] px-4 py-[4px]"
					>
					Add +
					</button>
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


		<Modal
		:open-modal="openOptionsIQThinkersModal"
		@close="openOptionsIQThinkersModal = false"
		title="⚙️ Options"
	>
<form class="px-6 py-5" >
		<div class="w-full pr-3 mb-2 ">
				<label class="block text-sm font-regular text-[#374151] mb-0.5 " for="grid-state">
					Please select how many kudos you want.
				</label>
		</div>
		<div class="relative text-gray-700 border">
					<select v-model="appConfig.kudosLimite" class="block appearance-none w-full py-1 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-[D1D5DB] relative  cursor-pointer rounded-md bg-white text-left shadow-md  border border-[#D1D5DB] focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm h-11" id="grid-state">
						<option value="3">3 Kudos</option>
						<option value="6">6 Kudos</option>
						<option value="9">9 Kudos</option>
					</select>

					<label for="grid-state">
						<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
			</div>
			</label>
	  </div>

		<div class="mb-4">
			<label class="block text-sm font-regular text-[#374151] mb-2 mt-4 " for="grid-state">
			To reset, please click on "Reset App"
			</label>
			<button
			@click="resetApp()"
			class=" w-full hover:ring-1 hover:ring-[#EC3425] text-sm py-2  rounded-md  text-[#EC3425] border border-[#EC3425] font-medium">Reset App
			</button>

		</div>

	</form>

<div class="px-6 my-2 mb-2">
	<button
		type="button"
		class="inline-flex justify-center rounded-md border-transparent  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-[#DC2E20]
		bg-[#EC3425] border-2 border-[#EC3425] text-white w-full"
		@click="optionsMiddleware()"
	>
		Save
	</button>
</div>

	</Modal>

		<Modal
		:open-modal="openIQThinkersModal"
		@close="openIQThinkersModal = false"
		title="🌟 ADD AN IQTHINKER"
	>
		<form class="px-6 py-5" >
			<div>
					<label class="block text-sm font-semibold text-[#374151]"> Photo </label>
					<div class="flex items-center mt-1 mb-6">
						<span class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
							<img v-if="newIQTHINKERSForm.imagen != ''" :src="newIQTHINKERSForm.imagen" alt="IQTHINKERS IMAGE" class="w-full h-full">
							<svg v-else class="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
							</svg>
						</span>

					</div>
				</div>
					<div class="mb-6">
					<label class="block text-[#374151] text-sm font-semibold mb-1" for="photo-url">
						Photo URL
					</label>
					<input class="appearance-none border border-[#D1D5DB] rounded w-full py-2 px-3 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="photo-url" type="text" v-model="newIQTHINKERSForm.imagen">
				</div>

				<div class="mb-6">
					<label class="block text-[#374151] text-sm font-semibold mb-1" for="full-name">
						Full Name
					</label>
					<input v-model="newIQTHINKERSForm.nombre" class=" appearance-none border border-[#D1D5DB] rounded w-full py-2 px-3 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="full-name" type="text" >
				</div>

				<div class="mb-6">
					<label class="block text-[#374151] text-sm font-semibold mb-1" for="title">
						Title
					</label>
					<input v-model="newIQTHINKERSForm.cargo" class=" appearance-none border border-[#D1D5DB] rounded w-full py-2 px-3 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" >
				</div>

				<div class="mb-4">
					<label class="block text-[#374151] text-sm font-semibold mb-1" for="profile-color">
						Profile Color
					</label>
					<input v-model="newIQTHINKERSForm.color" class=" appearance-none border border-[#D1D5DB] h-[38px] rounded w-full py-0 px-0 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="profile-color" type="color" >
				</div>
	</form>

<div class="px-6 my-2 mb-2">
	<button
		type="button"
		class="inline-flex justify-center rounded-md border-transparent  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-[#DC2E20]
		bg-[#EC3425] border-2 border-[#EC3425] text-white w-full"
		@click="IQTHINKERSMiddleware()"
	>
		Welcome
	</button>
</div>

	</Modal>

</template>