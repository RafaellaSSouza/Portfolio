<template>    
    <button>{{ textoBotao }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        textoBotao: {
            type: String,
            default: () => "",
        },
    },
};

</script>

<style>
    
</style>