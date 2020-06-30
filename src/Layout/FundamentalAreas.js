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
		const styles = {
			underlineStyle: {
				borderColor: 'white'
			},
			textStyle: {
				color: 'white'
			}
		};
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
						<MoreVertIcon color="white" />
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
					<div>
						<AppBar
							titleStyle={{ lineHeight: 'normal' }}
							title={
								<div>
									<div className="title">Personal, Social, Emotional Development</div>
									<div className="sub-title">Fundamental Areas of Development</div>
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
											style={{ width: 200, height: 35, marginRight: 10 }}
											// className="search-box"
											hintText="Search here..."
											hintStyle={styles.textStyle}
											underlineFocusStyle={styles.underlineStyle}
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

						{this.state.gridView ? (
							<GridView searchKeyword={this.state.searchKeyword} />
						) : (
							<ListView searchKeyword={this.state.searchKeyword} />
						)}
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	items: state.students.items
});

export default connect(mapStateToProps, { fetchStudentData })(FundamentalAreas);
