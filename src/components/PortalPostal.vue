<template>
    <div>
        <div class="bg-gray up">
            <div class="container">
                <section id="portfolio">
                    '
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="../assets/img/Selo_Certicacao_Correios_UX_negativa.png"/>
                        </div>
                        <div class="col-sm-9">
                            <h2 class="wow fadeInUp text-center align-middle" data-wow-delay="0.4s">
                                {{$t('textoFaixa')}}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <Features v-for="feature in features2"
                                  :key="feature.id"
                                  :heading="$t('featuresportal')[feature.id].heading"
                                  :text="$t('featuresportal')[feature.id].texto"
                                  :img-scr="feature.img"
                                  :showButton="feature.btn"
                                  :wrap-class="feature.class"
                        ></Features>
                    </div>
                </section>
            </div>
        </div>
        <section id="cta" class="bg-info">
            <div class="row">
                <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                        <div>
                                <span class="big-text">
                                    3.800.000
                                </span>
                            <p>Objetos processados/mês</p>

                        </div>
                    </div>
                    <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                        <span class="big-text">+ de 17.000 </span>
                        <p>Empresas atendidas</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>


<script>
    import Features from "@/components/Features";

    export default {
        name: 'PortalPostal',
        components: {Features},
        data() {
            return {
                info: null,
                loading: true,
                errored: false,
                features2: [{
                        id: 0,
                        img: '3675555.jpg',
                        btn: true,
                        class: 'col-md-3 space'
                    },
                    {
                        id: 1,
                        img: 'scan-box1.jpg',
                        btn: true,
                        class: 'col-md-3 space'
                    },
                    {
                        id: 2,
                        img: 'onlineShop.jpg',
                        btn: true,
                        class: 'col-md-3 space'
                    },
                    {
                        id: 3,
                        img: 'apps.jpg',
                        btn: true,
                        class: 'col-md-3 space'
                    }
                ]
            }
        },
        filters: {
            currencydecimal(value) {
                return value.toFixed(2)
            }
        },
        mounted() {
            this.axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (
                    this.info = response.data.bpi
                ))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }

    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .up {
        margin-top: -80px;
    }

    .big-text {
        font-size: 3em;
        font-weight: bolder;
    }

    .top1 img {
        height: 100%;
    }

</style>
