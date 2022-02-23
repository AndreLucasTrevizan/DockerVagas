<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <h4>Apresente sua vaga para milhares de profissionais de graça</h4>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Título da Vaga</label>
                <input type="text" class="form-control" v-model="vaga.title">
                <div class="form-text">
                    Programador Javascript e VueJS
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Descriçao</label>
                <textarea type="text" class="form-control" v-model="vaga.job_description"></textarea>
                <div class="form-text">
                    Informe os detalhes da vaga
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <label class="form-label">Salário</label>
                <input type="number" class="form-control" v-model="vaga.salary">
                <div class="form-text">
                    Informe o salário
                </div>
            </div>

            <div class="col">
                <label class="form-label">Modalidade</label>
                <select class="form-select" v-model="vaga.modality">
                    <option disabled>Selecione</option>
                    <option value="1">HomeOffice</option>
                    <option value="2">Presencial</option>
                </select>
                <div class="form-text">
                    Informe onde as atividades serão realizadas
                </div>
            </div>

            <div class="col">
                <label class="form-label">Tipo</label>
                <select class="form-select" v-model="vaga.job_type">
                    <option disabled>Selecione</option>
                    <option value="1">CLT</option>
                    <option value="2">PJ</option>
                </select>
                <div class="form-text">
                    Informe o tipo de contratação
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <button class="btn btn-primary" type="submit" @click="salvarVaga">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '@/config/config';

export default {
    name: 'PublicarVagas',
    data: () => ({
        vaga: {
            title: null,
            job_description: null,
            salary: null,
            modality: null,
            job_type: null,
            publication: null
        }
    }),
    methods: {
        validaFormulario() {
            let valido = true;
            
            if(this.vaga.title === null) valido = false;
            if(this.vaga.job_description === null) valido = false;
            if(this.vaga.salary === null) valido = false;
            if(this.vaga.modality === null) valido = false;
            if(this.vaga.job_type === null) valido = false;

            
            return valido;
        },
        salvarVaga() {            
            if(this.validaFormulario()) {
                let vaga = {
                    title: this.vaga.title,
                    job_description: this.vaga.job_description,
                    salary: this.vaga.salary,
                    modality: this.vaga.modality,
                    job_type: this.vaga.job_type,
                    publication: new Date(Date.now()).toLocaleDateString('pt-BR')
                };

                axios.post(config.API + 'vagas', vaga).then(res => {
                    if(res.status === 201) {
                        this.emitter.emit('alerta', {
                            tipo: 'success',
                            titulo: `A vaga ${this.vaga.title} foi cadastrada com sucesso.`,
                            descricao: `Parabéns!! A vaga foi cadastrada e poderá ser consultada por milhares de profissionais em nossa plataforma.`
                        });
                        this.resetaFormulario();
                    }
                }).catch(err => {
                    this.emitter.emit('alerta', {
                        tipo: 'error',
                        titulo: `-_- Ops! Rolou um erro ai...`,
                        descricao: `${err}`
                    });
                });
            } else {
                this.emitter.emit('alerta', {
                    tipo: 'error',
                    titulo: `-_- Ops! Não foi possível realizar o cadastro!`,
                    descricao: `Parece que você esqueceu de preencher alguma informação.`
                });
            }
        },
        resetaFormulario() {
            this.vaga.title = null;
            this.vaga.job_description = null;
            this.vaga.salary = null;
            this.vaga.modality = null;
            this.vaga.job_type = null;
        },
    }
}
</script>

<style scoped>

</style>