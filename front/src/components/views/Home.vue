<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga />
            </div>
        </div>

        <lista-vagas v-slot:default="slotProps">
            <div class="text-center p-5" v-if="slotProps.quantidadeVagas === null">
                <h3>Nenhuma vaga foi cadastrada por enquanto...</h3>
            </div>
        </lista-vagas>

        <div class="row mt-5">
            <div class="col-4">
                <Indicador
                    titulo="Vagas Abertas"
                    indicador="100"
                    bg="bg-dark"
                    color="text-white"
                />
            </div>
            <div class="col-4">
                <Indicador
                    titulo="Profissionais Cadastrados"
                    indicador="250"
                    bg="bg-dark"
                    color="text-white"
                />
            </div>
            <div class="col-4">
                <Indicador 
                    titulo="Visitantes Online"
                    :indicador="usuariosOnline"
                    bg="bg-light"
                    color="text-dark"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ListaVagas from '@/components/common/ListaVagas.vue';
import PesquisarVaga from '../common/PesquisarVaga.vue';
import Indicador from '../common/Indicador.vue';

export default {
    name: 'Home',
    components: {
        PesquisarVaga,
        Indicador,
        ListaVagas
    },
    data: () => ({
        usuariosOnline: 0,
    }),
    methods: {
        getUsuariosOnline() {
            this.usuariosOnline = Math.floor(Math.random() * 101)
        }
    },
    created() {
        setInterval(this.getUsuariosOnline, 1000);
    }
}
</script>

<style scoped>

</style>