<script lang="ts">
import axios from 'axios'

export default defineComponent({
  setup(){
    const name = ref("Santiago")
    let toggleRespuesta = ref(false)
    let usuario = ref({
      nombre: "",
      id: 0,
      age: 0
    })
    const callApi = () => {
      axios.post('api/user/')
      .then( (response: any) => {
        toggleRespuesta.value = true
        usuario.value.nombre = response.data.nombre
        usuario.value.age = response.data.age
        usuario.value.id = response.data.id
      })
    }
    return {name, toggleRespuesta, usuario, callApi}
  }
})

</script>

<template>
  <h1 class="text-4xl font-bold mb-4">Template de {{name}}</h1>
  <button @click="callApi" class="btn">API</button>
  <div class="div my-4" v-show="toggleRespuesta">
    <h2 class="text-2xl font-bold">Respuesta: </h2>
    <h4><span class="font-bold text-xl">Nombre:</span> {{usuario.nombre}}</h4>
    <h4><span class="font-bold text-xl">Id:</span> {{usuario.id}}</h4>
    <h4><span class="font-bold text-xl">Edad:</span> {{usuario.age}}</h4>
  </div>
</template>
