import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/preview-collection.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...collectionprops }) => (
            <CollectionPreview key={id} {...collectionprops} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);

