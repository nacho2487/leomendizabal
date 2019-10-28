import React from 'react';
import './breadcrum.scss';

const Breadcrum = ({ values }) => {
	return (
		<React.Fragment>
			{
				values &&
				<div className="breadcrum">
					<ul>{ values.map((value, index) => values.length-1 > index ? <li key={index} className="breadcrum__item">{value}</li> : <li key={index} className="breadcrum__item breadcrum__item--last">{value}</li>) }</ul>
				</div>
			}
		</React.Fragment>
	);
}

export default Breadcrum;