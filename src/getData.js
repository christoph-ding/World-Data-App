console.log('fetching the data');

var APIEndpoint = 'https://restcountries.eu/rest/v1/all';

fetch(APIEndpoint)
.then((res) => {
	console.log('got the res');
	res.json()
		 .then((data) => {
		 		console.log(data);
			})
})
