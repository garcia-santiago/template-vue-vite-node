<script setup lang="ts">
import axios from "axios"
import { userStore } from "~/stores/user.ts";

const user = userStore();
const callApi = () => {
    axios.get('api/user/')
    .then( (response: any) => {
        user.$state = {
            id:  response.data.id, 
            nombre: response.data.nombre, 
            edad: response.data.age
        }
    })
}
</script>
<template>
  <h1 class="text-4xl font-bold mb-4">Template de {{user.nombre}}</h1>
  <button @click="callApi" class="btn">API</button>
  <div class="div my-4" >
    <h4><span class="font-bold text-xl">Nombre:</span> {{user.nombre}}</h4>
    <h4><span class="font-bold text-xl">Id:</span> {{user.id}}</h4>
    <h4><span class="font-bold text-xl">Edad:</span> {{user.edad}}</h4>
  </div>
</template>
<style>

</style>