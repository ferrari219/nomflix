import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: 'af8b05da74929c04bc7b06be136837ba',
		language: 'en-us',
	},
});

// api.get('tv/popular');

export default api;
export const movieApi = {
	nowPlaying: () => api.get('movie/now_playing'),
	upcoming: () => api.get('movie/upcoming'),
	popular: () => api.get('movie/popular'),
	movieDetail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos',
			},
		}),
	search: (term) =>
		api.get('search/movie', {
			params: {
				query: encodeURIComponent(term), //이스케이핑
			},
		}),
};
export const tvApi = {
	topRated: () => api.get('tv/top_rated'),
	popular: () => api.get('tv/popular'),
	airingToday: () => api.get('tv/airing_today'),
	showDetail: (id) =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: 'videos',
			},
		}),
	search: (term) =>
		api.get('search/tv', {
			params: {
				query: encodeURIComponent(term),
			},
		}),
};
