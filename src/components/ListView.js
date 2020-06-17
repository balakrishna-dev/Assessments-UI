import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import './styles.css';

class ListView extends Component {
	render() {
		const { isLoading, items, error } = this.props;
		//const gradeHandler = () => {};
		const ROW_COUNT = items.length;
		const ROW_HEIGHT = 200;
		const Panel = ({ title, children }) => {
			return (
				<div className="panel panel-default" style={{ margin: 0 }}>
					<div className="panel-heading" />
					<div className="panel-body" style={{ padding: 0 }}>
						{children}
					</div>
				</div>
			);
		};
		const Contact = ({ name, Class }) => {
			return (
				<div>
					<div>
						<address style={{ paddingLeft: 50, paddingTop: 30 }}>
							<strong>{name}</strong>
							<br />
							{Class}
						</address>
					</div>
				</div>
			);
		};
		const GradeOptions = () => {
			return (
				<div style={{ marginLeft: 100, marginTop: 30 }}>
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
			const { name, img } = row;
			return (
				<Panel key={idx} title={`${name}`}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'nowrap'
						}}
					>
						<img src={img} className="pull-left" alt={name} height="100" width="100" />
						<Contact {...row} />
						<GradeOptions />
					</div>
				</Panel>
			);
		};
		const columns = [
			{
				key: 'id',
				name: 'ID'
			},
			{
				key: 'firstName',
				name: 'First Name'
			},
			{
				key: 'lastName',
				name: 'Last Name'
			},
			{
				key: 'jobTitle',
				name: 'Job Title'
			}
		].map((c) => ({ ...c, ...defaultColumnProperties }));
		const defaultColumnProperties = {
			width: 160
		};
		return (
			<div>
				{error ? <p>{error}</p> : null}
				<div className="count">
					<h4>{items.length} Students</h4>
				</div>
				{!isLoading ? (
					<div className="main">
						<ReactDataGrid
							columns={columns}
							rowGetter={(i) => items[i]}
							rowsCount={ROW_COUNT}
							minHeight={700}
							rowRenderer={RowRenderer}
							rowHeight={ROW_HEIGHT}
							headerRowHeight={30}
						/>
					</div>
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
