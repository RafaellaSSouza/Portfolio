<template>
  <div class="h-full">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/organismos/Header.vue";
import Main from "~/components/organismos/Main.vue";
import Footer from "~/components/organismos/Footer.vue";

export default {
    components: { Header, Main, Footer }
};
</script>

<style>

::-webkit-scrollbar {
  width: 10px;
  background: #18184ee4;
}
::-webkit-scrollbar-thumb {
  width: 9px;
  background-color: #55cba9;
  border-radius: 5px;
}

</style>
