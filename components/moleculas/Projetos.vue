<template>
    <section class="projetos " id="projetos" >
            <h1 class="titulo ">Meus projetos</h1>
            <div class="espaco-cards ">
                <Card 
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus atque at voluptas illum doloremque consequuntur blanditiis neque, minima id consequatur praesentium perferendis vero quia cum officia, ex eveniet minus." 
                imagem="SafirTec"
                link="https://rafaellassouza.github.io/Projeto-SafirTec/"
                />
                <Card 
                imagem ='frontmentor'
                link="https://rafaellassouza.github.io/QR-code-component/"
                />
                <Card
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