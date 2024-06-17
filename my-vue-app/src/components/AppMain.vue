<script>

import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            search: '',
            pathImage: 'https://image.tmdb.org/t/p/',
            imgDimensionM:'w342/'
        };
    },

    methods: {
        getMovie() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=ritorno+al+futuro')
                .then((response) => {
                    console.log(response.data);
                    this.store.movie = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },

        searchMovie() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=' + this.store.search)
                .then((response) => {
                    console.log(response.data);
                    this.store.movie = response.data;
                    this.store.search = '';
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },

        searchSeries() {
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=' + this.store.search)
                .then((response) => {
                    console.log(response.data);
                    this.store.series = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },

        searchQuery(){
            this.searchMovie();
            this.searchSeries();
        }


    },

    created() {
        // this.getMovie();
    }
};
</script>


<template>
   
   <main>
    <div class="input-group mb-3 p-5">
            <input type="text" v-model="store.search" class="form-control" placeholder="Movie Title..." aria-label="Recipient's username" aria-describedby="button-addon2" @keyup.enter="searchQuery()">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchQuery()">Search Movie</button>
    </div>


    <div class="movies d-flex flex-wrap">
    <article v-for="serie in store.series.results" :key="serie.id" class="movie-item">
        <h2>Titolo: {{ serie.name }}</h2>
        <img :src="this.pathImage + this.imgDimensionM +  serie.poster_path" alt="">
        <p>Titolo Originale: {{ serie.original_name }}</p>
        <p>Lingua: <span class="lang-icon" :class="'lang-icon-' + serie.original_language"></span></p>
        <p>Voto: {{ serie.vote_average }}</p>
    </article>
    </div>


    </main>

</template>

<style lang="scss" scoped>

@use '../styles/partial/variables' as *;

main {
    padding: 2rem;
    margin: 1rem;
}

.movie {

    padding: 2rem;

}

</style>