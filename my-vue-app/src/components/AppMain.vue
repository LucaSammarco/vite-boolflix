<script>

import axios from 'axios';
import { store } from '../store.js'

export default {
    data() {
        return {
            store
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

}
    },
    created(){
            this.getMovie();
            
        }



};






</script>

<template>
    <div>
        <h1>Main</h1>
    </div>
</template>

<style lang="scss" scoped>

@use '../styles/partial/variables' as *;



</style>