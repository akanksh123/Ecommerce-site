import React from 'react';
import './preview-collection.components.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview-items">
            {items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />))}
        </div>
    </div>
);

export default CollectionPreview;