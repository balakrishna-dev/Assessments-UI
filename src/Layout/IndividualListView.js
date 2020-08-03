import React, { Component } from 'react';
import ListView from './ListView';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, IconButton } from 'material-ui';
import { NavigationArrowBack } from 'material-ui/svg-icons';
import NavigationNext from 'material-ui/svg-icons/navigation/chevron-right';
import '../styles/css/IndividualListView.css';

class IndividualListView extends Component {
	render() {
		const { students, searchKeyword } = this.props;
		const { isLoading, studentsData, error } = students;
		const handleBack = () => this.props.history.push('/FundamentalAreas');
		return (
			<MuiThemeProvider>
				<div>
					<AppBar
						title={
							<div>
								<div className="fundamental-title">Personal, Social, Emotional Development</div>
								<div className="sub-title">
									Fundamental Areas of Development <NavigationNext className="title-navigation" />
									{this.props.location.label}
								</div>
							</div>
						}
						iconElementLeft={
							<IconButton>
								<NavigationArrowBack onClick={handleBack} />
							</IconButton>
						}
						iconElementRight={
							<span>
								<span className="right-icons">
									{this.state.search ? (
										<TextField
											type="text"
											className="search-box"
											hintText="Search here..."
											onChange={handleSearchWord}
										/>
									) : (
										<IconButton>
											<ActionSearch onClick={handleSearch} />
										</IconButton>
									)}
									<IconButton>
										<ActionDone />
									</IconButton>
								</span>
								<MorevertIcon />
							</span>
						}
					/>
					{error ? <p>{error}</p> : null}
					<div className="header">
						<span className="header-left">{studentsData.length} Students</span>
					</div>
					{!isLoading ? <ListView {...searchKeyword} /> : <h3>Loading...</h3>}
				</div>
			</MuiThemeProvider>
		);
	}
}
const mapStateToProps = (state) => ({
	students: state.students
});

export default connect(mapStateToProps, null)(IndividualListView);
