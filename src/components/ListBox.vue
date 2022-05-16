<script setup>
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

</script>

<template>
  <Listbox>
      <div class="relative">
          <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-2 px-3 mb-2 text-left shadow-md focus:outline-none border border-[#D1D5DB] focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <div class="flex justify-between" ><span>Select Someone</span><img src="/imagenes/SVG/selector.svg" alt=""></div></ListboxButton>
    <ListboxOptions class="absolute mt-1 px-3 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center ring-white rounded-full mr-2" src="/imagenes/JPG/Daniel.jpg" alt="Daniel">Daniel Rubiano
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Daniela.jpg" alt="Daniel">Daniela Lozano
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Emma.jpg" alt="Daniel">Emmanuel Deossa
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Jairo.jpg" alt="Daniel">Jairo Tulande
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Jeisson.jpg" alt="Daniel">Jeisson Neira
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Jesus.jpg" alt="Daniel">Jesús Scarpetta  
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Juan.jpg" alt="Daniel">Juan Torres
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Juliette.jpg" alt="Daniel">Juliette Hernandez
        </li>
      </ListboxOption>
      <ListboxOption>
        <li class="flex items-center py-1">
          <img class="w-[25px] h-[25px] grid content-center  ring-white rounded-full mr-2" src="/imagenes/JPG/Katt.jpg" alt="Daniel">Kattia Morales
        </li>
      </ListboxOption>
    </ListboxOptions>
      </div>
  </Listbox>
</template>