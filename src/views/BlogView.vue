<template>
    <div class="page-blogs">
        <div class="blog-container">
            <div 
                v-for="blog in blogs" :key="blog.id"
                class="blog-item">
                <h2>{{ blog.title }}</h2>
                <img :src="'/images/' + blog.image" alt="">
                <div v-html="blog.text" class="text">
                </div>
                <div class="buttons">
                    <Router-link :to="'/blog/' + blog.slug + '/' + blog.id">Plus d'info</Router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .blog-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 50px;
        .blog-item{
            margin: 10px;
            border : 1px solid grey;
            box-shadow: 0px 0px 3px;
            border-radius: 10px;
            width: 300px;
            padding: 5px;
            img{
                width : 100%;
            }
            .text {
                text-align: center;
            }
            .buttons{
                a{
                    background-color: blue;
                    color: white;
                    border : 1px solid blue;
                    text-decoration: none;
                    &:hover{
                        color : blue;
                        background-color: transparent;
                    }
                }
            }
        }
    }
</style>
<script>
import {
  RouterLink,
  RouterView,
} from 'vue-router';

export default {
    data(){
        return {
            blogs : [
                {
                    id : 1,
                    title : 'Chambre',
                    image : 'chambre1.jpg',
                    text : '<b> Lorem </b> ipsutm dolor sit amet.',
                    slug : '1'
                },
                {
                    id : 2,
                    title : 'Cuisine',
                    image : 'cuisine1.jpg',
                    text : 'Lorem ipsutm dolor sit amet.',
                    slug : '2'
                },
                {
                    id : 3,
                    title : 'Salle de bain',
                    image : 'salle de bain1.jpg',
                    text : 'Lorem ipsutm dolor sit amet.',
                    slug : '3'
                },
                {
                    id : 4,
                    title : 'Maison',
                    image : 'maison4.jpg',
                    text : 'Lorem ipsutm dolor sit amet.',
                    slug : '4'
                }
            ]
        }
    }
}
</script>