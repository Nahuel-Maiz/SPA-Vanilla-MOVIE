const apiKey = '345ea65f15cc51c09f63177fd865ed98';
const apiCast = 'https://api.themoviedb.org/3/movie/';

const getCast = async(id) => {
    const apiURL = `${apiCast}${id}/credits?api_key=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch (error) {
        console.log('Fetch Error: ', error);

    };
};

export default getCast;