<template>
    <div class="box">
       <img :src="logo" alt="logo">
    </div>
</template>

<script>
export default {
    props: {
        logo: {
            type: String,
            default: () => ""
        }
    }
}
</script>

<style scoped>
    .box {
        width: 15vh;
        height: 15vh;
        @apply
        p-2
        border-2 border-cor3 
        rounded-lg  
        bg-branco
        hover:opacity-50
    }
</style>