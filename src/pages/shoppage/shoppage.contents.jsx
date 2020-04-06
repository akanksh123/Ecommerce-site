import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.componenet';
import CollectionPage from '../collection/collection.component';
import './shoppage.contents.jsx';
const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
)




export default ShopPage;