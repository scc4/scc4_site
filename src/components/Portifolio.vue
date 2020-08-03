<template>
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <!-- work section -->
                    <div class="work-section wow fadeInUp" data-wow-delay="0.5s">
                        <h4 class="filter-wrapper">Conheça nossas soluções</h4>
                        <!-- <ul class="filter-wrapper clearfix">
                            <li>Conheça nossas soluções.</li>
                        <li><a href="#" class="opc-main-bg" data-filter=".web">Web Design</a></li>
                            <li><a href="#" class="opc-main-bg" data-filter=".print">Print</a></li>
                            <li><a href="#" class="opc-main-bg" data-filter=".branding">Branding</a></li>
                            <li><a href="#" class="opc-main-bg" data-filter=".apps">Apps</a></li>
                            <li><a href="#" class="opc-main-bg" data-filter=".html">Templates</a></li>
                        </ul>-->
                        <!-- work box section -->
                        <div class="work-box-section wow fadeInUp" data-wow-delay="0.5s">
                            <div class="work-box-wrapper col4-work-box">
                                <div class="col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="src/assets/img/portfolio-img1.jpg" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="../assets/img/MaquinaFrente_md.png" class="img-responsive" alt="Portfolio"/>
                                        </a>
                                    </div>

                                </div>
                                <div class="col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="src/assets/img/portfolio-img1.jpg" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="../assets/img/portalpostal-pc-mobile-1.png" class="img-responsive" alt="Portfolio"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Portifolio"
    }
</script>

<style scoped>
    .filter-wrapper {
        color: #0b0b0b;
        padding-bottom: 40px;
    }
    .work-section{
        margin-top: 80px;
    }
</style>