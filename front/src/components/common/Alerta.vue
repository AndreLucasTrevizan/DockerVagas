<template>
    <div :class="estiloAlerta" role="alert">
            <slot name="titulo">
                <h3>Título de Mensagem de Feedback</h3>
            </slot> 
          <hr>
          <slot>
              <p>Mensagem de Feedback</p>
          </slot>
      </div>
</template>

<script>
export default {
    name: 'Alerta',
    props: {
        tipo: String
    },
    computed: {
        estiloAlerta() {
            switch(this.tipo) {
                case 'success': return 'alert alert-success';
                case 'error': return 'alert alert-danger'
                default: return 'alert alert-success' 
            }
        }
    }
}
</script>