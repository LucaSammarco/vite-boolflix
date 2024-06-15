<script>

import axios from 'axios';
import { store } from '../store.js'

export default {
    data() {
        return {
            store,

            search: ''
        };
    },

    methods: {
        getMovie(){

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=ritorno+al+futuro')
    .then((response) =>  {
        // handle success
        console.log(response.data);
        this.store.movie = response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

},

searchMovie(){

axios.get('https://api.themoviedb.org/3/search/movie?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query='+ this.store.search)
.then((response) =>  {
    // handle success
    console.log(response.data);
    this.store.searchResult = response.data;
    this.store.search = ''
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.finally(function () {
    // always executed
});

},





    },
    created(){
            this.getMovie();
            
        }



};






</script>

<template>
   
   <main>
    <div class="input-group mb-3 p-5">
            <input type="text" v-model="store.search" class="form-control" placeholder="Movie Title..." aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchMovie()">Search Movie</button>
    </div>


    <div class="movies d-flex flex-wrap">
            <article v-for="movie in store.searchResult.results" :key="movie.id" class="movie-item">
                        <h2>Titolo: {{ movie.title }}</h2>
                        <p>Titolo Originale: {{ movie.original_title }}</p>
                        <p>Lingua:  <img :src="'https://flagsapi.com/' + (movie.original_language === 'en' ? 'US' : movie.original_language.toUpperCase()) + '/flat/16.png'" alt="Flag"></p>
                        <p>Voto: {{ movie.vote_average }}</p>
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