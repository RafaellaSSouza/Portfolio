<template>
    <div class="bg-cor1 border-2 border-cor3 rounded-lg w-1/4 flex flex-col items-center text-branco">
        <img class="w-full p-5 rounded-3xl" :src="imagem" alt="screenshot">
        <p class="px-6 pb-6">{{ descricao }}</p>
        <button class="hover:border-cor3 border-2 rounded-lg w-1/3 h-10 mb-5 bg-gradient-to-r from-cor1 to-cor3">Conferir</button>
    </div>    
</template>

<script>
export default {
    props: {
        descricao: {
            type: String,
            default: () => "Colocar descrição"
        },
        imagem: {
            type: String,
            default: () => ""
        }
    },
};
</script>

<style>
   
</style>