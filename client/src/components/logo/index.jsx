import React from 'react';
import Image from '../image';
import './logo.scss';

const Logo = ({ className, link, src, fallback }) => {
	return (
		<a href={link}>
			<Image className={`logo ${className}`} src={src} fallback={fallback} />
		</a>
	);
}

export default Logo;