<template>
    <transition name="modal-fade">
        <div class="back" @click="onClickOutside">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" >
                <div class="sm-form">
                    <h5><img src="../assets/img/logo_boxcubo.png" class="img-responsive"/></h5>
                    <h5>Login</h5>
                    <div class="form-group">
                        <input type="email" v-model="email" placeholder="e-mail" class="form-control form-control-sm" />
                    </div>        <div class="form-group">
                    <input type="email" v-model="cnpj" placeholder="cnpj" class="form-control form-control-sm" />
                </div>
                    <button type="button" class="btn btn-danger btn-sm" @click="loginBoxCubo()">Login</button>

                   <!-- <div class="social-icons">
                        <ul>
                            <li><a href="#"><i class="fa fa-google" ></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" ></i></a></li>
                        </ul>
                    </div> -->
                </div>
           </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: "ModalLoginBox",
        components: {
        },
        data(){
            return{
                email: '',
                cnpj:'',
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
       loginBoxCubo(){
           const requestOptions = {
               method: "POST",
               headers: { "Content-Type": "application/x-www-form-urlencoded" }
           };
           fetch("http://www.portalpostal.com.br/ServLoginBox?email=" +this.email +'&cnpj='+ this.cnpj, requestOptions)
               .then(response => console.log(response))
               .catch(function (error) {this.output = error })
       }
    }
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
        max-width: 400px;
        height: 800px;
        background: transparent;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        z-index: 1200;
        margin-top: 100px;
        padding: 50px;
    }

    .btn{
        border-radius: 0 !important;
    }

    .col-md-6 {
        padding-left: 0 !important;
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
        transition: all 0.2s ease-in;
    }

    .social-icons ul li a:focus i,
    .social-icons ul li a:active i {
        transition: none;
        color: #222222;
    }

</style>