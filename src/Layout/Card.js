import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
//import MenuItem from 'material-ui/MenuItem';
import '../styles/css/Card.css';

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
		/>
	);
	return (
		<Card className="cardStyles">
			<div style={{ paddingBottom: 0 }}>
				<CardMedia
					id="h"
					// overlay={<MorevertIcon />}
					overlayStyle={{}}
					overlayContainerStyle={{ height: 5, width: 50, padding: 0, margin: 0 }}
				>
					<img src={imgSrc} alt={title} height="220" width="150" />
				</CardMedia>
				<CardTitle title={title} subtitle={subTitle} style={{ paddingLeft: 10, paddingTop: 5 }} />
			</div>
		</Card>
	);
};

export default StudentCard;
