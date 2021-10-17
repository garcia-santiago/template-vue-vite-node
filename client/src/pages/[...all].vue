<script setup lang="ts">
const router = useRouter()
const irHome = () => {
    router.push(`/`)
}

</script>
<template>
  <div class="mb-4">
    <h3 class="text-4xl">404</h3>
    <h3 class="text-4xl font-bold">Pagina no encontrada!</h3>
  </div>
  <button @click="irHome" class="btn">Inicio</button>
</template>
