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
        <div class="input-group mb-3 p-5">
            <input type="text" v-model="store.search" class="form-control" placeholder="Movie Title..." aria-label="Recipient's username" aria-describedby="button-addon2" @keyup.enter="searchQuery">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchQuery">Search Movie</button>
        </div>
    </header>
</template>

<style scoped>

</style>
