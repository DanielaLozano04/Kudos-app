<script setup>
import Dropdown from '../components/Dropdown.vue'
import Input from '../components/Input.vue'
import Badge from '../components/Badge.vue'
import ListBox from '../components/ListBox.vue'
</script>

<template>
<div class="px-6 py-4 mt-4 mb-4 ml-4 mr-8">
    <div class="flex ">
        <div class="flex w-[25%] justify-between items-center pr-6">
            <span class="text-sm text-[#6E7C87] font-semibold uppercase">From <br> to</span>
            <img src="/imagenes/SVG/Heart-arrow.svg" alt="arrow">
        </div>

        <div class="flex flex-col w-[75%]">
            <div class="mb-2">
                <ListBox/>
            </div>
            <div>
                <ListBox/>
            </div>
        </div>
    </div>

    <div id="Badges" class="grid w-full grid-cols-5 gap-2 mt-4">
        <span class="text-sm text-[#6E7C87] font-semibold uppercase">Mentions</span>
        <Badge :data="{ nombre:'Daniel Rubiano', foto:'/imagenes/JPG/Daniel.jpg' }"/>
        <Badge :data="{ nombre:'Daniela Lozano', foto:'/imagenes/JPG/Daniela.jpg' }"/>
        <Badge :data="{ nombre:'Emmanuel Deossa', foto:'/imagenes/JPG/Emma.jpg' }"/>
        <Badge :data="{ nombre:'Jairo Tulande', foto:'/imagenes/JPG/Jairo.jpg' }"/>
        <Badge :data="{ nombre:'Jeisson Neira', foto:'/imagenes/JPG/Jeisson.jpg' }"/>
        <Badge :data="{ nombre:'Jesus Francisco', foto:'/imagenes/JPG/Jesus.jpg' }"/>
        <Badge :data="{ nombre:'Juan Torres', foto:'/imagenes/JPG/Juan.jpg' }"/>
        <Badge :data="{ nombre:'Juliette Hernandez', foto:'/imagenes/JPG/Juliette.jpg' }"/>
        <Badge :data="{ nombre:'Kattia Morales', foto:'/imagenes/JPG/Katt.jpg' }"/>
    </div>
        <div class="flex justify-end mt-4">
            <button class="hover:bg-[#DC2E20] bg-[#EC3425] text-sm py-1 rounded-md  border-2 border-[#EC3425] text-white mr-3 w-[114px]">Save</button>
            <button class="hover:border-2 text-sm py-1 rounded-md  text-[#EC3425] border border-[#EC3425] w-[114px] font-medium">Cancel</button>
        </div>


    <div>

    </div>
</div>


</template>