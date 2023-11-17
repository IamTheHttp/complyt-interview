import data from './movies.json';

export const listAPICall = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 200);
	});
}
