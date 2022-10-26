import axios from 'axios';

const tmdbSeries = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "7a8f11d3301e6e5e2bcbd717ee84f933",
    },
});

export default tmdbSeries;