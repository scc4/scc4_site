<template>
  <section>
    <LoginPortal v-if ="login === 1"></LoginPortal>
    <div class="container" :style="{'backgroundColor': shapeColors[0]}">
      <div  class="row col-md-9 dismiss">
        <h1 class="wow fadeInUp lr-pd" data-wow-delay="0.6s">{{slogan}}</h1>
        <h4 class="wow fadeInUp lr-pd" data-wow-delay="0.8s">{{msg}}</h4>
      </div>
    </div>
    <canvas id="waves" :style="{'borderColor': shapeColors[0]}"></canvas>
  </section>
</template>

<script>

  import { TimelineMax } from 'gsap';
  import { Power3 } from 'gsap';
  import LoginPortal from "@/components/LoginPortal";

export default {
  name: 'Canvas',
  components: {LoginPortal},
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
      canvasOn(newVal[1], newVal[2], newVal[3])
    }

  },
  mounted() {
    canvasOn('#00d67e', '#de00ff', '#ff9c00')
    }
  }
  function canvasOn(corA, corB, CorC){

    const canvas = document.querySelector("#waves")
    let context = canvas.getContext("2d")
    const pictureWidth = 1000
    const pictureHeight = 313

    const setCanvasSize = () => {
      const deviceRatio = window.devicePixelRatio || 1
      const pictureRatio = window.innerWidth / pictureWidth
      const ratio = deviceRatio * pictureRatio

      canvas.width = pictureWidth * ratio
      canvas.height = pictureHeight * ratio
      context.scale(ratio, ratio)
      context.globalCompositeOperation = "multiply"
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const shape1 =
            "M1002-2H-2v151.2c1.2,0.6,415.9,195.6,502,11.7c86.1-183.8,500.6-12.4,502-11.7V-2"
    const shape2 =
            "M1002-2H-2v151.2c482.8,223,570,122.8,502,11.7c-67.1-109.5,21.7-216.5,502-11.7V-2"
    const shape3 =
            "M1002-2H-2v151.2c1.7,1.5,379.6,355.2,502,11.7c122.5-343.7,501.5-12.2,502-11.7V-2"
    const path1 = { d: shape1 }
    const path2 = { d: shape2 }
    const path3 = { d: shape3 }

    const drawPathsOnCanvas = () =>  {
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

    tl.to(path1, 3, { d: shape2, ease })
    tl.to(path3, 3, { d: shape1, ease }, '-=2.5')
    tl.to(path2, 3, { d: shape3, ease }, '-=2.5')

    tl.to(path3, 3, { d: shape2, ease })
    tl.to(path2, 3, { d: shape1, ease }, '-=2.5')
    tl.to(path1, 3, { d: shape3, ease }, '-=2.5')

    tl.to(path2, 3, { d: shape2, ease })
    tl.to(path1, 3, { d: shape1, ease }, '-=2.5')
    tl.to(path3, 3, { d: shape3, ease }, '-=2.5')
  }


</script>
<style scoped>

  #waves {
   /* border-top: 1vw solid #000;
    display: block;*/
    width: 100%;
    color: white;
    margin-top: -30px;
  }
.container{
  /*background-color: black;*/
  width: 100%;
  color: white;
}
  p {
    color: white;
  }

</style>
