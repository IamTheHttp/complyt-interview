// after 10 secs - how many Poll attempt / Data Fetched will be logged?
function myApiCall() {
	return new Promise((resolve) => {
			setTimeout(() => {
					resolve('Data fetched!');
			}, 5000);
	});
}

let counter = 0;

const poll = setInterval(async () => {
	console.log(`Poll attempt ${++counter}`);
	const data = await myApiCall();
	console.log(data);
}, 1000);
