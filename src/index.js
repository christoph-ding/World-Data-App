"use strict";
import React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import WorldDataApp from './components/App.js';

const keyMapping = {'': 'not available'}
// const relevantFields = [{original: , translation:}];

render(<WorldDataApp keyMapping={keyMapping}/>, document.getElementById('root'));
