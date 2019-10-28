import React from 'react';
import './button.scss';

const Button = ({ className, onClick, value, disabled }) => {
	return (
		<input className={`button ${className}`} type="button" onClick={onClick} value={value} disabled={disabled}/>
	);
}

export default Button;