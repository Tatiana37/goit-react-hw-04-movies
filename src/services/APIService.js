import axios from 'axios';

const MY_API_KEY = 'db265e0bcc2f9135f9de26b3c571f51f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
    try {
        const {
            data: { results },
        } = await axios.get(`trending/movie/day?api_key=${MY_API_KEY}&`);
        return results;
    } catch (err) {
        console.log(err.message)
    }
};


export const getSearchMovies = async query => {
    try {
        const {
            data: { results },
        } = await axios.get(`search/movie/?api_key=${MY_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
        return results;
    } catch (err) {
        console.log(err.message);
    }
};

export const getMovieById = async movieId => {
    try {
        const response = await axios.get(`/movie/${movieId}?api_key=${MY_API_KEY}&language=en-US`);
        return response.data;

    } catch (err) {
        console.log(err.message);
    }
};

export const getMovieReviews = async movieId => {
    try {
        const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${MY_API_KEY}&language=en-US`);
        return data.results;
    } catch (err) {
        console.log(err.message);
    }
};

export const getCastByMovie = async movieId => {
    try {
        const results = await axios.get(`movie/${movieId}/credits?api_key=${MY_API_KEY}&language=en-US`);
        return results.data.cast;
    } catch (err) {
        console.log(err.message);
    }
};

export const posterUrl = 'https://image.tmdb.org/t/p/w500';
export const profileUrl = 'http://image.tmdb.org/t/p/w185';
export const castUrl = 'https://image.tmdb.org/t/p/w92';
