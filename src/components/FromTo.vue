<script setup>
import Dropdown from '../components/Dropdown.vue'
import Input from '../components/Input.vue'
</script>

<template> 
<div class="ml-4 mr-8 mt-4 mb-4 px-6 py-4">
    <div class="flex ">
        <div class="flex w-[25%] justify-between items-center pr-6">
            <span class="text-sm text-[#6E7C87] font-semibold uppercase">From <br> to</span>
            <img src="/imagenes/SVG/Heart-arrow.svg" alt="arrow">
        </div>
            
        <div class="flex flex-col w-[75%]">
            <Dropdown/>
            <Dropdown/>
        </div>
    </div>
        <Input/>
        <div id="Badges" class="flex justify-between items-center mt-4">
            <span class="text-sm text-[#6E7C87] font-semibold uppercase">Mentions</span>
            <div class="bg-[##F6F8F9] border rounded-full border-[#D1D5DB] items-center flex">
                <img class="w-[25px] h-[25px] mr-2 ml-[1px]" src="/imagenes/JPG/Daniel.jpg" alt="Daniel">
                <span class="text-xs text-[#6C727F] mr-2 font-semibold">Daniel Rubiano</span>
            </div>

            <div class="bg-[##F6F8F9] border rounded-full border-[#D1D5DB] items-center flex">
                <img class="w-[25px] h-[25px] mr-2 ml-[1px]" src="/imagenes/JPG/Daniel.jpg" alt="Daniel">
                <span class="text-xs text-[#6C727F] mr-2 font-semibold">Daniel Rubiano</span>
            </div>

            <div class="bg-[##F6F8F9] border rounded-full border-[#D1D5DB] items-center flex">
                <img class="w-[25px] h-[25px] mr-2 ml-[1px]" src="/imagenes/JPG/Daniel.jpg" alt="Daniel">
                <span class="text-xs text-[#6C727F] mr-2 font-semibold">Daniel Rubiano</span>
            </div>

            <div class="bg-[##F6F8F9] border rounded-full border-[#D1D5DB] items-center flex">
                <img class="w-[25px] h-[25px] mr-2 ml-[1px]" src="/imagenes/JPG/Daniel.jpg" alt="Daniel">
                <span class="text-xs text-[#6C727F] mr-2 font-semibold">Daniel Rubiano </span>
            </div>

        </div>

    <div>

    </div>
</div>
       
        
</template>