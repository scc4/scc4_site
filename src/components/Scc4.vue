<template>
  <div id="scc4">
    <Timeline></Timeline>
    <Portifolio></Portifolio>
    <Faixa></Faixa>
    <Footer></Footer>
    <!-- Back top -->
    <a href="#" class="go-top"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<!-- Passar os dados para Timeline, Faixa e Footer para poder reaproveitar nas outras telas -->
<script>
  import Timeline from "@/components/Timeline";
  import Portifolio from "@/components/Portifolio";
  import Faixa from "@/components/Faixa";
  import Footer from "@/components/Footer";

  export default {
    name: 'Scc4',
    components: {
      Footer,
      Faixa,
      Portifolio,
      Timeline
    }
  }
</script>

<style scoped>

</style>
