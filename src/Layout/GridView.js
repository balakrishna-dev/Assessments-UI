import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import CustomCard from './CustomCard';
import '../styles/css/GridView.css';

class GridView extends Component {
	render() {
		const { isLoading, items, error, searchKeyword } = this.props;
		const GridViewList = () => {
			return (
				<div className="wrapper">
					<GridList cols={5} className="box1" cellHeight="auto" padding={0}>
						{SearchedList}
					</GridList>
				</div>
			);
		};
		const SearchedList = items
			.filter((item) => {
				if (searchKeyword == null) return item;
				else if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())) return item;
				return null;
			})
			.map((item) => {
				return (
					<CustomCard
						key={item.id}
						style={{ height: 'auto' }}
						title={item.name}
						subTitle={item.Class}
						imgSrc={item.img}
					/>
				);
			});
		return (
			<div>
				{error && <p>{error}</p>}
				<div className="header">
					<b>
						<h4>{items.length} Students</h4>
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
	items: state.students.items
});

export default connect(mapStateToProps, null)(GridView);
