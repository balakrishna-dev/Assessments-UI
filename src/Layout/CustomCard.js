import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import '../styles/css/CustomCard.css';
import MenuItem from 'material-ui/MenuItem/MenuItem';

const StudentCard = (props) => {
	const { imgSrc, title, subTitle } = props;
	const MorevertIcon = () => (
		<IconMenu
			iconButtonElement={
				<IconButton>
					<MoreVertIcon color="white" />
				</IconButton>
			}
			className="icon-menu"
			style={{
				position: 'absolute'
			}}
			targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
		>
			<MenuItem primaryText="Term 1" />
			<MenuItem primaryText="Term 2" />
		</IconMenu>
	);
	return (
		<Card className="card-container">
			<div style={{ paddingBottom: 0, position: 'relative' }}>
				<CardMedia style={{ padding: 0, margin: 0 }}>
					<img src={imgSrc} alt={title} height="200" width="100" />
				</CardMedia>
				<MorevertIcon />

				<CardTitle title={title} subtitle={subTitle} style={{ paddingLeft: 10, paddingTop: 5 }} />
			</div>
		</Card>
	);
};

export default StudentCard;
