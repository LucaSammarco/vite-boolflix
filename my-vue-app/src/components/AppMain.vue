<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            pathImage: 'https://image.tmdb.org/t/p/',
            imgDimensionM: 'w342/',
            star: '<i class="fa-solid fa-star"></i>',
        };
    },

    methods: {
        getStars(voto) {
            let valutazioneInt = Math.ceil(voto / 2);
            let stars = '';

            for (let index = 1; index <= valutazioneInt; index++) {
                stars += this.star;
            }

            return stars;
        }
    },

    created() {
        // store.getMovie();
    }
};
</script>

<template>
   <main>

    <div class="container-fluid ">

    

    <div class="movies d-flex flex-wrap">
        <article v-for="serie in store.series.results" :key="serie.id" class="movie-item">
            <h2>Titolo: {{ serie.name }}</h2>
            <img :src="this.pathImage + this.imgDimensionM + serie.poster_path" alt="">
            <p>Titolo Originale: {{ serie.original_name }}</p>
            <p>Lingua: <span class="lang-icon" :class="'lang-icon-' + serie.original_language"></span></p>
            <p>Voto: {{ serie.vote_average }}</p>
            <p>Voto: <span v-html="getStars(serie.vote_average)"></span></p>
        </article>
    </div>

    </div>
   </main>

</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

main {
    padding: 2rem;
    margin-top: 10rem;
}

.movie {
    padding: 2rem;
}
</style>
