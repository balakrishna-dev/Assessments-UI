import React from 'react';
import '../styles/css/Sample3ListView.css';
import MenuItemButtonSample3 from './MenuItemButtonSample3';
import { connect } from 'react-redux';

function Sample3ListView(props) {
	const { studentsData } = props;
	var index = 0;
	return (
		<div className="body-container">
			<div className="menu-container">
				{studentsData.map((student) => {
					for (; index < student.params.length; ) {
						const param = student.params[index];
						index++;
						return <MenuItemButtonSample3 {...props} label={param.name} key={student.id} />;
					}
					return null;
				})}
			</div>
		</div>
	);
}
const mapStateToProps = (state) => ({
	studentsData: state.students.studentsData
});
export default connect(mapStateToProps, null)(Sample3ListView);
