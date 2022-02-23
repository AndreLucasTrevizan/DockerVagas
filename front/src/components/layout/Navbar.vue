<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Vagas</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#" @Click="switchComponent('Home')">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" @Click="switchComponent('PublicarVaga')">Publicar Vagas</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        switchComponent(component) {
            this.emitter.emit('navegate', component);
        }
    }
}
</script>

<style scoped>

</style>