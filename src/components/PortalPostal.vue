<template>

    <div id="portalpostal">

        <!-- Portfolio Section -->
        <section id="portfolio">
            <div class="row">
            <Faixa :texto="textoFaixa"></Faixa>
            </div>
            <div class="container">
                <div class="row">
                    <Features v-for="feature in features" :key="feature.id" :heading="feature.head" :text="feature.text" :img-scr="feature.img"></Features>
                </div>


            </div>
        </section>


        <!-- CTA Section -->

        <section id="cta" class="bg-gray">
            <div class="container">
                <div class="row">

                    <div class="col-md-offset-2 col-md-8 col-sm-12">
                        <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                            <section v-if="errored">
                                <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                            </section>
                            <section v-else>
                                <div v-if="loading">Loading...</div>
                                <div v-else v-for="currency in info" :key="currency.description" >
                                    <span class="big-text">
                                        {{ currency.rate_float | currencydecimal }}
                                    </span><p>{{ currency.description }}</p>

                                </div>

                            </section>
                        </div>
                        <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                            <span class="big-text">140.000 </span>
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
    import Faixa from "@/components/Faixa";
    import Footer from "@/components/Footer";
    export default {
        name: 'PortalPostal',
        components: {Footer, Faixa, Features},
        data () {
            return {
                info: null,
                loading: true,
                errored: false,
                features:[{
                        id:0, img: '3675555.jpg', text:'Envie por e-mail para o destinatário ou remetente todas as atualizações de rastreamento da sua encomenda. (Em breve também por whatsapp)', head:'Mantenha seu cliente atualizado'
                    },
                    {
                        id:1, img: 'scan-box1.jpg', text:'Nosso sistema registra uma foto de todas as suas encomendas no momento da pesagem. Confira o tamanho e peso de todas as suas caixas.', head:'Imagem da sua caixa'
                    },
                    {
                        id:2,  img: 'onlineShop.jpg', text:'Integre seu ERP, loja virtual ou marketplace com o Portal Postal. Muito mais agilidade e organização na geração e conferencia de etiquetas.', head:'Totalmente integrado'
                    },
                    {
                        id:4,  img: 'apps.jpg', text:'Procure por nossos Apps na Google Play ou na Apple Store e tenha controle total de seus envios diretamente do seu telefone.', head:'Aplicativos Android e IOS'
                    },
                    {
                        id:5,  img: 'selo-correios.png', text:'O Portal Postal tem a certificação dos Correios. Garantia de qualidade e segurança.', head:'Certificado pela ECT'
                    }
                ],
                textoFaixa: 'Conheça mais a nossa solução'

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
    .bottom{
      margin-top: 120px;
    }

    .big-text{
       font-size: 6em;
        font-weight: bolder;
    }

</style>
