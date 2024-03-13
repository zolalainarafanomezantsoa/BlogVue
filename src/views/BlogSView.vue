<template>
    <div class="page-blogs">
        <div class="blog-container">
            <div 
                class="blog-item">
                <h2>{{ currentBlog.title }}</h2>
                <img :src="'/images/' + currentBlog.image" alt="">
                <div v-html="currentBlog.text" class="text">
                </div>
                <div class="buttons">
                    
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
                    background-color: rgb(255, 0, 183);
                    color: white;
                    border : 1px solid rgb(155, 155, 192);
                    text-decoration: none;
                    &:last-child{
                        margin-left: 10px;
                    }
                    &:hover{
                        color : rgb(0, 255, 200);
                        background-color: transparent;
                    }
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            blogs : [
                {
                    id : 1,
                    title : 'Chambre',
                    image : 'chambre1.jpg',
                    text : 'chambre plancadrés et bien aerée et climatisée.',
                    slug : '1'
                },
                {
                    id : 2,
                    title : 'Cuisine',
                    image : 'cuisine1.jpg',
                    text : 'cuisine ouvert plancadrés, designe americain.',
                    slug : '2'
                },
                {
                    id : 3,
                    title : 'Salle de bain',
                    image : 'salle de bain1.jpg',
                    text : 'salle de bain classe avec eau chaude.',
                    slug : '3'
                },
                {
                    id : 4,
                    title : 'Maison',
                    image : 'maison4.jpg',
                    text : 'villa F4 qui contient 4 chambre.',
                    slug : '4'
                }
            ],
            currentBlog : {
                id : 1,
                title : 'Titre 1',
                image : 'chambre1.jpg',
                text : '',
                slug : '1'
            },
        }
    },
    created(){
        // maka anle valeur ana slug
        const slug = this.$route.params;
        console.log(slug);
        const data = this.blogs.filter((elem) => elem.slug == slug.slugkely)
        //console.log(data)
        this.currentBlog = data[0]
    }
}
</script>