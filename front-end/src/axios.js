import axios from 'axios'

const mapApi = axios.create({
    baseURL: process.env.REACT_APP_MAP_URL,
    params: {
        key: process.env.REACT_APP_MAPTILER_KEY
    }
});

export { mapApi };
