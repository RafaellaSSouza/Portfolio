<template>
    <div class="bg-cor1 border-2 border-cor3 rounded-lg w-1/4 flex flex-col items-center text-branco">
        <img class="w-full p-5 rounded-3xl" :src="require(`../../static/${ imagem }.png`)" alt="screenshot">
        <p class="px-6 pb-6">{{ descricao }}</p>
        <a class="w-1/3" :href="link"><button class="hover:border-cor3 border-2 rounded-lg w-full h-10 mb-5 bg-gradient-to-r from-cor1 to-cor3">Conferir</button></a>
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
            default: () => "TelaJavaScript"
        },
        link: {
            type: String,
            default: () => ""
        }
    },
 
};
</script>

<style>
   button:hover {
       box-shadow: 0 0 15px #55cba9 ;
   }
</style>