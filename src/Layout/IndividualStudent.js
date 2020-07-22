import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import IconButton from 'material-ui/IconButton';
import '../styles/css/PanelIndividual.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { NavigationClose, ActionDone } from 'material-ui/svg-icons';
import { AppBar } from 'material-ui';
import individualGradeUpdate from './Redux/IndividualGradeUpdate.js';

class IndividualStudent1 extends Component {
	render() {
		const { studentsData, location, individualGradeUpdate, history } = this.props;
		const studentId = location.id;
		var parameters, student;
		const handleBack = () => {
			history.push('/FundamentalAreas');
		};
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
			const idx = e.target.id.slice(0, -1);
			individualGradeUpdate(grade, idx, studentId);
		};

		const ROW_HEIGHT = 60;
		const Panel = ({ children }) => {
			return (
				<div className="panel panel-default">
					<div className="panel2-body">{children}</div>
				</div>
			);
		};
		const Details = ({ name }) => {
			return (
				<div className="panel2-details">
					<strong>{name}</strong>
				</div>
			);
		};
		const GradeOptions = (childProps) => {
			const { idx, params } = childProps;
			const { grade } = params[idx];
			//console.log(idx, grade);
			return (
				<div className="panel-radio">
					<div className="inputGroup">
						<input
							type="radio"
							name={idx + 'gradeSelection'}
							value={grade}
							id={idx + '1'}
							onChange={gradeHandler}
							checked={grade === 'Not Yet Introduced'}
						/>
						<label htmlFor={idx + '1'} />
					</div>
					<div className="inputGroup">
						<input
							type="radio"
							name={idx + 'gradeSelection'}
							value={grade}
							id={idx + '2'}
							onChange={gradeHandler}
							checked={grade === 'Emerging Skill'}
						/>
						<label htmlFor={idx + '2'} />
					</div>
					<div className="inputGroup">
						<input
							type="radio"
							name={idx + 'gradeSelection'}
							value={grade}
							id={idx + '3'}
							onChange={gradeHandler}
							checked={grade === 'Developing Skill'}
						/>
						<label htmlFor={idx + '3'}> </label>
					</div>

					<div className="inputGroup">
						<input
							type="radio"
							name={idx + 'gradeSelection'}
							value={grade}
							id={idx + '4'}
							onChange={gradeHandler}
							checked={grade === 'Capable'}
						/>
						<label htmlFor={idx + '4'} />
					</div>
				</div>
			);
		};

		const RowRenderer = ({ row, idx }) => {
			return (
				<Panel key={idx}>
					<Details {...row} />
					<GradeOptions {...student} {...row} idx={idx} />
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

		return (
			<MuiThemeProvider>
				<div className="fundamental-container">
					<AppBar
						title={
							<div>
								<div className="fundamental-title">Personal, Social, Emotional Development</div>
								<div className="sub-title">Fundamental Areas of Development</div>
							</div>
						}
						iconElementLeft={
							<IconButton>
								<NavigationClose onClick={handleBack} />
							</IconButton>
						}
						iconElementRight={
							<IconButton>
								<ActionDone />
							</IconButton>
						}
					/>

					{studentsData.map((students) => {
						const { img, name, Class, id, params } = students;
						if (studentId.toString() === id.toString()) {
							parameters = params;
							student = students;
							return (
								<div key={id} className="student">
									<img src={img} alt={name} className="panel2-image" />
									<strong>{name}</strong>
									{Class}
								</div>
							);
						}
						return '';
					})}

					<ReactDataGrid
						columns={columns}
						rowGetter={(i) => parameters[i]}
						rowsCount={parameters.length}
						minHeight={700}
						rowRenderer={RowRenderer}
						rowHeight={ROW_HEIGHT}
						headerRowHeight={30}
					/>
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state) => ({
	studentsData: state.students.studentsData
});

export default connect(mapStateToProps, { individualGradeUpdate })(IndividualStudent1);
