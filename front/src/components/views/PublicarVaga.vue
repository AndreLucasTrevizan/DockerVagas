<template>
    <div class="container">
        <div class="row">
            <div class="col h-100 border mt-3 p-4 rounded">
                <h3>Publicando vaga</h3>
                <hr>
                <div class="row">
                    <div class="col">
                        <label for="title" class="form-label">Título</label>
                        <input type="text" id="title" class="form-control" placeholder="Analista de Sistemas" v-model="vaga.title">
                        <small>O título da vaga vai aparecer em destaque para os candidatos</small>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label for="description" class="form-label">Descrição</label>
                        <textarea type="text" class="form-control" placeholder="Dominar tal liguagem de programação e ser proativo..." v-model="vaga.description"></textarea>
                        <small>A descrição é uma boa forma de motivar o candidato, seja breve e objetivo.</small>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label for="salary">Salário</label>
                        <input type="number" id="salary" class="form-control" placeholder="R$ 1500" v-model="vaga.salary">
                    </div>
                    <div class="col">
                        <label for="modality">Modalidade</label>
                        <select class="form-select" id="modality" v-model="vaga.modality">
                            <option disabled selected>Selecione...</option>
                            <option value="1">Homeoffice</option>
                            <option value="2">Presencial</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="type">Tipo</label>
                        <select class="form-select" id="type" v-model="vaga.type">
                            <option disabled selected>Selecione...</option>
                            <option value="1">CLT</option>
                            <option value="2">PJ</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <button class="btn btn-primary" @Click="publicarVaga">
                            Publicar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '@/config/config.js';

export default {
    name: 'PublicarVaga',
    data: () => ({
        vaga: {
            title: null,
            description: null,
            salary: null,
            modality: null,
            publication: new Date(Date.now()).toLocaleDateString('pt-BR'),
        }
    }),
    methods: {
        publicarVaga() {
            axios.post(config.API + 'vagas', this.vaga).then(res => {
                if(res.status === 201) {
                    this.$emit('VagaPublicada');
                }
            }).catch(err => {
                alert(err);
            });
        }
    }
}
</script>