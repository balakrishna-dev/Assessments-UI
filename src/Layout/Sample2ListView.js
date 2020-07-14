import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/css/Sample2ListView.css';
import ListView from './ListView';

class Sample2ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropDownView: false
		};
	}
	render() {
		const { students, searchKeyword } = this.props;
		const { isLoading, studentsData, error } = students;
		const handleComponent = () => {
			this.setState((prevState) => {
				return {
					...prevState,
					dropDownView: !prevState.dropDownView
				};
			});
		};
		return (
			<div>
				{error ? <p>{error}</p> : null}
				<div className="header">
					<h5>{studentsData.length} Students</h5>
				</div>
				{!isLoading ? (
					<div className="body-container">
						{this.state.dropDownView ? (
							<div>
								<span className="sample2-heading">Plays with children</span>
								<span>
									<IconButton className="icon-buttons" onClick={handleComponent}>
										<NavigationExpandMoreIcon className="navigation" />
									</IconButton>
								</span>
								<ListView {...searchKeyword} />
							</div>
						) : (
							<RaisedButton
								className="menu-buttons"
								label="Plays with children"
								onClick={handleComponent}
								icon={<NavigationExpandMoreIcon className="navigation" />}
							/>
						)}
					</div>
				) : (
					<h4>Loading....</h4>
				)}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	students: state.students
});

export default connect(mapStateToProps, null)(Sample2ListView);
