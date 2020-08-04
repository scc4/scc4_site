<template>
<div>
    <div class="space-medium">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <!-- section-title -->
                    <div class="section-title">
                        <h2>Um conceito inovador</h2>
                        <p>Podendo ser facilmente integrada a qualquer software, a BOXCUBO é a unica solução que pode ser adquirida sem nenhum investimento inicial.</p>
                    </div>
                </div>
                <!-- /.section-title -->
            </div>
            <div class="row">
                <!-- video-testimonail -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="video-testimonial-block">
                        <div class="video">
                            <iframe src="https://www.youtube.com/embed/sXSIHqgciwc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <div class="video-testimonial-content">
                        <h4 class="mb10">Harlan M. Williams</h4>
                        <p>Student Loan</p>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="video-testimonial-block">
                       <div class="video">
                           <iframe src="https://www.youtube.com/embed/XjNkM7hRJTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                       </div>
                    </div>
                    <div class="video-testimonial-content">
                        <h4 class="mb10">Alisha A. Delapaz</h4>
                        <p>Retirement Planning</p>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="video-testimonial-block">
                         <div class="video">
                             <iframe src="https://www.youtube.com/embed/BB7fwPav5IY?list=PLUziLbnQUigF6Ufz8OQYW0Az0zcG2ez4y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                             </iframe>
                        </div>
                    </div>
                    <div class="video-testimonial-content">
                        <h4 class="mb10">Rebecca L. Jenkins</h4>
                        <p>Term Insurance</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section id="cta" class="bg-gray">
        <div class="container">
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
                        <p>Empresas Utilizando</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Footer></Footer>
</div>

</template>

<script>
    import Footer from "@/components/Footer";
    export default {
        name: "Boxcubo",
        components: {Footer}
    }
</script>

<style scoped>
    .big-text{
        font-size: 3em;
        font-weight: bolder;
    }
    p { margin: 0 0 20px; line-height: 1.7; }
    p:last-child { margin: 0px; }
    ul, ol { font-family: 'Roboto', sans-serif; }
    a { text-decoration: none; color: #7d7f82; -webkit-transition: all 0.3s; -moz-transition: all 0.3s; transition: all 0.3s; }
    a:focus, a:hover { text-decoration: none; color: #fe5b10; }
    .video-testimonial-block { position: relative; width: auto; height: 206px; overflow: hidden; margin-bottom: 30px; }
    .video-testimonial-block .video-thumbnail { height: 100%; width: 100%; position: absolute; z-index: 1; background-size: cover; top: 0; left: 0; }
    .video-testimonial-block .video { }
    .video-testimonial-block .video iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0px; }
    .video-testimonial-block .video-play { position: absolute; z-index: 2; top: 50%; left: 50%; margin-left: -40px; margin-top: -18px; text-decoration: none; }
    .video-testimonial-block .video-play::before { content: "\f144"; font-family: 'Font Awesome\ 5 Free'; font-weight: 900; font-size: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-size: 50px; color: #b3b5bc; }
    .video-testimonial-block .video-play:hover::before { color: #172651; }
    .mb10{margin-bottom:10px;}
    .section-title { margin-bottom: 40px; }
</style>