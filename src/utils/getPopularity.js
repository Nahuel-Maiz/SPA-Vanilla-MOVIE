const apiKey = '345ea65f15cc51c09f63177fd865ed98';
const apiPopularity = 'https://api.themoviedb.org/3/discover/movie';

const getPopularity = async() => {
    const apiURL = `${apiPopularity}?api_key=${apiKey}&sort_by=vote_count.desc`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch (error) {
        console.log('Fetch Error: ', error);

    };
};

export default getPopularity;