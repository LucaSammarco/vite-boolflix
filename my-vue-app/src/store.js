import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    movie: [],
    search: '',
    series: [],

    // getMovie() {
    //     axios.get('https://api.themoviedb.org/3/search/movie?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=ritorno+al+futuro')
    //         .then((response) => {
    //             console.log(response.data);
    //             this.movie = response.data;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },

    searchMovie() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=' + this.search)
            .then((response) => {
                console.log(response.data);
                this.movie = response.data;
                this.search = '';
            })
            .catch((error) => {
                console.log(error);
            });
    },

    searchSeries() {
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=3fbc7aaa434f8e78f2cdba0457ea9346&query=' + this.search)
            .then((response) => {
                console.log(response.data);
                this.series = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    searchQuery() {
        this.searchMovie();
        this.searchSeries();
    }
});
