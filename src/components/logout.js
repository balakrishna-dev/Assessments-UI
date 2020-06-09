import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = (theme) => ({
	text: {
		paddingTop: theme.spacing.unit * 2,
		paddingLeft: theme.spacing.unit * 2,
		paddingRight: theme.spacing.unit * 2
	},
	subHeader: {
		backgroundColor: theme.palette.background.paper
	},
	appBar: {
		top: 'auto',
		bottom: 0
	},
	toolbar: {
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});

function BottomAppBar(props) {
	const { classes } = props;
	return (
		<Fragment>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<div>
						<IconButton color="inherit">
							<SearchIcon />
						</IconButton>
						<IconButton color="inherit">
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
}

BottomAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
