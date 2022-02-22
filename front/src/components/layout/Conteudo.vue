<template>
    <div>
        <!-- 
            Keep alive é responsavel por manter o componente ativo, não precisando renderiza-lo
            novamente ao chamar os componentes, isso é uma forma de melhorar o desempenho. Faz parte
            do lifecycle dos componentes. Uma tag importante para a aplicação.
         -->
        <keep-alive>
            <component :is="conteudo" />
        </keep-alive>
    </div>
</template>

<script>
import Home from '@/components/views/Home.vue';
import PublicarVaga from '@/components/views/PublicarVaga.vue';

export default {
    name: 'Conteudo',
    components: {
        Home,
        PublicarVaga
    },
    props: {
        conteudo: {
            type: String,
            required: true
        }
    }
}
</script>