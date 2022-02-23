<template>
    <div class="container">
        <BuscarVagas @sendingTitle="title = $event" />
    </div>
</template>

<script>
import BuscarVagas from '@/components/common/BuscarVagas.vue';

export default {
    name: 'Home',
    components: {
        BuscarVagas
    },
    data: () => ({
        title: null
    }),
    mounted() {
        this.emitter.on('sendingTitle', (title) => {
            this.title = title;
        });
    }
}
</script>