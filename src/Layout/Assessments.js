import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import '../styles/css/Assessments.css';
import MenuItemButton from './MenuItemButton';

class Assessments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			termValue: 'Select',
			programValue: 'Nursery'
		};
	}

	render() {
		const handleProgramChange = (prevState, value) => this.setState({ ...prevState, programValue: value });

		const handleTermChange = (prevState, value) => this.setState({ ...prevState, termValue: value });

		const handleBack = () => this.props.history.push('/');

		return (
			<div>
				<MuiThemeProvider>
					<div>
						<AppBar
							titleStyle={{ lineHeight: 'normal' }}
							title={
								<div style={{ marginTop: 18, fontWeight: 500 }}>
									<Link to="/Assessments" style={{ textDecoration: 'none', color: 'white' }}>
										Assessments
									</Link>
								</div>
							}
							iconElementLeft={
								<IconButton>
									<NavigationBack onClick={handleBack} />
								</IconButton>
							}
						/>
						<div className="body-container">
							<Toolbar style={{ background: 'white', padding: 0 }}>
								<ToolbarGroup style={{ flex: 1 }}>
									<div style={{ marginLeft: '7%', lineHeight: 1 }}>
										<h6 className="small">PROGRAM</h6>
										<h4>{this.state.programValue}</h4>
									</div>
									<div>
										<IconMenu
											iconButtonElement={
												<IconButton>
													<NavigationExpandMoreIcon />
												</IconButton>
											}
											onChange={handleProgramChange}
											targetOrigin={{ horizontal: 'right', vertical: 'top' }}
											anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
										>
											<MenuItem value="Nursery" primaryText="Nursery" />
											<MenuItem value="First" primaryText="First" />
										</IconMenu>
									</div>
								</ToolbarGroup>
								<ToolbarSeparator style={{ margin: 0, height: 'auto' }} />
								<ToolbarGroup style={{ flex: 1 }}>
									<div style={{ marginLeft: '7%', lineHeight: 1 }}>
										<h6 className="small">TERM</h6>
										<h4>{this.state.termValue}</h4>
									</div>
									<div>
										<IconMenu
											iconButtonElement={
												<IconButton>
													<NavigationExpandMoreIcon />
												</IconButton>
											}
											onChange={handleTermChange}
											targetOrigin={{ horizontal: 'right', vertical: 'top' }}
											anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
										>
											<MenuItem value="Term 1" primaryText="Term 1" />
											<MenuItem value="Term 2" primaryText="Term 2" />
										</IconMenu>
									</div>
								</ToolbarGroup>
							</Toolbar>
							{this.state.termValue === 'Term 1' && this.state.programValue === 'Nursery' ? (
								<div className="menu-container">
									<h4>
										<b>Fundamental Areas of development</b>
									</h4>
									<MenuItemButton
										{...this.props}
										label="Personal, Social, Emotional Areas of Development"
										componentName="FundamentalAreas"
									/>
									<h4>
										<b> Physical Development </b>
									</h4>
									<MenuItemButton
										{...this.props}
										label="Moving and Handling"
										componentName="MovingAndHandling"
									/>
									<ToolbarSeparator style={{ height: 1 }} />
									<MenuItemButton
										{...this.props}
										label="Health & Self Care"
										componentName="HealthAndSelfCare"
									/>
									<h4>
										<b> Cognition, Language and Literacy </b>
									</h4>
									<MenuItemButton
										{...this.props}
										label="Language Arts"
										componentName="LanguageArts"
									/>
									<ToolbarSeparator style={{ height: 1 }} />

									<MenuItemButton {...this.props} label="Writing" componentName="Writing" />

									<ToolbarSeparator style={{ height: 1 }} />

									<MenuItemButton {...this.props} label="Reading" componentName="Reading" />
									<ToolbarSeparator style={{ height: 1 }} />
									<MenuItemButton {...this.props} label="Mathematics" componentName="Mathematics" />
									<ToolbarSeparator style={{ height: 1 }} />
									<MenuItemButton
										{...this.props}
										label="Understanding the World"
										componentName="UnderstandWorld"
									/>

									<h4>
										<b> Creative and Imagination </b>
									</h4>

									<MenuItemButton
										{...this.props}
										label="Creative and Imagination"
										componentName="CreativeAndImagination"
									/>
								</div>
							) : (
								<div className="empty-container">
									<h1>Please select Program & Term </h1>
								</div>
							)}
						</div>
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default Assessments;
