import React from 'react';
import { Link } from 'react-router-dom';
import Description from './description/description';
import Image from '../../../components/image';
import './row.scss';

const Row = ({ item }) => {
    const { id, picture, ...itemDescription } = item;
    const itemLink = `/items/${id}`;
    
	return (
        <Link to={itemLink}>
            <article className="row">
                <Image src={ picture } className="row__picture" rounded />
                <Description data={ itemDescription } className={"row__description"} />
            </article>
        </Link>
	);
}

export default Row;