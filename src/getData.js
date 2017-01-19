console.log('fetching the data');

const worldDataURL = 'https://restcountries.eu/rest/v1/all';

const getDataFromAPI = (url) => {
  fetch(url)
  .then((res) => {
    console.log('got the res');
    res.json()
       .then((data) => {
           console.log(data);       
        })
  })
}

const groupBy = (dataset, category, specialKeyMapping) => {
  // for accessing the data in a category level quickly
  const groupedData = {};

  for (var row of dataset) {    
    // 'level' is a possible value within a category    
    var level = determineLevelLabel(row);

    // add it to an existing key groupedData, or make new key    
    addToGroupedData(row, level);
  } 

  return groupedData;

  // helper functions
  function determineLevelLabel(row) {
    var level = row[category];

    // accomodate translations between levels in the category and how user would like it to output
    // i.e. user may want 'M' in the raw data to be translated to "Male" in the grouped data
    if (specialKeyMapping && specialKeyMapping.hasOwnProperty(level)) {
      var level = specialKeyMapping[level];
    }

    return level;
  }

  function addToGroupedData(row, level) {
    var newCategoryLevel = !groupedData.hasOwnProperty(level);

    // add row to appropriate category level, capture all possible category levels
    if (newCategoryLevel) {
      groupedData[level] = [];
    }

    var rowsWithSameCategoryLevel = groupedData[level];
    rowsWithSameCategoryLevel.push(row);
  }
}

const sortBy = (dataset, category) => {
  dataset.sort(compare);
  return dataset;

  function compare(a, b) {
    var valueA = a[category];
    var valueB = b[category];
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    }
    return 0;
  }
}

module.exports = {
  getDataFromAPI: getDataFromAPI  
}
