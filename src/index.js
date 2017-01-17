"use strict";
import React from 'react';
import { render } from 'react-dom';
import './styles/main.css'

class WorldDataApp extends React.Component{
	render() {
		return (<h1> Hello World from a React App </h1>);
	}
}

render(<WorldDataApp />, document.getElementById('root'));
