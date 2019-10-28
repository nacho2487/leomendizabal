import React, { useContext } from 'react';
import Header from '../../components/header';
import Breadcrum from '../../components/breadcrum';
import Container from '../../components/container';
import Product from './product';
import { Store } from '../../store/store';
import { getItemDetailAction } from '../../store/actions';

const Detail = ({ match }) => {
    const { state: { categories, itemDetail, isLoading }, dispatch} = useContext(Store);
    const id = match.params.id;
    const hasBeenFetched = id === itemDetail.id;
    
    if (!isLoading && !hasBeenFetched) {
        getItemDetailAction(id, dispatch);
    } 

    return (
        <React.Fragment>
            {
                <div className="detail">
                    <Header />
                    { hasBeenFetched && <Breadcrum values={categories} /> }
                    <Container isLoading={isLoading}>
                        { hasBeenFetched && <Product detail={itemDetail} /> }
                    </Container>
                </div>
            }
        </React.Fragment>
    );
}

export default Detail;
