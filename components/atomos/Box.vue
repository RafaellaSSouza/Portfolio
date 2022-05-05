<template>
    <div class="border-2 border-cor3 rounded-lg w-20 h-full bg-branco">
       <img class="w-10" :src="logo" alt="logo">
    </div>
</template>

<script>
export default {
    props: {
        logo: '../../static/html.png'
    }
    
}
</script>