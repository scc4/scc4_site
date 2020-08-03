<template>
    <section id="cta" class="bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <p class="wow fadeInUp" data-wow-delay="0.4s">{{texto}}</p>
                    <!-- <a href="about.html" class="wow fadeInUp btn btn-success" data-wow-delay="0.8s">LEARN ABOUT US</a> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Faixa",
        props:{
            texto: String
        }
    }
</script>

<style scoped>
#cta{
    margin-bottom: 40px;
}

</style>