<template>
    <div class="center-block central">
        <div>
                <h2>Nossa História</h2>
                <ul class="timeline">
                    <li v-for="item in items" :key="item.id">
                        <a href="#" class="float-right">{{item.date}}</a>
                        <a target="_blank" href="#">{{item.type}}</a>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'Timeline',
        data () {
            return {
                items: [

                    {
                        id:1,
                        date: '2008 - ',
                        color: '#dcdcdc',
                        type: 'Início',
                        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
                    },
                    {
                        id:2,
                        date: '2019 - ',
                        color: '#dcdcdc',
                        type: 'Premio Melhor empresa TI',
                        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
                    }
                ]
            }
        }

    }
</script>
<style>
.central{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
}
    ul.timeline {
        list-style-type: none;
        position: relative;
    }
    ul.timeline:before {
        content: ' ';
        background: #d4d9df;
        display: inline-block;
        position: absolute;
        left: 29px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }
    ul.timeline > li {
        margin: 20px 0;
        padding-left: 20px;
    }
    ul.timeline > li:before {
        content: ' ';
        background: white;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #22c0e8;
        left: 20px;
        width: 20px;
        height: 20px;
        z-index: 400;
    }

</style>