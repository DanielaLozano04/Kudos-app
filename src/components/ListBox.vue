<script setup>
  import { computed, useAttrs  } from 'vue'
  import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

  const props = defineProps(['modelValue','personas'])
  const emit = defineEmits(['update:modelValue'])

  const attrs = useAttrs()
  const hasMultiple = typeof attrs.multiple != 'undefined' ? true : false

  const personaSeleccionada = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>

<template>
  <Listbox v-model="personaSeleccionada" :multiple="hasMultiple">
      <div class="relative">
          <ListboxButton class="relative w-full  cursor-pointer rounded-md bg-white py-2 px-3 text-left shadow-md focus:outline-none border border-[#D1D5DB] focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm h-11">
            <div v-if="hasMultiple" class="flex justify-between" >
              <div v-if="personaSeleccionada.length > 0" class="w-full space-x-2 line-clamp-1">
              <div  v-for="(seleccionada, index) in personaSeleccionada" :key="index" class="inline-block">
                <div class="flex items-center ">
                  <img v-show="seleccionada.imagen != ''" class="w-[25px] h-[25px] grid content-center ring-white rounded-full mr-2" :src="seleccionada.imagen" :alt="seleccionada.nombre">
                  <span>
                    {{ seleccionada.nombre }}
                  </span>
                </div>
              </div>
              </div>
              <span v-else>Select Someone</span>
              <img src="/imagenes/SVG/Selector.svg" alt="">
            </div>
            <div v-else class="flex justify-between">
              <div class="flex items-center">
                <img v-if="personaSeleccionada.imagen != ''" class="w-[25px] h-[25px] grid content-center ring-white rounded-full mr-2" :src="personaSeleccionada.imagen" alt="">
                <span>
                  {{personaSeleccionada.nombre}}
                </span>
              </div>
              <img src="/imagenes/SVG/Selector.svg" alt="Selector">
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
        <li class="flex items-center justify-between py-1 cursor-pointer">
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