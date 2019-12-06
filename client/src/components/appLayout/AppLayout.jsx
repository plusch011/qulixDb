import React from 'react';
import { connect } from 'react-redux';
import ToolBar from "../toolbar";
import Loading from "../loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function AppLayout(props) {

    const { children, error } = props;

    return (
        <>
            { children }
            <Loading />
            { error && <ErrorMessage error={ error }/> }
            <ToolBar />
        </>
    );
}

const mapStateToProps = (state) => ({
    error: state.error
});

export default connect(mapStateToProps)(AppLayout);


