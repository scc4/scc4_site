<template>
    <div>
        <div class="space-medium bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <h2>Um conceito inovador</h2>
                            <p>Podendo ser facilmente integrada a qualquer software, a BOXCUBO é a unica solução que
                                pode ser adquirida sem nenhum investimento inicial.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="video-testimonial-block">
                            <div class="video">
                                <iframe src="https://www.youtube.com/embed/sXSIHqgciwc"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div class="video-testimonial-content">
                            <h4 class="mb10">REPENSE</h4>
                            <p>Como você pesa e mede suas caixas?</p>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="video-testimonial-block">
                            <div class="video">
                                <iframe src="https://www.youtube.com/embed/XjNkM7hRJTc" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="video-testimonial-content">
                            <h4 class="mb10">REDUZA</h4>
                            <p>Menos tempo e recursos no porcesso de medição</p>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="video-testimonial-block">
                            <div class="video">
                                <iframe src="https://www.youtube.com/embed/BB7fwPav5IY?list=PLUziLbnQUigF6Ufz8OQYW0Az0zcG2ez4y"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                        <div class="video-testimonial-content">
                            <h4 class="mb10">REVISE</h4>
                            <p>Veja a imagem seus objetos através da nossa interface gráfica ou na web</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xs-12 col-sm-12 col-lg-8">
                    <img src="../assets/img/future-postal.jpg" class="img-responsive"/>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-4">
                    <Carrousel :autoplay="true" :perPage="3">3</Carrousel>
                </div>
            </div>
        </div>
        <section id="cta" class="bg-gray">
            <div class="row">
                <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                        <div>
                                <span class="big-text">
                                            + de 1.500.000
                                        </span>
                            <p>Objetos medidos/mês</p>
                        </div>
                    </div>
                    <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                        <span class="big-text">+ de 180 </span>
                        <p>Clientes</p>
                    </div>
                </div>
            </div>
        </section>

    </div>

</template>

<script>
    import Carrousel from "@/components/Carrousel";

    export default {
        name: "Boxcubo",
        components: {Carrousel}
    }
</script>

<style scoped>
    .align-items-center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    @media (max-width: 990px ) {
        .align-items-center {
            flex-direction: column;
        }
    }

    .space-medium {
        margin-top: -35px;
        padding-bottom: 50px;
    }

    .big-text {
        font-size: 3em;
        font-weight: bolder;
    }

    .video-testimonial-block {
        position: relative;
        width: auto;
        height: 206px;
        overflow: hidden;
        margin-bottom: 30px;
    }

    .video-testimonial-block .video iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0px;
    }

    .mb10 {
        margin-bottom: 10px;
    }

    .section-title {
        margin-bottom: 40px;
    }
</style>