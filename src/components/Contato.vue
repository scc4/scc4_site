<template>
    <div>
        <section id="contact">
            <div class="container">
                <div class="row">
                    <h2 class="text-center">{{$t('contato')}}</h2>
                    <div class="wow fadeInUp col-md-6 col-sm-6 contact-detail" data-wow-delay="0.6s">
                        <div class=" col-md-6 col-sm-6 ">

                            <div class="contact-detail-1">
                                <h3>Headquarter</h3>
                                <p class="small">Estrada Haroldo Soares Glavan, 4382</p>
                                <p class="small">CEP 88050-005 - Casa 01</p>
                                <p class="small">Cacupé - Florianópolis/SC</p>
                                <div class="contact-detail-2">
                                    <h4>{{$t('administrativo')}}</h4>
                                    <p class="small">atendimento01@scc4.com.br</p>
                                    <p class="small"><i class="fa fa-phone pr-10"></i> +55 (48) 4042-1778</p>
                                </div>
                            </div>
                            <div class="contact-detail-2">
                                <h4>{{$t('comercial')}}</h4>
                                <p class="small">comercial01@scc4.com.br</p>
                                <p class="small"><i class="fa fa-whatsapp pr-10"></i> +55 (48) 9 9915-0278</p>
                            </div>

                        </div>

                        <div class="col-md-6 col-sm-6">

                            <div class="contact-detail-1">
                                <h3>{{$t('suporte')}}</h3>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (11) 4210-0340</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (19) 4042-5063</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (31) 4042-1156</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (41) 4042-7109</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (43) 4052-9436</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (48) 4042-1778</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (51) 4042-1825</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (81) 4042-1943</p>
                                <p class="small"><i class="fa fa-phone pr-10"></i> +55 (85) 4042-1179</p>
                                <p class="small"><i class="fa fa-whatsapp pr-10"></i> +55 (48) 9 9915-0172</p>
                            </div>

                        </div>
                    </div>

                    <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.4s">
                        <form action="contact.php" method="post">
                            <div class="col-md-6 col-sm-6">
                                <input type="text" class="form-control" placeholder="{{$t('seunome')}}" required>
                            </div>

                            <div class="col-md-6 col-sm-6">
                                <input type="email" class="form-control" placeholder="{{$t('seuemail')}}" required>
                            </div>

                            <div class="offset-md-12  col-sm-12">
                                <input type="tel" class="form-control" placeholder="{{$t('seutelefone')}}" required>
                                <textarea class="form-control" placeholder="{{$t('suamensagem')}}" rows="6" required></textarea>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <input type="submit" class="form-control" value="{{$t('enviar')}}">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Contato",
        components: {}
    }
</script>

<style scoped>
    .text-center {
        padding: 50px;
    }
</style>