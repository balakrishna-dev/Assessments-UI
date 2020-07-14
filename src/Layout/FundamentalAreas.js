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
import { connect } from 'react-redux';
import GridIcon from 'material-ui/svg-icons/editor/border-all';
import DownloadIcon from 'material-ui/svg-icons/action/get-app';
import UploadIcon from 'material-ui/svg-icons/editor/publish';
import GridView from './GridView';
import fetchStudentData from './Redux/StudentsActions';
import ListView from './ListView';
import '../styles/css/FundamentalAreas.css';
import StudentsData from './StudentsData';
import Sample2ListView from './Sample2ListView';

class FundamentalAreas extends Component {
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
			this.state.gridView
				? this.setState({ gridView: false, search: false })
				: this.props.history.push('./Assessments');
		};

		const handleGrid = () => {
			this.setState({ gridView: true, search: false });
		};
		const handleSearch = () => {
			this.setState({ search: true });
		};
		const handleSearchWord = (e, newValue) => {
			this.setState({ searchKeyword: newValue });
		};

		const MorevertIcon = () => (
			<IconMenu
				iconButtonElement={
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				}
				targetOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem primaryText="Grid View" onClick={handleGrid} leftIcon={<GridIcon />} />
				<MenuItem primaryText="Download Excel" leftIcon={<DownloadIcon />} />
				<MenuItem primaryText="Upload Excel" leftIcon={<UploadIcon />} />
			</IconMenu>
		);

		return (
			<div>
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
									<NavigationBack onClick={handleBack} />
								</IconButton>
							}
							iconElementRight={
								<span>
									<span className="right-icons">
										{this.state.search ? (
											<TextField
												type="text"
												className="search-box"
												hintText="Search here..."
												onChange={handleSearchWord}
											/>
										) : (
											<IconButton>
												<ActionSearch onClick={handleSearch} />
											</IconButton>
										)}
										<IconButton>
											<ActionDone />
										</IconButton>
									</span>
									<MorevertIcon />
								</span>
							}
						/>

						{this.state.gridView ? (
							<GridView searchKeyword={this.state.searchKeyword} />
						) : (
							// <ListView searchKeyword={this.state.searchKeyword} />
							<Sample2ListView searchKeyword={this.state.searchKeyword} />
						)}
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	items: state.students.studentsData
});

export default connect(mapStateToProps, { fetchStudentData })(FundamentalAreas);
