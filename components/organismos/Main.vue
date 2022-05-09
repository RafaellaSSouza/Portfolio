<template>
    <main class="font-serif">
        <Sobre/>
        <Projetos/>
        <Conhecimentos/>
        <Contato/>
    </main>
</template>

<script>
import Sobre from "../moleculas/Sobre.vue";
import Projetos from "../moleculas/Projetos.vue";
import Conhecimentos from "../moleculas/Conhecimentos.vue";
import Contato from "../moleculas/Contato.vue";

export default {
    components: { Sobre, Projetos, Conhecimentos, Contato }
}
</script>

<style>

</style>