console.log('fetching the data');

const worldDataURL = 'https://restcountries.eu/rest/v1/all';

const getDataFromAPI = (url) => {
	fetch(url)
	.then((res) => {
		console.log('got the res');
		res.json()
			 .then((data) => {
			 		console.log(data);
			 		groupBy(data, 'region');			 		
				})
	})
}

const groupBy = (data, key) => {
	const groupedData = {};

	for (var datum of data) {
		var keyValue = datum[key];
		var newGroupValue = !groupedData.hasOwnProperty(keyValue);

		// add datum to appropriate group level
		// all levels in the data are captured
		if (newGroupValue) {
			groupedData[keyValue] = [];
		} 
		var grouping = groupedData[keyValue];
		grouping.push(datum);
	}

	console.log(groupedData);
}

getDataFromAPI(worldDataURL);
