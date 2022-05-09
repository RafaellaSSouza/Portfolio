<template>
    <section class="projetos " id="projetos" >
            <h1 class="titulo ">Meus projetos</h1>
            <div class="espaco-cards ">
                <Card 
                descricao="Trabalho freelancer de tela para apesentação de TCC com objetivo de simular um sistema de controle de tarefas e projetos para gerente e colaborador. Criado com o framework bootstrap. " 
                imagem="SafirTec"
                link="https://rafaellassouza.github.io/Projeto-SafirTec/"
                />
                <Card 
                descricao="Card construído com HTML e CSS com noções de flexbox, para completar um desafio do site Frontend Mentor."
                imagem ='frontmentor'
                link="https://rafaellassouza.github.io/QR-code-component/"
                />
                <Card
                descricao="Projeto de estudo com Javascript, feito através de um curso Alura."
                imagem='TelaJavaScript'
                link="https://github.com/RafaellaSSouza/estudo-javascript.git"/>
            </div>
        </section>
</template>

<script>
import Card from "../atomos/Card.vue"

export default {
    components: { Card }
    
}
</script>

<style scoped>
    .projetos {
        @apply
        bg-cor2 
        p-10 
        flex flex-col items-center 
        border-b-2 border-cor5
    }
    .titulo {
        @apply 
        text-3xl text-branco 
        font-bold
        p-4
    }

    .espaco-cards {
        @apply 
        flex justify-around 
        mt-5
    }
</style>