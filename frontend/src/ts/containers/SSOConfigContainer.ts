import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import SSOConfigForm from '../components/SSOConfigForm';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';

const SSOConfigContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(SSOConfigForm);

export default SSOConfigContainer;
