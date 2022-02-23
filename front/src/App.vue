<template>
  <div>
    <Navbar @navegar="componente = $event"/>
    <Alerta v-if="exibirAlerta" :vaga="vaga" />
    <div class="container">
      <Conteudo :conteudo="componente" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Topo.vue';
import Conteudo from '@/components/layouts/Conteudo.vue';
import Alerta from '@/components/common/Alerta.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Conteudo,
    Alerta
  },
  data: () => ({
    componente: 'Home',
    exibirAlerta: false,
    vaga: null
  }),
  mounted() {
    this.emitter.on('VagaPublicada', (vaga) => {
      this.vaga = vaga;
      setTimeout(() => this.exibirAlerta = true, 3200);
    });
  }
}
</script>

<style>

</style>
