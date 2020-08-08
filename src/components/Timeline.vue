<template>
    <div class="center-block central">

                <h2>{{$t('history')}}</h2>
                <ul class="timeline">
                    <li v-for="item in items" :key="item.id">
                        <a href="#" class="float-right">{{item.date}}</a>
                        <a target="_blank" href="#">{{$t('items')[item.id].type}}</a>
                        <p>{{$t('items')[item.id].content}}</p>
                    </li>
                </ul>
    </div>
</template>
<script>
    export default {
        name: 'Timeline',
        data () {
            return {
                items: [
                    {
                        id:0,
                        date: '2008 - ',
                        color: '#dcdcdc'
                    },
                    {
                        id:1,
                        date: '2010 - ',
                        color: '#dcdcdc'
                    },
                    {
                        id:2,
                        date: '2011 - ',
                        color: '#dcdcdc'
                    },
                    {
                        id:3,
                        date: '2014 - ',
                        color: '#dcdcdc'
                    },
                    {
                        id:4,
                        date: '2019 - ',
                        color: '#F9C75A'
                    }
                ]
            }
        }

    }
</script>
<style>
.central{
    height: 100%;
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
    ul.timeline p{
        font-size: 18px;
    }

</style>