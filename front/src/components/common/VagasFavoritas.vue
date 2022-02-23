<template>
    <div>
        <div class="vagasFavoritas">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas Favoritas</button>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Suas Vagas Favoritas</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="p-2 bg-light border rounded-3 mb-3" v-for="(vaga, index) in vagas" :key="index">
                    <div class="d-flex justify-content-between">
                        {{vaga.titulo}}
                        <div class="">
                            <i class="material-icons" @click="removerVaga(vaga)">close</i>
                        </div>
                    </div>
                    <hr>
                    {{vaga.salario}} | {{vaga.modalidade}} | {{vaga.tipo}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VagasFavoritas',
    data: () => ({
        vagas: []
    }),
    mounted() {
        this.emitter.on('favoritarVaga', e => this.vagas.push(e));
        this.emitter.on('desfavoritarVaga', e => {
            let vaga = null;
            
            this.vagas.forEach(v => {
                if(v.titulo === e.titulo) {
                    vaga = this.vagas.indexOf(v);
                }
            });

            if(vaga !== -1) this.vagas.splice(vaga, 1);
        });
    },
    methods: {
        removerVaga(vaga) {
            this.emitter.emit('removerFavorita', {
                vaga
            });
        }
    }
}
</script>

<style scoped>
    .vagasFavoritas {
        position: absolute;
        z-index: 1;
        top: 10px;
        right: 120px;
    }
</style>