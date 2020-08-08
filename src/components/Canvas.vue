<template>
    <section>
        <!-- <LoginPortal v-if ="login === 1"></LoginPortal>
         <LoginBoxCubo v-if ="login === 2"></LoginBoxCubo>-->
        <div class="row" :style="{'backgroundColor': shapeColors[0]}">
            <div class="col-sm-12 col-md-8 col-lg-6 pd" >
                <h2 class="wow fadeInUp" data-wow-delay="0.6s" :style="{'color': shapeColors[4]}">{{slogan}}</h2>
                <p class="wow fadeInUp text-justify" data-wow-delay="0.8s" :style="{'color': shapeColors[4]}">{{msg}}</p>
                <button v-if="login == 1" class="btn btn-primary-outline"
                        @click="showModal"
                >
                    Login Portal Postal
                </button>
                <button v-if="login == 2" class="btn btn-boxcubo"
                        @click.stop="showModal"
                >
                    login Área do cliente
                </button>
            </div>
        </div>
        <canvas id="waves" :style="{'borderColor': shapeColors[0]}" class="bg-gray"></canvas>
        <ModalLogin v-if="login == 1" v-show="isModalVisible" @close="closeModal"></ModalLogin>
        <ModalLoginBox v-if="login == 2" v-show="isModalVisible" @close="closeModal"></ModalLoginBox>
    </section>
</template>

<script>

    import {TimelineMax} from 'gsap';
    import {Power3} from 'gsap';
    import ModalLogin from "@/components/ModalLogin";
    import ModalLoginBox from "@/components/ModalLoginBox";


    export default {
        name: 'Canvas',
        components: {ModalLoginBox, ModalLogin},
        data() {
            return {

                isModalVisible: false
            }
        },
        props: {
            slogan: String,
            msg: String,
            cor: String,
            login: undefined,
            shapeColors: undefined
        },
        watch: {
            shapeColors: function (newVal, oldVal) { // watch it
                console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.canvasOn(newVal[1], newVal[2], newVal[3])

            }
        },
        mounted() {
            this.canvasOn('#F37F80', '#68BFD0', '#F9C75A')
        },
        methods: {

            showModal(ev) {
                ev.preventDefault();
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },

            canvasOn(corA, corB, CorC) {
                const canvas = document.querySelector("#waves")
                let context = canvas.getContext("2d")
                const pictureWidth = 1000
                const pictureHeight = 240
                const setCanvasSize = () => {
                    const deviceRatio = window.devicePixelRatio || 1
                    const pictureRatio = window.innerWidth / pictureWidth
                    const ratio = deviceRatio * pictureRatio

                    canvas.width = pictureWidth * ratio
                    canvas.height = pictureHeight * ratio
                    context.scale(ratio, ratio)
                  /*  context.globalCompositeOperation = "multiply"*/
                    context.globalCompositeOperation = "overlay"
                }

                setCanvasSize()
                window.addEventListener('resize', setCanvasSize)

                /* original
                 const shape1 =
                          "M1002-2H-2v151.2c1.2,0.6,415.9,195.6,502,11.7c86.1-183.8,500.6-12.4,502-11.7V-2"
                  const shape2 =
                          "M1002-2H-2v151.2c482.8,223,570,122.8,502,11.7c-67.1-109.5,21.7-216.5,502-11.7V-2"
                  const shape3 =
                          "M1002-2H-2v151.2c1.7,1.5,379.6,355.2,502,11.7c122.5-343.7,501.5-12.2,502-11.7V-2"
        */

                const shape1 =
                    "M 1002 -2 H -2 v 74 c 0 1 415.9 195.6 502 11.7 c 50 -133.7 500.6 -12.4 502 -11.7 V -2"
                const shape2 =
                    "M 1002 -2 H -2 v 75 c 384 190 570 122.8 502 11.7 c -35 -86.7 87 -119.7 502 -11.7 V -2"
                const shape3 =
                    "M 1002 -2 H -2 v 102 c -1 0 262 238 503 -15 c 127 -170 503 -13.7 502 -11.7 V -2"


                const path1 = {d: shape1}
                const path2 = {d: shape2}
                const path3 = {d: shape3}

                let drawPathsOnCanvas = () => {
                    context.clearRect(0, 0, pictureWidth, pictureHeight)

                    context.fillStyle = corA //00d67e
                    context.fill(new Path2D(path1.d))

                    context.fillStyle = corB //de00ff
                    context.fill(new Path2D(path2.d))

                    context.fillStyle = CorC //ff9c00
                    context.fill(new Path2D(path3.d))
                }
                const tl = new TimelineMax({
                    repeat: -1,
                    onUpdate: drawPathsOnCanvas
                })
                const ease = Power3.easeInOut

                tl.to(path1, 3, {d: shape2, ease})
                tl.to(path3, 3, {d: shape1, ease}, '-=2.5')
                tl.to(path2, 3, {d: shape3, ease}, '-=2.5')

                tl.to(path3, 3, {d: shape2, ease})
                tl.to(path2, 3, {d: shape1, ease}, '-=2.5')
                tl.to(path1, 3, {d: shape3, ease}, '-=2.5')

                tl.to(path2, 3, {d: shape2, ease})
                tl.to(path1, 3, {d: shape1, ease}, '-=2.5')
                tl.to(path3, 3, {d: shape3, ease}, '-=2.5')
            }

        }
    }
</script>
<style scoped>

    #waves {
        width: 100%;
        color: white;
    }

    .pd {
        color: white;
        padding-left: 80px;
        padding-right: 80px;
        min-height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .pd p {
       /* color: white;*/
    }
    .pd h2 {
      font-weight: bold;
    }
    .row {
        margin-right: 0;
    }

    .container {
        width: 100%;
        color: white;
    }


    .btn-boxcubo{
        border-radius: 2px;
        background-color: #FF2F29;
        border: none;
        font-weight: 500;
        letter-spacing: 2px;
        color: #ffffff;
        text-transform: uppercase;
        margin-top: 30px;
        height: 50px;
        padding: 12px 12px;

    }
    .btn-boxcubo:active{
        background-color: #FFCC88;
        color: white;
    }
    .btn-boxcubo:hover {
        background-color: #FFCC88;
        color: white;
    }

</style>
