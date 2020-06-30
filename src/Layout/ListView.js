import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import '../styles/css/ListView.css';

class ListView extends Component {
	render() {
		const { isLoading, items, error, searchKeyword } = this.props;
		//const gradeHandler = () => {};

		const ROW_HEIGHT = 200;
		const Panel = ({ children }) => {
			return (
				<div className="panel panel-default">
					<div className="panel-body">{children}</div>
				</div>
			);
		};
		const Details = ({ name, Class }) => {
			return (
				<div className="panel-details">
					<strong>{name}</strong>
					<br />
					{Class}
				</div>
			);
		};
		const GradeOptions = () => {
			return (
				<div className="panel-radio">
					<label>
						<input type="radio" name="gradeSelection" />
					</label>
					<label>
						<input type="radio" name="gradeSelection" />
					</label>
					<label>
						<input type="radio" name="gradeSelection" />
					</label>
					<label>
						<input type="radio" name="gradeSelection" />
					</label>
				</div>
			);
		};
		const MorevertIcon = () => {
			return (
				<div>
					<IconMenu
						iconButtonElement={
							<IconButton>
								<MoreVertIcon color="white" className="morevert-icon" />
							</IconButton>
						}
						style={{ position: 'absolute' }}
						className="list-icon-menu"
						targetOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
					>
						<MenuItem primaryText="Term 1" />
						<MenuItem primaryText="Term 2" />
					</IconMenu>
				</div>
			);
		};
		const RowRenderer = ({ row, idx }) => {
			return (
				<Panel key={idx}>
					<div className="img-container">
						<img src={row.img} alt={row.name} className="panel-image" />
						<MorevertIcon />
					</div>
					<Details {...row} />
					<GradeOptions />
				</Panel>
			);
		};

		const columns = [
			{
				key: 'nyi',
				name: 'Not Yet Introduced',
				width: 140
			},
			{
				key: 'es',
				name: 'Emerging Skill',
				width: 140
			},
			{
				key: 'ds',
				name: 'Developing Skill',
				width: 140
			},
			{
				key: 'cap',
				name: 'Capable',
				width: 140
			}
		].map((c) => ({ ...c }));

		const SearchedList = items.filter((item) => {
			if (searchKeyword == null) return item;
			else if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())) return item;
			return null;
		});

		const ROW_COUNT = SearchedList.length;
		return (
			<div>
				{error ? <p>{error}</p> : null}
				<div className="count">
					<h4>{items.length} Students</h4>
				</div>
				{!isLoading ? (
					<ReactDataGrid
						columns={columns}
						rowGetter={(i) => SearchedList[i]}
						rowsCount={ROW_COUNT}
						minWidth={'100%'}
						minHeight={700}
						rowRenderer={RowRenderer}
						rowHeight={ROW_HEIGHT}
						headerRowHeight={30}
					/>
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	items: state.students.items
});

export default connect(mapStateToProps, null)(ListView);
