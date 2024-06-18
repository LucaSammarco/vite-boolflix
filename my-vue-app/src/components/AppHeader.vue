<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        };
    },

    methods: {
        searchQuery() {
            store.searchQuery();
        }
    }
};
</script>

<template>
    <header>
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <h1 class="m-0 title">Boolflix</h1>

            <div class="input-group w-25 m-0 ">
                <input type="text" v-model="store.search" class="form-control" placeholder="Movie Title..." aria-label="Recipient's username" aria-describedby="button-addon2" @keyup.enter="searchQuery">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchQuery">Search Movie</button>
            </div>
         </div>
    </header>
</template>

<style  lang="scss" scoped >
@use '../styles/partial/variables' as *;


header {
    background-color: black;
    position: fixed;
    top: 0;
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;

    .title {
        color: red;
    }
}
</style>
