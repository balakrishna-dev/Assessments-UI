import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import '../styles/css/CustomCard.css';
import MenuItem from 'material-ui/MenuItem/MenuItem';

const StudentCard = (props) => {
	const { imgSrc, title, subTitle, id } = props;
	const handleClick = (e) => {
		props.history.push({ pathname: '/IndividualStudent', id: e.target.id });
	};
	const MorevertIcon = () => (
		<IconMenu
			iconButtonElement={
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			}
			className="icon-menu"
			targetOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
		>
			<MenuItem primaryText="Term 1" />
			<MenuItem primaryText="Term 2" />
		</IconMenu>
	);
	return (
		<Card className="card-container">
			<div className="card-body">
				<CardMedia>
					<img src={imgSrc} alt={title} onClick={handleClick} id={id} />
				</CardMedia>
				<MorevertIcon />
				<CardTitle title={title} subtitle={subTitle} />
			</div>
		</Card>
	);
};

export default StudentCard;
