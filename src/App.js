import React, { Component } from 'react';
import Assessments from './components/Assessments';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<ErrorBoundary>
					<Assessments />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
