<template>
    <section id="scc4">
          <section id="team" class="bg-gray" >
              <div class="container">
                    <div class="row align-items-center">
                            <div class="col-lg-6">
                              <h1>Um time com competencias nas áreas de Hardware e software</h1>
                                <p>Uma equipe verdadeiramente multidisciplinar que se parece com um coral
                                  acompanhado por uma orquestra: não há nada tão incrível quanto ter todos
                                  esses instrumentos e vozes tocando e cantando juntos, apoiando-se e
                                  tornando o som todo melhor do que a soma de suas partes individuais.</p>
                            </div>
                            <div class="col-lg-6">
                              <img src="../assets/img/team.jpg" class="img-responsive"/>
                           </div>
                    </div>
              </div>
          </section>
            <Faixa class="bg-info" :texto="slogan"></Faixa>
        <div class="container">
            <div class="row align-items-center" >
                <div class="col-xs-12 col-md-12 col-lg-8">
                    <Features v-for="feature in features"
                              :key="feature.id"
                              :heading="feature.head"
                              :text="feature.text"
                              :img-scr="feature.img"
                              :showButton="feature.btn"
                              :wrap-class="feature.class"
                    ></Features>
                </div>
                <div class="col-xs-12 col-md-12 col-lg-4">
                    <Timeline></Timeline>
                </div>
            </div>
      </div>
    <Footer></Footer>
    <!-- Back top -->
    <a href="#" class="go-top"><i class="fa fa-angle-up"></i></a>
  </section>
</template>

<script>
  import Timeline from "@/components/Timeline";
  import Faixa from "@/components/Faixa";
  import Footer from "@/components/Footer";
  import Features from "@/components/Features";

  export default {
    name: 'Scc4',
    components: {
    Footer,
    Faixa,
    Timeline,
    Features
    },
      data() {
        return{
            slogan: '"Se fosse fácil qualquer um fazia."',
            features:[{
                id:0,
                img: 'MaquinaFrente_md.png',
                text:'Conheça a maquina de cubagem estatica mais vendida no Brasil',
                head:'BOXCUBO',
                btn:false,
                class: 'col-md-6 space'
            },
                {
                    id:1,
                    img: 'portalpostal-pc-mobile-1.png',
                    text:'O melhor sistema para operação e e gestão de AGFs. e comunicação integrada com os clientes.',
                    head:'PORTAL POSTAL',
                    btn:false,
                    class:'col-md-6 space'
                }
            ]
        }
      }
  }
</script>

<style scoped>
.pt-lg{
    margin-top: 80px;
}
    #team{
        margin-top: -15px;
    }
</style>
