import React, { Component } from 'react';
import Assessments from './Layout/Assessments';
import ErrorBoundary from './ErrorBoundary';
import './styles/css/App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<ErrorBoundary>
					<Assessments />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
