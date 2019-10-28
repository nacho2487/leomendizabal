import React from 'react';
import classNames from 'classnames';
import { useProgressiveImage } from './progressive';
import './image.scss';

const Image = ({ src, fallback, className, alt='', rounded, icon, onClick, button }) => {
    const classes = classNames(
        className,
        "image", {
        "image--rounded": rounded,
        "image--icon": icon
    });
    const source = useProgressiveImage({ src, fallback });
    
    return (
        <React.Fragment>
            {   button && 
                <div onClick={onClick} className={className}>
                    <img className={classes} src={source} alt={alt} />    
                </div>
            }
            {
                !button && 
                <img className={classes} src={source} onClick={onClick} alt={alt} />
            }
        </React.Fragment>
    )
}

export default Image;