import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
,document.getElementById('root'));
// registerServiceWorker();
