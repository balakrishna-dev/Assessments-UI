import React, { Component } from 'react';
import Assessments from './Layout/Assessments';
import ErrorBoundary from './Utils/ErrorBoundary';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Utils/ErrorBoundary';
import './styles/css/App.css';
import FundamentalAreas from './Layout/FundamentalAreas';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<ErrorBoundary>
						<div>
							<Switch>
								<Route exact path="/" component={Assessments} />
								<Route exact path="/Assessments" component={Assessments} />
								<Route exact path="/FundamentalAreas" component={FundamentalAreas} />
								<Route path="/*" component={NotFound} />
							</Switch>
						</div>
					</ErrorBoundary>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
