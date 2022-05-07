<template>
    <section class="contatos" id="contato" >
        <h1 class="titulo">Onde me encontrar</h1>
        <div class="espaco-contatos">
            <div class="rede border-r-2 border-cor3">
                <p>Linkedin</p>
                <a href="https://www.linkedin.com/in/rafaella-souza-066390231/"><img src="https://cdn-icons-png.flaticon.com/512/408/408754.png?w=740" alt="Linkedin"></a>
            </div>

            <div class="rede border-r-2 border-cor3">
                <p>GitHub</p>
                <a href="https://github.com/RafaellaSSouza"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png?w=740" alt="Linkedin"></a>
            </div>

            <div class="rede border-r-2 border-cor3">
                <p>E-mail</p>
                <a href="mailto:rafaella1403@hotmail.com"><img src="https://cdn-icons-png.flaticon.com/512/1255/1255682.png?w=740" alt="Linkedin"></a>
            </div>

            <div class="rede">
                <p>Facebook</p>
                <a href="https://www.facebook.com/rafaella.souza.1213/"><img src="https://cdn-icons-png.flaticon.com/512/1076/1076990.png?w=740" alt="Linkedin"></a>
            </div>
        </div>
        
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .rede img {
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .rede:hover img {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    .contatos{
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
    .espaco-contatos {
        @apply
        flex justify-center
    }
    .rede {
        @apply
        w-1/5
        p-5
        flex flex-col
        items-center
        
    }
    a {
        @apply
        w-1/2 
        hover:opacity-80 
    }

    p {
        @apply 
        text-2xl text-white
        pb-3
    }

</style>