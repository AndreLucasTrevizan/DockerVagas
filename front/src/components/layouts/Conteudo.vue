<template>
    <div>
        <keep-alive>
            <component :is="conteudo" />
        </keep-alive>
    </div>
</template>

<script>
import Home from '@/components/views/Home.vue';
import PublicarVagas from '@/components/views/PublicarVagas.vue';

export default {
    name: 'Conteudo',
    components: {
        Home,
        PublicarVagas
    },
    props: {
        conteudo: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>