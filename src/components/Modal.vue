<script setup>

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

defineProps({
    openModal: Boolean,
  })

const emit = defineEmits(['submit', 'close'])
</script>

<template>
  <TransitionRoot appear :show="openModal" as="template">
    <Dialog as="div" @close="emit('close')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
      

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-6 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded bg-white p-7 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="mx-6 text-lg font-medium leading-6 text-[#111827]"
              >
                🌟 ADD AN IQTHINKER
                
              </DialogTitle>

                  <form class="py-5 px-6" >
                    <div>
                        <label class="block text-sm font-semibold text-[#374151]"> Photo </label>
                        <div class="mt-1 flex items-center mb-6">
                          <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button type="button" class="ml-4 bg-white py-1 px-2 border border-gray-300 rounded-md shadow-sm text-xs leading-4 font-medium text-[#374151] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                        </div>
                      </div>

                      <div class="mb-6">
                        <label class="block text-[#374151] text-sm font-semibold mb-1" for="First name">
                          First name
                        </label>
                        <input class=" appearance-none border border-[#D1D5DB] rounded w-full py-2 px-3 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" >
                      </div>

                      <div class="mb-6">
                        <label class="block text-[#374151] text-sm font-semibold mb-1" for="username">
                          Last Name
                        </label>
                        <input class=" appearance-none border border-[#D1D5DB] rounded w-full py-2 px-3 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="Last Name" type="text" >
                      </div>

                      <div class="mb-1">
                        <label class="block text-[#374151] text-sm font-semibold mb-1" for="username">
                          Title
                        </label>
                        <input class=" appearance-none border border-[#D1D5DB] rounded w-full py-2 px-3 text-[#374151] leading-tight focus:outline-none focus:shadow-outline" id="Title" type="text" >
                      </div>                     
                </form>

              <div class="my-2 px-6 mb-2">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border-transparent  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:bg-[#DC2E20] 
                  bg-[#EC3425] border-2 border-[#EC3425] text-white w-full"
                  @click="emit('submit')"
                >
                  Welcome
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


