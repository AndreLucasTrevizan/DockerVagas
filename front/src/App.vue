<template>
  <div>
    <Navbar @navegate="nextView = $event" />
    <Conteudo :view="nextView" />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import Conteudo from '@/components/layout/Conteudo.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Conteudo
  },
  data: () => ({
    nextView: 'Home'
  }),
  mounted() {
    this.emitter.on('navegate', (view) => {
        this.nextView = view;
    });
  }
}
</script>