<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col h-100 p-4 border rounded-3">
                <h3>Pesquisar Vaga</h3>
                <div class="form-group mt-2">
                    <input type="text" class="form-control" placeholder="Pesquise a vaga usando palavras chave 'PHP', Javascript', 'Analista'">
                    <small>Pesquise por vagas que tenha interesse</small>
                </div>
                <button class="btn btn-dark mt-5">Buscar</button>
            </div>
        </div>

        <div v-for="(vaga, index) in vagas" :key="index">
                <div class="card mt-2">
                    <div class="card-header bg-dark text-white">
                        <h3>{{ vaga.title }}</h3>
                    </div>
                    <div class="card-body">
                        {{ vaga.job_description }}
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Salário: {{ vaga.salary }} | Modalidade: {{ (vaga.modality == 1) ? 'Homeoffice' : 'Presencial'}} | Tipo: {{ (vaga.job_type == 1) ? 'CLT' : 'PJ' }}</small>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '@/config/config.js';

export default {
    name: 'Home',
    data: () => ({
        vagas: null
    }),
    activated() {
        axios.get(config.API + 'vagas').then(res => {
            this.vagas = res.data.vagas;
        });
    }
}
</script>