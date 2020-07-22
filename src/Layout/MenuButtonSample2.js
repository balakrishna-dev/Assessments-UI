import React from 'react';
import { ToolbarSeparator, RaisedButton } from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import '../styles/css/Sample2ListView.css';

function MenuButtonSample2({ label, dropdown, handleComponent, id }) {
	const handleClick = () => {
		handleComponent(dropdown, id);
	};
	return (
		<div>
			<RaisedButton
				className="menu-button"
				label={label}
				onClick={handleClick}
				icon={<NavigationExpandMoreIcon className="navigation-expand" />}
			/>
			<ToolbarSeparator className="menu-toolbar-separator" />
		</div>
	);
}

export default MenuButtonSample2;
