import React from 'react';
import { connect } from 'react-redux';
import './Loading.scss';


function Loading({ isLoading }) {
    return (
        <div>
            <div className={ `${ isLoading ? "" : "hidden " }lds-ellipsis` }>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
});


export default connect(mapStateToProps)(Loading);