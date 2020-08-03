<template>
<div>


    <section id="cta" class="bg-gray">
        <div class="container">
            <div class="row">

                <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                        <iframe src="https://www.youtube.com/embed/sXSIHqgciwc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="fadeInUp col-md-6" data-wow-delay="0.4s">
                        <iframe src="https://www.youtube.com/embed/XjNkM7hRJTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    #cta {
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>