<template>
    <section id="scc4">
        <section id="team" class="bg-gray">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h1>{{$t('lampadaTitulo')}}</h1>
                        <br>
                        <p class="text-justify">{{$t('lampadaTexto')}}</p>
                    </div>
                    <div class="col-lg-6">
                        <img src="../assets/img/team.jpg" class="img-responsive"/>
                    </div>
                </div>
            </div>
        </section>
        <Faixa class="bg-info" :texto="$t('faixascc4')"></Faixa>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-md-12 col-lg-8 pt-lg">
                    <Features v-for="feature in features"
                              :key="feature.id"
                              :heading="$t('featuresscc4')[feature.id].head"
                              :text="$t('featuresscc4')[feature.id].text"
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
        <div class="row ">
            <Contato id="contato" class="pt-lg"></Contato>
        </div>

        <Footer></Footer>
        <!-- Back top -->

    </section>
</template>

<script>
    import Timeline from "@/components/Timeline";
    import Faixa from "@/components/Faixa";
    import Footer from "@/components/Footer";
    import Features from "@/components/Features";
    import Contato from "@/components/Contato";

    export default {
        name: 'Scc4',
        components: {
            Contato,
            Footer,
            Faixa,
            Timeline,
            Features
        },
        data() {
            return {
                slogan: '"Se fosse fácil qualquer um fazia."',
                features: [{
                    id: 0,
                    img: 'MaquinaFrente_md.png',
                    btn: false,
                    class: 'col-md-6 space'
                },
                    {
                        id: 1,
                        img: 'portalpostal-pc-mobile-1.png',
                        btn: false,
                        class: 'col-md-6 space'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .pt-lg {
        margin-top: 50px;
    }

    #team {
        margin-top: -80px;
    }
</style>
