import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionSearch from 'material-ui/svg-icons/action/search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import '../App.css';
import { connect } from 'react-redux';
import GridView from './GridView';
import fetchStudentData from './Redux/StudentsActions';
import ListView from './ListView';
import StudentsData from './StudentsData';

class Assessments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridView: false,
			search: false,
			searchKeyword: ''
		};
	}
	componentWillMount() {
		this.props.fetchStudentData(StudentsData);
	}

	render() {
		const handleBack = () => {
			this.setState({ gridView: false, search: false });
		};

		const handleGrid = () => {
			this.setState({ gridView: true, search: false });
		};
		const handleSearch = () => {
			this.setState({ search: true });
		};
		const handleSearchWord = (e) => {
			this.setState({ searchKeyword: e.target.value });
		};
		const MorevertIcon = () => (
			<IconMenu
				iconButtonElement={
					<IconButton>
						<MoreVertIcon color="white" />
					</IconButton>
				}
				targetOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem primaryText="Grid View" onClick={handleGrid} />
				<MenuItem primaryText="Download Excel" />
				<MenuItem primaryText="Upload Excel" />
			</IconMenu>
		);

		return (
			<div>
				<MuiThemeProvider>
					<AppBar
						titleStyle={{ lineHeight: 'normal' }}
						title={
							<div>
								<div style={{ marginTop: 10, fontWeight: 500 }}>
									Personal, Social, Emotional Development
								</div>
								<div style={{ fontSize: 'small', fontWeight: 500 }}>
									Fundamental Areas of Development
								</div>
							</div>
						}
						iconElementLeft={
							<IconButton>
								<NavigationBack onClick={handleBack} />
							</IconButton>
						}
						iconElementRight={
							<div>
								{this.state.search ? (
									<TextField
										type="text"
										hintText="Search here..."
										// style={{
										// 	backgroundColor: 'white'
										// }}
										onChange={handleSearchWord}
									/>
								) : (
									<IconButton style={{ paddingRight: 70 }}>
										<ActionSearch color="white" onClick={handleSearch} />
									</IconButton>
								)}
								<IconButton style={{ paddingRight: 70 }}>
									<ActionDone color="white" />
								</IconButton>
								<MorevertIcon />
							</div>
						}
					/>
				</MuiThemeProvider>
				{this.state.gridView ? (
					<GridView searchKeyword={this.state.searchKeyword} />
				) : (
					<ListView searchKeyword={this.state.searchKeyword} />
				)}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	items: state.students.items
});

export default connect(mapStateToProps, { fetchStudentData })(Assessments);
