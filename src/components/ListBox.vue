<script setup>
import { ref } from 'vue'

  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

import useUsers from '../composables/useUsers.js'

const { personas } = useUsers()

  const personaSeleccionada = ref({ nombre: "Select Someone", imagen: ""})
</script>

<template>
  <Listbox v-model="personaSeleccionada">
      <div class="relative">
          <ListboxButton class="relative w-full  cursor-default rounded-md bg-white py-2 px-3 text-left shadow-md focus:outline-none border border-[#D1D5DB] focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm h-11">
          <div class="flex justify-between" >
            <div class="flex items-center">
              <img v-show="personaSeleccionada.imagen != ''" class="w-[25px] h-[25px] grid content-center ring-white rounded-full mr-2" :src="personaSeleccionada.imagen" alt="">
               <span>
              {{personaSeleccionada.nombre}}
            </span>
            </div>
            <img src="/imagenes/SVG/Selector.svg" alt="">
            </div>
            </ListboxButton>
    <ListboxOptions class="absolute z-10 w-full px-3 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      <ListboxOption
        v-for="persona in personas"
        :key="persona"
        :value="persona"
        class="hover:bg-[#EAEAEA]"
        v-slot="{ active, selected }"
      >
        <li class="flex items-center justify-between py-1">
          <div class="flex items-center">
            <img class="w-[25px] h-[25px] grid content-center ring-white rounded-full mr-2" :src="persona.imagen" alt="Daniel">
            <span>{{ persona.nombre }}</span>
          </div>
          <img v-show="selected" src="/imagenes/SVG/Check.svg" class="">
        </li>
      </ListboxOption>
    </ListboxOptions>
      </div>
  </Listbox>
</template>