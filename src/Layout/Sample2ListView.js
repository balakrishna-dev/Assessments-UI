import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import IconButton from 'material-ui/IconButton';
import '../styles/css/Sample2ListView.css';
import ListView from './ListView';
import MenuButtonSample2 from './MenuButtonSample2';

class Sample2ListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropDownView: true,
			id: 0
		};
	}
	render() {
		const { students, searchKeyword } = this.props;
		const { studentsData, error } = students;
		const handleComponent = (dropDown, id) => {
			console.log(id, 'normal', dropDown);
			this.setState((prevState) => {
				return {
					...prevState,
					dropDownView: !dropDown,
					id: id - 1
				};
			});
		};
		const handleIconButton = (e) => {
			this.setState((prevState) => {
				return {
					...prevState,
					dropDownView: !prevState.dropDownView,
					idx: ''
				};
			});
		};
		var index = 0;
		return (
			<div>
				{error ? <p>{error}</p> : null}
				<div className="header">
					<span className="header-left">{studentsData.length} Students</span>
				</div>
				<div className="body-container">
					{studentsData.map((student) => {
						const { params } = student;
						for (; index < params.length; ) {
							const param = params[index];

							if (this.state.id.toString() === index.toString()) {
								index++;
								return this.state.dropDownView ? (
									<div key={index}>
										<span className="sample2-heading">{param.name}</span>
										<span>
											<IconButton className="icon-buttons">
												<NavigationExpandLessIcon
													className="navigation"
													onClick={handleIconButton}
												/>
											</IconButton>
										</span>
										<ListView searchKeyword={searchKeyword} />
									</div>
								) : (
									<MenuButtonSample2
										label={param.name}
										key={index}
										handleComponent={handleComponent}
										dropdown={this.state.dropDownView}
										id={param.paramId}
									/>
								);
							}
							index++;
							return (
								<MenuButtonSample2
									label={param.name}
									key={index}
									handleComponent={handleComponent}
									dropdown={this.state.dropDownView}
									id={param.paramId}
								/>
							);
						}
						return null;
						// return params.map((param, idx) => {
						// 	console.log(idx);
						// 	return this.state.dropDownView ? (
						// 		<div>
						// 			<span className="sample2-heading">Plays with children</span>
						// 			<span>
						// 				<IconButton className="icon-buttons" onClick={handleComponent} id={idx}>
						// 					<NavigationExpandLessIcon className="navigation" />
						// 				</IconButton>
						// 			</span>
						// 			<ListView {...searchKeyword} />
						// 		</div>
						// 	) : (
						// 		<MenuButtonSample2
						// 			label={param.name}
						// 			handleComponent={handleComponent}
						// 			dropdown={this.state.dropDownView}
						// 		/>
						// 	);
						// });
					})}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	students: state.students
});

export default connect(mapStateToProps, null)(Sample2ListView);
