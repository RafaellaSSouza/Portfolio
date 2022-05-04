<template>
  <div class="h-full">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from "~/components/organismos/Header.vue";
import Main from "~/components/organismos/Main.vue";

export default {
    components: { Header, Main }
};
</script>

<style>
 .container { 
    @apply flex flex-col flex-wrap items-center mt-5
  }
</style>
