<template>
    <transition name="modal-fade">
             <div class="back" @click="onClickOutside">
                <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
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
                    </div>
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
                onClickOutside (event) {
                   if (event.target.className == 'back') {
                       this.$emit('close');
                       // close modal here
                       document.body.removeEventListener("click", this.event);
                   }
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
        },


    }

</script>

<style scoped>

    .back{
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(7,7,7,0.5);
    }
    .modal {
        position: absolute !important;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%);
        max-width: 300px;
        height: 400px;
        background: transparent;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        z-index: 1200;
        margin-top: 100px;
    }

    .btn{
        border-radius: 0 !important;
    }

    .col-md-6 {
        padding-left: 0px !important;
    }


    h5{
        color: #23527c;
        font-size: 14px;
    }
    .sm-form{
        background-color: white;
        padding: 30px;
        z-index: 100;
        border-radius: 1px;
        border: solid 1px #999999;
    }

    .forgot-password {
        float: right;
    }
    .forgot-password a {
        text-align: left;
        font-size: 10px;
        padding-top: 3px;
        color: #23527c;
        margin: 0;
        font-weight: bolder;
    }


    .social-icons {
        text-align: center;
        font-weight: 300;
        font-size: 0.5em;
        color: #222222;
        padding-top: 5px;
        margin-top: 15px;
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