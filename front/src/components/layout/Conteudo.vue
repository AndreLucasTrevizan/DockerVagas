<template>
    <keep-alive class="mt-5">
        <component :is="view" />
    </keep-alive>
</template>

<script>
import PublicarVaga from '@/components/views/PublicarVaga.vue';
import Home from '@/components/views/Home.vue';

export default {
    name: 'Conteudo',
    components: {
        PublicarVaga,
        Home
    },
    props: {
        view: String
    }
}
</script>