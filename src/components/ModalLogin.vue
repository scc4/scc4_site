<template>
    <transition name="modal-fade">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >
                <div class="sm-form">
                    <h5>Login</h5>
                    <div class="form-group col-md-6">
                        <input type="number" v-model="agencia" size="3" placeholder="agência" class="form-control form-control-sm" maxlength="3" />
                    </div>
                    <div class="form-group">
                        <input type="email" v-model="email" placeholder="e-mail ou login" class="form-control form-control-sm" />
                    </div>

                    <div class="form-group">
                        <passwordToglge v-model="senha" ></passwordToglge>
                        <!-- <input type="password" placeholder="senha" class="form-control form-control-sm" /> -->
                    </div>
                    <button type="button" class="btn btn-primary btn-sm" @click="loginPortal()">Entrar</button>

                    <div class="forgot-password">
                        <a href="#" class="forgot-password mt-2 mb-4">Esqueceu a senha ?</a>
                    </div>
                    <div class="social-icons">
                        <ul>
                            <li><a href="#"><i class="fa fa-google" style="color: #2e6da4"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook" style="color: #2e6da4"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" style="color: #2e6da4"></i></a></li>
                        </ul>
                    </div>
                    <strong>Response token:</strong>
                    <pre>{{output}}</pre>
                    <button type="button" class="btn btn-danger btn-sm"  @click="close"
                            aria-label="Close modal">Fechar</button>
                </div>
        </div>
    </transition>
</template>

<script>
    import passwordToglge from "@/components/passwordToglge";

    export default {
        name: "ModalLogin",
        components: {
            passwordToglge
        },
        data(){
            return{
                agencia: '',
                email: '',
                senha:'',
                output: ''
            }
        },
   methods: {
        close() {
            this.$emit('close');
        },
       loginPortal(){
           const requestOptions = {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ login: this.email, senha: this.senha})
           };
           console.log(JSON.stringify({ login: this.email, senha: this.senha}));
           fetch("https://portalpostal.com.br/rest/cliente/usuario/login?idEmpresa=" +this.agencia, requestOptions)
               .then(response => response.json())
               .then(data => {
                   console.log(data)
                   this.output = data.data.cliente_usuario.token
               })
               .catch(function (error) {this.output = error })
       }
    }
    }

</script>

<style scoped>


    .modal {
        position: absolute !important;
        right: 30px !important;
        max-width: 300px;
        height: 400px;
        background: transparent;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .btn{
        border-radius: 0 !important;
    }

    .col-md-6 {
        padding-left: 0px !important;
    }


    h5{
        color: white;
        font-size: 14px;
    }
    .sm-form{
        /*position: absolute;
        max-width: 300px;
        right: 10%;*/
        background-color: rgba(184, 185, 186, 0.9);
        padding: 10px;
        z-index: 100;
        border-radius: 8px;
    }

    .forgot-password {
        float: right;
    }
    .forgot-password a {
        text-align: left;
        font-size: 10px;
        padding-top: 3px;
        color: white;
        margin: 0;
        font-weight: bolder;
    }


    .social-icons {
        text-align: center;
        font-weight: 300;
        font-size: 0.5em;
        color: #222222;
        padding-top: 5px;
    }

    .social-icons ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .social-icons ul li {
        display: inline-block;
        zoom: 1;
        width: 35px;
        vertical-align: middle;
        border: 1px solid #e3e8f9;
        font-size: 15px;
        height: 27px;
        line-height: 25px;
        margin-right: 5px;
        background: #f4f6ff;
    }
    .social-icons ul li:hover {
        background: #BDBDBD;
    }

    .social-icons ul li a {
        display: block;
        font-size: 1em;
        margin: 0 2px;
        text-decoration: none;
    }
    .social-icons ul li a i {
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .social-icons ul li a:focus i,
    .social-icons ul li a:active i {
        transition: none;
        color: #222222;
    }

</style>