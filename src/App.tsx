import {
	useLocation,
	useRoutes
} from 'react-router-dom';
import getRoutesConfig from './routes';
import React from 'react';

export default function App() {
	const location = useLocation()
	const element  = useRoutes(getRoutesConfig())

	if (!element) {
		return null;
	}

	return (
		<div className="App">
			{React.cloneElement(element, {
				key: location.pathname
			})}
		</div>
	)
}
