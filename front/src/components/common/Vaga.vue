<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{title}}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" v-model="favoritada">
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{job_description}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: {{salary}} | Modelidade: {{getModalidade}} | Tipo: {{getTipo}} | Publicado em: {{getPublicacao}}</small>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '@/config/config';

export default {
    name: 'Vaga',
    data: () => ({
        favoritada: false
    }),
    mounted() {
        this.emitter.on('removerFavorita', vaga => {
            let vagas = null;

            vagas = axios.get(config.API + 'vagas');

            vagas.forEach(v => {
                if(v.title === vaga.title) {
                    this.favoritada = false;
                }
            });
        });
    },
    watch: {
        favoritada(valorNovo) {
            let vagaFavoritada = {
                title: this.title,
                job_description: this.job_description,
                salary: this.salary,
                modality: this.getModalidade,
                job_type: this.getTipo,
                publication: this.publication,
            };

            let vagasFavoritadas = JSON.parse(localStorage.getItem('favoritadas'));

            if(vagasFavoritadas !== null) {
                console.log(vagasFavoritadas);
                vagasFavoritadas.push(vagaFavoritada);
                localStorage.setItem('favoritadas', JSON.stringify(vagasFavoritadas));
            } else {
                localStorage.setItem('favoritadas', JSON.stringify(vagasFavoritadas));
            }

            if(valorNovo) {
                this.emitter.emit('favoritarVaga', vagaFavoritada);
            } else {
                this.emitter.emit('desfavoritarVaga', vagaFavoritada);
            }
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        job_description: {
            type: String,
            default: 'O contratante não adicionou uma descrição para essa vaga.'
        },
        salary: {
            type: [Number, String],
            required: true
        },
        modality: {
            type: String,
            required: true
        },
        job_type: {
            type: String,
            required: true
        },
        publication: {
            type: String,
            required: true
        }
    },
    computed: {
        getModalidade() {
            switch(this.modality) {
                case '1': return 'Home Office';
                case '2': return 'Presencial';
            }
            return '';
        },
        getTipo() {
            switch(this.job_type) {
                case '1': return 'CLT';
                case '2': return 'PJ';
            }
            return '';
        },
        getPublicacao() {
            return this.publication;
        }
    }
}
</script>