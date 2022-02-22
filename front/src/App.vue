<template>
  <div>
    <Navbar @navegar="componente = $event"/>
    <Conteudo :conteudo="componente" />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import Conteudo from '@/components/layout/Conteudo.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Conteudo
  },
  data: () => ({
    componente: 'Home'
  })
}
</script>

<style>

</style>
