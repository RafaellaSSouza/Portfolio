<template>
    <div class="border-2 border-solid rounded-lg w-1/3 flex flex-col items-center drop-shadow-xl">
        <img class="w-full p-5 rounded-3xl" :src="imagem" alt="screenshot">
        <p class="px-6 pb-6">{{ descricao }}</p>
        <button class="bg-green-400 border-2 border-black mb-5">Conferir</button>
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