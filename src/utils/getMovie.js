import Error404 from "../pages/Error404";

const apiKey = '345ea65f15cc51c09f63177fd865ed98';
const apiMovie = 'https://api.themoviedb.org/3/movie/';

const getMovie = async(id) => {
    const apiURL = id ? `${apiMovie}${id}?api_key=${apiKey}&language=es` : Error404;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch (error) {
        console.log('Fetch Error: ', error);

    };
};

export default getMovie;