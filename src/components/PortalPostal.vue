<template>

    <div id="portalpostal">

        <!-- Portfolio Section -->
        <section id="portfolio">
            <div class="row">
                <div class="container">
                    <div class="row">

                        <div class="col-sm-3">
                            <img src="../assets/img/selo-correios_sm.png"/>
                        </div>
                        <div class="col-sm-9">
                            <h2 class="wow fadeInUp text-center align-middle" data-wow-delay="0.4s">{{textoFaixa}}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <Features v-for="feature in features" :key="feature.id" :heading="feature.head" :text="feature.text" :img-scr="feature.img" :showButton="feature.btn"></Features>
                </div>


            </div>
        </section>


        <!-- CTA Section -->

        <section id="cta" class="bg-gray">
            <div class="container">
                <div class="row">

                    <div class="col-md-offset-2 col-md-8 col-sm-12">
                        <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                          <!--  <section v-if="errored">
                                <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                            </section>
                            <section v-else>
                                <div v-if="loading">Loading...</div>
                                <div v-else v-for="currency in info" :key="currency.description" >
                                    <span class="big-text">
                                        {{ currency.rate_float | currencydecimal }}
                                    </span><p>{{ currency.description }}</p>

                                </div>
                            </section> -->
                            <div>
                                    <span class="big-text">
                                        3.800.000
                                    </span>
                                <p>Objetos processados/mês</p>

                            </div>
                        </div>
                        <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                            <span class="big-text">+ de 17.000 </span>
                            <p>Empresas Utilizando</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <Footer></Footer>

        <a href="#" class="go-top"><i class="fa fa-angle-up"></i></a>
</div>

</template>


<script>
    import Features from "@/components/Features";
    import Footer from "@/components/Footer";
    export default {
        name: 'PortalPostal',
        components: {Footer, Features},
        data () {
            return {
                info: null,
                loading: true,
                errored: false,
                features:[{
                        id:0, img: '3675555.jpg', text:'Envie por e-mail para o destinatário ou remetente todas as atualizações de rastreamento da sua encomenda. (Em breve também por whatsapp)', head:'Mantenha seu cliente atualizado', btn:false
                    },
                    {
                        id:1, img: 'scan-box1.jpg', text:'Nosso sistema registra uma foto de todas as suas encomendas no momento da pesagem. Confira o tamanho e peso de todas as suas caixas.', head:'Imagem da sua caixa', btn:false
                    },
                    {
                        id:2,  img: 'onlineShop.jpg', text:'Integre seu ERP, loja virtual ou marketplace com o Portal Postal. Muito mais agilidade e organização na geração e conferencia de etiquetas.', head:'Totalmente integrado', btn:false
                    },
                    {
                        id:4,  img: 'apps.jpg', text:'Procure por nossos Apps na Google Play ou na Apple Store e tenha controle total de seus envios diretamente do seu telefone.', head:'Aplicativos Android e IOS', btn:false
                    }
                ],
                textoFaixa: 'MAIS FACILIDADES'

            }
        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },
        mounted () {
            this.axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (
                    this.info = response.data.bpi
                ))
                .catch(error => { console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }

    }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

    .big-text{
       font-size: 3em;
        font-weight: bolder;
    }

    .top1 img {
        height:100%;
    }

</style>
