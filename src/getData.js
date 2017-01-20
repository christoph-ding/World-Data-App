const worldDataURL = 'https://restcountries.eu/rest/v1/all';

const getDataFromAPI = (url, cb) => {
  fetch(url)
  .then((res) => {
    res.json()
       .then((data) => {
          cb(data);
        })
  })
}

const determineGroupingFields = (row) => {
  // I am assuming that the 'rows' in the dataset all have the same fields
  let possibleCategories = Object.key(row);
  console.log(possibleCategories);
  return possibleCategories;
}

const groupBy = (dataset, field, specialKeyMapping) => {
  // for accessing the data in a field level quickly
  const groupedData = {};

  for (var row of dataset) {    
    // 'level' is a possible value within a field    
    var level = determineLevelLabel(row);

    // add it to an existing key groupedData, or make new key    
    addToGroupedData(row, level);
  } 

  return groupedData;

  // helper functions
  function determineLevelLabel(row) {
    var level = row[field];

    // accomodate translations between levels in the field and how user would like it to output
    // i.e. user may want 'M' in the raw data to be translated to "Male" in the grouped data
    if (specialKeyMapping && specialKeyMapping.hasOwnProperty(level)) {
      level = specialKeyMapping[level];
    }

    return level;
  }

  function addToGroupedData(row, level) {
    var newFieldLevel = !groupedData.hasOwnProperty(level);

    // add row to appropriate field level, capture all possible field levels
    if (newFieldLevel) {
      groupedData[level] = [];
    }

    var rowsWithSameFieldLevel = groupedData[level];
    rowsWithSameFieldLevel.push(row);
  }
}

const sortBy = (dataset, field) => {
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
  getDataFromAPI: getDataFromAPI,
  groupBy: groupBy,
  sortBy: sortBy,
  determineGroupingFields: determineGroupingFields
}
