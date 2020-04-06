import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import './directorymenu-component.scss';
import MenuItem from '../menu-item/menu-item';

const DirectoryMenu = ({ sections }) => (


    <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) =>
            (<MenuItem key={id} {...otherProps} />))};
        </div>

);
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})


export default connect(mapStateToProps)(DirectoryMenu);