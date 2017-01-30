"use strict";
import React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import WorldDataApp from './components/App.js';

const keyMapping = {'': 'not available'}
const relevantFields = {'name': 'Country Name', 'alpha2Code': 'Code', 'capital': 'Capital', 'region': 'Region', 'subregion': 'Subregion', 'population': 'Population', 'area': 'Area'};
const europeDataAPI = 'https://restcountries.eu/rest/v1/all';
const defaults = {'grouping': 'Region', 'sorting': 'Population'};

render(<WorldDataApp apiEndPoint={europeDataAPI} relevantFields={relevantFields} keyMapping={keyMapping} defaults={defaults}/>, document.getElementById('root'));
