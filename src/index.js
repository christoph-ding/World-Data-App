"use strict";
import React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import WorldDataApp from './components/App.js';

const keyMapping = {'': 'not available'}
const relevantFields = {'name': 'Name', 'alpha2code': 'Code', 'capital:' 'Capital', 'region': 'Region', 'subregion': 'Subregion', 'population': 'Population', 'area': 'Area'}

render(<WorldDataApp keyMapping={keyMapping}/>, document.getElementById('root'));
