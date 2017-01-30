"use strict";

// fetch the data from the api
const getDataFromAPI = (url, fieldMap, cb) => {
  fetch(url)
  .then((res) => {
    res.json()
       .then((rawData) => {
          const dataWithRelevantFields = getRelevantFields(rawData, fieldMap);
          cb(dataWithRelevantFields);
        })
  })
}

// make a dataset with only the fields that the user cares about
// as far as I can tell, the user will never need the fields that she did not
// expicitely ask for, so there is no reason to return the 'full' data to the app
const getRelevantFields = (fullData, relevantFields) => {
  const formattedData = [];
  const originalFieldNames = Object.keys(relevantFields);

  // we only want certain fields from the data, with a 
  fullData.forEach((elem) =>{
    let formattedRow = formRowWithRelevantFields(elem);
    formattedData.push(formattedRow);
  });

  return formattedData;

  // helper functions
  function formRowWithRelevantFields(originalRow) {
    const filteredRow = {};

    originalFieldNames.forEach((originalField)=> {
      let newColumnName = relevantFields[originalField];
      filteredRow[newColumnName] = originalRow[originalField];
    });

    return filteredRow;
  }
}

const determineGroupingFields = (row) => {
  let possibleCategories = Object.keys(row);
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
    var valueA = a[field];
    var valueB = b[field];
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
