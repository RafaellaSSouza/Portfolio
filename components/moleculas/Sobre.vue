<template>
    <section class="sobre" id="sobre">
        <div class="conteudo"> 
            <article class="texto-descricao">
                <h1 class="titulo">Oi, meu nome é Rafaella.</h1>
                <br>
                <p>  Nasci em uma geração já introduzida na tecnologia, então sempre tive uma afinidade com com computadores, smartphones e softwares.
                    <br>
                      A tecnologia sempre foi uma grande aliada para obtenção de conhecimentos, como facilitadora de atividades e até mesmo no meu lazer. Mas o encanto maior surgiu quando aprendi a utilizá-la no desenvolvimento de sistemas e sites.
                    <br>
                      Hoje sou desenvolvedora Front-end freelancer. Fique a vontade para navegar em meu portfólio e conhecer mais meus trabalhos.
                </p>
            </article>
        
            <img class="imagem-perfil" src="../../IMG_6843-removebg-preview.jpg" alt="perfil">
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .sobre {
        @apply 
        flex
        w-full h-screen
        bg-cor1 
        border-b-2 border-cor5
    }
    .conteudo {
        @apply 
        flex
        py-20 px-14
        items-center
        justify-around
    }
    .texto-descricao {
        @apply
        text-branco
        text-lg
        w-1/2
        tracking-normal
        leading-relaxed
        text-justify
    }
    .titulo {
        @apply 
        text-3xl
        italic
        font-bold
        
    }

    .imagem-perfil { 
        box-shadow: 15px 20px 30px rgb(0 0 0 / 41%);
       @apply
        rounded-full
        border-2
        border-dashed
        border-cor3
        w-1/4
        animate-float
        
     }
       
</style>