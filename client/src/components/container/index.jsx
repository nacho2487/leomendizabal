import React from 'react';
import './container.scss';
import Loading from '../loading';

const Container = ({ children, className='', isLoading=false }) => {
	return (
		<React.Fragment>
			{
				<div className={`container ${className}`}>
					{ isLoading ? <Loading visible /> : children }
				</div>
			}
		</React.Fragment>
	);
}

export default Container;