import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import './card.css';

const StudentCard = (props) => {
	const { imgSrc, title, subTitle } = props;
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
			<MenuItem primaryText="Grid View" />
			<MenuItem primaryText="Download Excel" />
			<MenuItem primaryText="Upload Excel" />
		</IconMenu>
	);
	return (
		<Card className="cardStyles">
			<CardMedia id="h" overlay={<MorevertIcon />} overlayContainerStyle={{ width: '50', height: '30' }}>
				<img src={imgSrc} alt={title} height="220" width="150" />
			</CardMedia>
			<CardTitle title={title} subtitle={subTitle} style={{ paddingLeft: '10', paddingTop: '5' }} />
		</Card>
	);
};

export default StudentCard;
