import React, { Component } from 'react';
import ListView from './ListView';
import { connect } from 'react-redux';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';

class Sample1ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: false
		};
	}

	render() {
		const { students, searchKeyword } = this.props;
		const { isLoading, studentsData, error } = students;
		return (
			<div>
				{error ? <p>{error}</p> : null}
				<div className="header">
					<span className="header-left">{studentsData.length} Students</span>
					{this.state.comment ? (
						<span className="header-right">
							Comments if any
							<IconButton>
								<NavigationExpandMoreIcon className="navigation" />
							</IconButton>
						</span>
					) : (
						<span className="header-right">
							Plays with children
							<IconButton>
								<NavigationExpandMoreIcon className="navigation" />
							</IconButton>
						</span>
					)}
				</div>
				{!isLoading ? <ListView searchKeyword={searchKeyword} /> : <h3>Loading...</h3>}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	students: state.students
});

export default connect(mapStateToProps, null)(Sample1ListView);
