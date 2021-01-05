import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import App from './MikesRouterEx';
// import App from './TeaseApp';
import App from './TestApp';
import * as serviceWorker from './serviceWorker';

// By Wrapping a BrowserRoute around App creates a History session for the entire Application allowing us to manage a History Session anywhere JavaScript runs. The History api lets one manage the history stack, navigate, confirm navigation, and persist state between sessions. When the current location changes, the view is re-rendered which provides a sense of navigation.

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
