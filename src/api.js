const url = 'https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search?SearchQuery=java';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '906daa7dfbmsh866b26b3abd48e4p1e469fjsna1cc01584116',
		'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}