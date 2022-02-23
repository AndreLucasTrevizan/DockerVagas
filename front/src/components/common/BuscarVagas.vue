<template>
    <div class="h-100 p-5 border rounded bg-dark text-white">
        <div>
            <h3>Pesquisar Vaga</h3>
            <hr>
            <label class="form-label">Título da Vaga</label>
            <input type="text" class="form-control" placeholder="Analista de Sistemas Sênior" v-model="title">
            <small>Digite o palavras chaves no campo de busca como 'PHP', 'Javascript', 'Senior'</small>
        </div>
        <button class="btn btn-primary mt-3" @Click="sendingTitle">Buscar</button>
    </div>
</template>

<script>
export default {
    name: 'BuscarVagas',
    data: () => ({
        title: null
    }),
    methods: {
        sendingTitle() {
            this.emitter.emit('sendingTitle', this.title);
        }
    }
}
</script>