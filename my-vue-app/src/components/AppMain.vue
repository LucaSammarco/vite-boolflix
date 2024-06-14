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
    <div>
        <h1 class="">Main</h1>


    </div>

    <div class="input-group mb-3 p-5">
            <input type="text" v-model="store.search" class="form-control" placeholder="Movie Title..." aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchMovie()">Search Movie</button>
    </div>

</template>

<style lang="scss" scoped>

@use '../styles/partial/variables' as *;



</style>