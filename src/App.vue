<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Titulo from './components/Titulo.vue'
import Input from './components/Input.vue'
import Button from './components/Button.vue'
</script>

<template>
<div class="w-96 m-auto text-center py-8 text-gray-800">
  <Titulo msg="Gracias Jesus" />
</div>
<div class="w-96 border p-8 m-auto">
  <Input/>
  <Input/>
  <Button/>
</div>

  
</template>


