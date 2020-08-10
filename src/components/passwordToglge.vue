<template>
    <div class="input-group" id="show_hide_password">
            <input class="form-control"
                   :type="[tipo]"
                   @input="onInputChange"
                   v-model="inputValue"
                   placeholder="senha"
            />
            <div class="input-group-addon">
                <a href="#"><i :class="[classe]" style="color: #2e6da4" @click="toggleEye()"></i></a>
            </div>
        </div>
</template>

<script>

    export default {
        name: "passwordToglgev",
        props: ['value'],
        data(){
            return{
                tipo: 'password',
                classe: 'fa fa-eye-slash',
                inputValue: this.value
            }

        },
        methods: {
            onInputChange() {
                // We will emit the "input" event and pass it the changed value that we wish to be returned to parent component.
                this.$emit('input', this.inputValue);
            },
            toggleEye() {
                if (this.tipo === 'password') {
                    this.tipo = 'text';
                }else{
                    this.tipo = 'password';
                }
                if (this.classe === 'fa fa-eye-slash') {
                    this.classe = 'fa fa-eye';
                }else{
                    this.classe = 'fa fa-eye-slash';
                }

            }
        }
    }

</script>

<style scoped>
    a, a:hover{
        color:#333
    }
</style>