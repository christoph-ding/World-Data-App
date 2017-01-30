"use strict";
import React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import WorldDataApp from './components/App.js';

const keyMapping = {'': 'not available'}
// const relevantFields = {'name': 'Name', 'alpha2code': 'Code', 'capital': 'Capital', 'region': 'Region', 'subregion': 'Subregion', 'population': 'Population', 'area': 'Area'};
const relevantFields = {'name': 'Country Name', 'region': 'Region'};
const europeDataAPI = 'https://restcountries.eu/rest/v1/all';

render(<WorldDataApp apiEndPoint={europeDataAPI} relevantFields={relevantFields} keyMapping={keyMapping}/>, document.getElementById('root'));
