'use strict';
import React from 'react';
import { render } from 'react-dom';
import './styles/main.css';
import WorldDataApp from './components/App.js';
import * as options from './appOptions';

render(<WorldDataApp apiEndPoint={options.europeDataAPI}
        relevantFields={options.relevantFields} 
        levelValueMapping={options.levelValueMapping}
        defaults={options.defaults}/>, 
        document.getElementById('root'));
