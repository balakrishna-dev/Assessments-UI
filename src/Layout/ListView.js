import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import updateGrade from './Redux/UpdateGradeAction.js';
import '../styles/css/ListView.css';
import { MuiThemeProvider } from 'material-ui/styles';

class ListView extends Component {
	render() {
		const { students, searchKeyword } = this.props;
		const { isLoading, studentsData, error } = students;
		const findGrade = (e) => {
			switch (e.target.id.slice(-1)) {
				case '1':
					return 'Not Yet Introduced';
				case '2':
					return 'Emerging Skill';
				case '3':
					return 'Developing Skill';
				case '4':
					return 'Capable';
				default:
					return '';
			}
		};
		const gradeHandler = (e) => {
			const grade = findGrade(e);
			const id = e.target.id.slice(0, -1);
			this.props.updateGrade(grade, id);
		};

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
		const GradeOptions = ({ id, grade }) => {
			return (
				<div className="panel-radio">
					<div className="inputGroup">
						<input
							type="radio"
							name={id + 'gradeSelection'}
							value={grade}
							id={id + '1'}
							onChange={gradeHandler}
							checked={grade === 'Not Yet Introduced'}
						/>
						<label htmlFor={id + '1'} />
					</div>
					<div className="inputGroup">
						<input
							type="radio"
							name={id + 'gradeSelection'}
							value={grade}
							id={id + '2'}
							onChange={gradeHandler}
							checked={grade === 'Emerging Skill'}
						/>
						<label htmlFor={id + '2'} />
					</div>
					<div className="inputGroup">
						<input
							type="radio"
							name={id + 'gradeSelection'}
							value={grade}
							id={id + '3'}
							onChange={gradeHandler}
							checked={grade === 'Developing Skill'}
						/>
						<label htmlFor={id + '3'}> </label>
					</div>

					<div className="inputGroup">
						<input
							type="radio"
							name={id + 'gradeSelection'}
							value={grade}
							id={id + '4'}
							onChange={gradeHandler}
							checked={grade === 'Capable'}
						/>
						<label htmlFor={id + '4'} />
					</div>
				</div>
			);
		};
		const MorevertIcon = () => {
			return (
				<div>
					<IconMenu
						iconButtonElement={
							<IconButton>
								<MoreVertIcon className="morevert-icon" />
							</IconButton>
						}
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
					<GradeOptions {...row} />
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
		const SearchedList = studentsData.filter((item) => {
			if (searchKeyword == null) return item;
			else if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())) return item;
			return null;
		});
		const ROW_COUNT = SearchedList.length;
		return (
			<div>
				{error ? <p>{error}</p> : null}
				{!isLoading ? (
					<div>
						<MuiThemeProvider>
							<ReactDataGrid
								columns={columns}
								rowGetter={(i) => SearchedList[i]}
								rowsCount={ROW_COUNT}
								minHeight={700}
								rowRenderer={RowRenderer}
								rowHeight={ROW_HEIGHT}
								headerRowHeight={30}
							/>
						</MuiThemeProvider>
					</div>
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	students: state.students
});

export default connect(mapStateToProps, { updateGrade })(ListView);
