<template>
    <div class="border-2 border-solid rounded-lg w-20 h-full ">
       <img class="w-full" :src="icone" alt="logo">
    </div>
</template>

<script>
export default {
    props: {
        icone: {
            type: String,
            default: () => "https://img.icons8.com/color/96/000000/html-5--v1.png"
        }
    }
    
}
</script>