<template>
    <header class="fixed w-full  border-b-2 border-gray-300 rounded-b-xl">
        <div class="flex justify-between px-10 py-2 items-center">
            <div class="flex items-center"> 
                <img src="data:image/png;base64,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"/>
                <!-- <span class="text-red-500 font-bold text-3xl pl-2">WEB DEVELOPER</span> -->
            </div>
            <nav class="text-green-600 text-xl">
                <a class="pr-5 hover:border-current" href="">Quem sou</a>
                <a class="pr-5" href="">Projetos</a>
                <a class="pr-5" href="">Conhecimentos</a>
                <a href="">Contatos</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

