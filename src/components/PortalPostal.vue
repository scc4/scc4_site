<template>
    <div id="portalpostal">

        <!-- Portfolio Section -->
        <section id="portfolio">
            <div class="container">
                <div class="row">
                    <div>
                        <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                        >
                            <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <!-- work section -->
                        <div class="work-section wow fadeInUp" data-wow-delay="0.2s">
                            <!-- work box section -->
                            <div class="work-box-section wow fadeInUp" data-wow-delay="0.4s">
                                <div class="work-box-wrapper col4-work-box">
                                    <div class=" col-sm-6">
                                        <!-- <div class="portfolio-thumb"> -->
                                        <h3> <i class="fa fa-arrows-alt"></i> Envio de e-mails com atualização do rastreamento</h3>
                                        <h3> <i class="fa fa-cogs"></i> Integração à ERPs e Marketplaces</h3>
                                        <h3>  <i class="fa fa-code"></i> Imagem dos seus pacotes para você conferir o peso e as medidas</h3>
                                        <!--</div>-->
                                    </div>
                                    <div class=" col-sm-6">
                                            <a href="src/assets/img/portfolio-img1.jpg" class="image-popup">
                                                <!--  <div class="portfolio-item-hover">
                                                      <i class="fa fa-plus"></i>
                                                  </div> -->
                                                <img src="../assets/img/Selo_Certicacao_Correios_UX_positiva.png" class="img-responsive" alt="Portfolio"/>
                                            </a>
                                    </div>

                                    <div class=" col-sm-8">
                                            <img src="../assets/img/future-postal.jpg" class="img-responsive" alt="Portfolio"/>
                                    </div>
                                    <div class=" col-sm-4 bottom">
                                    <!-- <div class="portfolio-thumb"> -->

                                    <br>
                                    <h3>  <i class="fa fa-mobile"></i> Apps IOS e Android</h3>
                                    <br>
                                    <br>
                                    <a href="https://play.google.com/store/apps/details?id=br.com.scc4.newest.portalpostalcliente&hl=en"  target="_blank" class="image-popup">
                                        <img src="../assets/img/download.png"  class="" alt="Portfolio"/>
                                    </a>
                                    <!--</div>-->
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

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


        <!-- Footer Section -->

        <footer>
            <div class="container">
                <div class="row">

                    <div class="col-md-12 col-sm-12">
                        <div class="footer-copyright">
                            <ul class="social-icon">
                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="0.2s"></a></li>
                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="0.4s"></a></li>
                                <li><a href="#" class="fa fa-linkedin wow fadeInUp" data-wow-delay="0.6s"></a></li>
                                <li><a href="#" class="fa fa-google-plus wow fadeInUp" data-wow-delay="0.8s"></a></li>
                                <li><a href="#" class="fa fa-dribbble wow fadeInUp" data-wow-delay="1s"></a></li>
                            </ul>
                            <p class="small"> Copyright 2018  Miniml HTML Template - All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
        <!-- Back top -->

        <a href="#" class="go-top"><i class="fa fa-angle-up"></i></a>


    </div>
</template>


<script>
    export default {
        name: 'PortalPostal',
        data () {
            return {
                info: null,
                loading: true,
                errored: false
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
