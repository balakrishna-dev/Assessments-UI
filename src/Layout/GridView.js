import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import CustomCard from './CustomCard';
import '../styles/css/GridView.css';

class GridView extends Component {
	render() {
		const { isLoading, studentsData, error, searchKeyword } = this.props;
		const GridViewList = () => {
			return (
				<div className="wrapper">
					<div className="grid-box">{SearchedList}</div>
				</div>
			);
		};
		const SearchedList = studentsData
			.filter((item) => {
				if (searchKeyword == null) return item;
				else if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())) return item;
				return null;
			})
			.map((item) => {
				return (
					<CustomCard
						key={item.id}
						title={item.name}
						subTitle={item.Class}
						imgSrc={item.img}
						id={item.id}
						{...this.props}
					/>
				);
			});
		return (
			<div>
				{error && <p>{error}</p>}
				<div className="header">
					<b>
						<h4>{studentsData.length} Students</h4>
					</b>
				</div>

				<div>
					{!isLoading ? (
						<MuiThemeProvider>
							<GridViewList />
						</MuiThemeProvider>
					) : (
						<h3>Loading .....</h3>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	studentsData: state.students.studentsData
});

export default connect(mapStateToProps, null)(GridView);
