import data from './movies.json';

export const pagedAPICall = (page = 0, search = '', limit = 10) => {
	return new Promise((resolve) => {

		const PAGE_SIZE = limit;

		setTimeout(() => {
			// get the movies that match the search (plot, title, author)
			// and get the page (10 items per page)

			const movies = !search ? data.movies : data.movies.filter((movie) => {
				return movie.plot.includes(search) || movie.title.includes(search) || movie.actors.includes(search);
			});

			const filteredMovies = movies.slice(page * PAGE_SIZE, (page +1) * PAGE_SIZE);

			resolve({
				movies: filteredMovies,
				genres: data.genres,
				totalItems: data.movies.length,
			});
		}, 200);
	});
}
