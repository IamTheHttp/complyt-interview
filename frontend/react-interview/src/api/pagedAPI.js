import data from './movies.json';

export const pagedAPICall = (page = 0, search = '', limit = 100) => {
	return new Promise((resolve) => {

		const PAGE_SIZE = limit;

		setTimeout(() => {
			// get the movies that match the search (plot, title, author)
			// and get the page (10 items per page)

			const movies = !search ? data.movies : data.movies.filter((movie) => {
				return movie.plot.toLowerCase().includes(search.trim()) || movie.title.toLowerCase().includes(search.trim()) || movie.actors.toLowerCase().includes(search.trim());
			});

			const filteredMovies = movies.slice(page * PAGE_SIZE, (page +1) * PAGE_SIZE);

			resolve({
				movies: filteredMovies,
				genres: data.genres,
				count: {
					moviesThatMatchFilter: movies.length,
					totalMovies: data.movies.length
				}
			});
		}, 200);
	});
}
