import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import Card from './Card';
import './gridview.css';

class GridView extends Component {
	render() {
		const { isLoading, items, error } = this.props;
		const GridViewList = () => {
			return (
				<div className="wrapper">
					<GridList cols={5} className="box1" style={{ margin: '0' }}>
						{items.map((item) => (
							<Card key={item.id} title={item.name} subTitle={item.Class} imgSrc={item.img} />
						))}
					</GridList>
				</div>
			);
		};
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
