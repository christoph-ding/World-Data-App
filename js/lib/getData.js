'use strict';

// fetch the data from the api
const getDataFromAPI = (url, desiredFields, cb) => {
  fetch(url)
  .then((res) => {
    res.json()
   .then((rawData) => {
     const dataWithRelevantFields = getRelevantFields(rawData, desiredFields);
     cb(dataWithRelevantFields);
   });
  });
};

// make a dataset with only the fields that the user cares about
// the user will never need the fields that she did not expicitely
// ask for, so there is no reason to return the 'full' data to the app
// the 'fieldMapping' is a list of the fields desired by the user,
// and how they would like that field to be displayed.
const getRelevantFields = (fullData, fieldMapping) => {
  const formattedData = [];
  const originalFieldNames = Object.keys(fieldMapping);

  // we only want certain fields from the data
  fullData.forEach((row) =>{
    let formattedRow = formRowWithRelevantFields(row);
    formattedData.push(formattedRow);
  });

  return formattedData;

  // helper functions
  function formRowWithRelevantFields(originalRow) {
    const filteredRow = {};

    originalFieldNames.forEach((originalField)=> {
      let newColumnName = fieldMapping[originalField];
      filteredRow[newColumnName] = originalRow[originalField];
    });

    return filteredRow;
  }
};

const groupBy = (dataset, field) => {
  // for accessing the data in a field level quickly
  const groupedData = {};

  for (var row of dataset) {
    // 'level' is a possible value within a field
    var level = row[field];

    // add it to an existing key groupedData, or make new key
    addToGroupedData(row, level);
  }

  return groupedData;

  function addToGroupedData(row, level) {
    var newFieldLevel = !groupedData.hasOwnProperty(level);

    // add row to appropriate field level, capture all possible field levels
    if (newFieldLevel) {
      groupedData[level] = [];
    }

    var rowsWithSameFieldLevel = groupedData[level];
    rowsWithSameFieldLevel.push(row);
  }
};

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
};

module.exports = {
  getDataFromAPI: getDataFromAPI,
  groupBy: groupBy,
  sortBy: sortBy
};
