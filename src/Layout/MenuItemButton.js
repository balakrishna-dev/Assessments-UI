import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationNext from 'material-ui/svg-icons/navigation/chevron-right';
import '../styles/css/Assessments.css';

const MenuItemButton = (props) => {
	const handleComponent = () => props.history.push(`/${props.componentName}`);

	return (
		<div>
			<RaisedButton
				className="menu-buttons"
				label={props.label}
				onClick={handleComponent}
				buttonStyle={{
					height: 50,
					textAlign: 'start'
				}}
				labelStyle={{
					fontSize: 15,
					textTransform: 'none'
				}}
				icon={<NavigationNext style={{ float: 'right', marginTop: 4 }} />}
			/>
		</div>
	);
};

export default MenuItemButton;
