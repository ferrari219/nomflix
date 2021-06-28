import axios from 'axios';

const Api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: 'af8b05da74929c04bc7b06be136837ba',
		language: 'en-us',
	},
});

// Api.get('tv/popular');
// export default Api;

export const movieApi = {
	nowPlaying: () => Api.get('movie/now_playing'),
	upcoming: () => Api.get('movie/upcoming'),
	popular: () => Api.get('movie/popular'),
};
export const tvApi = {
	topRated: () => Api.get('tv/top_rated'),
	popular: () => Api.get('tv/popular'),
	airingToday: () => Api.get('tv/airing_today'),
};
