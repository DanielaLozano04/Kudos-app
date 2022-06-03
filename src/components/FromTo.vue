<script setup>
import Dropdown from '../components/Dropdown.vue'
import Input from '../components/Input.vue'
import Badge from '../components/Badge.vue'
import ListBox from '../components/ListBox.vue'
import useUsers from '../composables/useUsers.js'

const { personas, kudosForm, agregarKudos } = useUsers()
</script>

<template>
<div class="px-6 py-4 mt-0 mb-4 ml-4 mr-8">
    <div class="flex ">
        <div class="flex w-[25%] justify-between items-center pr-6">
            <span class="text-sm text-[#6E7C87] font-semibold uppercase">From <br> to</span>
            <img src="/imagenes/SVG/Heart-arrow.svg" alt="arrow">
        </div>
        <div class="flex flex-col w-[75%]">
            <div class="mb-2">
                <ListBox v-model="kudosForm.from" :personas="personas"/>
            </div>
            <div>
                <ListBox v-model="kudosForm.to" :personas="personas" multiple/>
            </div>
        </div>
    </div>
    <Input v-model="kudosForm.descripcion" />

    <div id="Badges" class="grid w-full grid-cols-5 gap-2 mt-4">
        <span class="text-sm text-[#6E7C87] font-semibold uppercase">Mentions</span>
        <Badge v-for="persona in personas" :key="persona" :data="persona" v-model="kudosForm.mentions" />
    </div>
        <div class="flex justify-end mt-4">
            <button class="hover:bg-[#DC2E20] bg-[#EC3425] text-sm py-1 rounded-md  border-2 border-[#EC3425] text-white mr-3 w-[114px]" @click="agregarKudos">Save</button>
            <button class="hover:border-2 text-sm py-1 rounded-md  text-[#EC3425] border border-[#EC3425] w-[114px] font-medium">Cancel</button>
        </div>

</div>


</template>