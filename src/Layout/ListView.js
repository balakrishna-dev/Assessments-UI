import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import '../styles/css/ListView.css';

class ListView extends Component {
	render() {
		const { isLoading, items, error, searchKeyword } = this.props;
		//const gradeHandler = () => {};

		const ROW_HEIGHT = 200;
		const Panel = ({ children }) => {
			return (
				<div className="panel panel-default" style={{ margin: 10 }}>
					<div className="panel-body" style={{ padding: 0 }}>
						{children}
					</div>
				</div>
			);
		};
		const Contact = ({ name, Class }) => {
			return (
				<address style={{ paddingLeft: 50, paddingTop: 30 }}>
					<strong>{name}</strong>
					<br />
					{Class}
				</address>
			);
		};
		const GradeOptions = () => {
			return (
				<div style={{ position: 'absolute', justifyContent: 'center', left: 800, margin: '30px 0px 20px 0px' }}>
					<label className="radio-inline">
						<input type="radio" name="gradeSelection" />
					</label>
					<label className="radio-inline">
						<input type="radio" name="gradeSelection" />
					</label>
					<label className="radio-inline">
						<input type="radio" name="gradeSelection" />
					</label>
					<label className="radio-inline">
						<input type="radio" name="gradeSelection" />
					</label>
				</div>
			);
		};

		const RowRenderer = ({ row, idx }) => {
			return (
				<Panel key={idx}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'nowrap'
						}}
					>
						<img src={row.img} className="pull-left" alt={row.name} height="100" width="100" />
						<Contact {...row} />
						<GradeOptions />
					</div>
				</Panel>
			);
		};

		const columns = [
			{
				key: 'id',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'es',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'ds',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'cap',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'id',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'es',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'ds',
				name: '',
				width: 100,
				hidden: true
			},
			{
				key: 'cap',
				name: '',
				width: 160,
				hidden: true
			},
			{
				key: 'nyi',
				name: 'Not Yet Introduced',
				width: 160
			},
			{
				key: 'es',
				name: 'Emerging Skill',
				width: 150
			},
			{
				key: 'ds',
				name: 'Developing Skill',
				width: 145
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
