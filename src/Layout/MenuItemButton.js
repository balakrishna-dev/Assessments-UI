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
				icon={<NavigationNext className="navigation-buttton" />}
			/>
		</div>
	);
};

export default MenuItemButton;
