<template>
    <div>
        <slot :quantidadeVagas="vagas">
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <Vaga v-bind="vaga" />
            </div>
        </div>
    </slot>
    </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config/config';
import Vaga from '../common/Vaga.vue';

export default {
    name: 'ListaVagas',
    data: () => ({
        vagas: []
    }),
    components: {
        Vaga
    },
    mounted() {
        this.emitter.on('buscarVaga', (vaga) => {
            let vagas = JSON.parse(localStorage.getItem('vagas'));
            vagas = vagas.filter(v => v.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()));
            this.vagas = vagas;
        }); 
    },
    activated() {
        Axios.get(config.API + 'vagas').then(res => {
            if(res.status === 200) {
                this.vagas = res.data.vagas;
            }
        });
    }
}
</script>