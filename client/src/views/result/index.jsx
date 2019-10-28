import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header';
import Breadcrum from '../../components/breadcrum';
import Container from '../../components/container';
import Row from './row';
import { Store } from '../../store/store';
import './result.scss';

const Result = () => {
    const { state: { items, isLoading, categories } } = useContext(Store);
    const itemsRows = items.map((item) => <Row item={item} key={item.id}/>);
    
    const renderRedirect = () => {
		return <Redirect to='/' />
    }
    
    return (
        <React.Fragment>
            { !isLoading && itemsRows.length === 0 && renderRedirect() }
            
            <div className="result">
                <Header />
                { !isLoading && <Breadcrum values={categories} /> }
                <Container className="result__container" isLoading={isLoading}>
                    {itemsRows}
                </Container>
            </div>
        </React.Fragment>
	);
}

export default Result;