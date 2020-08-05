<template>
  <div id="scc4" class="container">

        <div class="row col-xs-12 align-items-center d-flex">
            <div class="col-lg-6 col-sm-12">
              <h1>Um time com competencias nas áreas de Hardware e software</h1>
                <p>Uma equipe verdadeiramente multidisciplinar que se parece com um coral
                  acompanhado por uma orquestra: não há nada tão incrível quanto ter todos
                  esses instrumentos e vozes tocando e cantando juntos, apoiando-se e
                  tornando o som todo melhor do que a soma de suas partes individuais.</p>
            </div>
            <div class="col-lg-6 col-sm-12 pt-5">
              <img src="../assets/img/team.jpg" class="img-responsive"/>
           </div>
        </div>
    <div class="row col-xs-12">
      <Timeline></Timeline>
    </div>

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
