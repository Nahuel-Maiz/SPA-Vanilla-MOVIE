const apiKey = '345ea65f15cc51c09f63177fd865ed98';
const apiTrending = 'https://api.themoviedb.org/3/trending/movie/week';

const getTrending = async() => {
    const apiURL = `${apiTrending}?api_key=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch (error) {
        console.log('Fetch Error: ', error);

    };
};

export default getTrending;