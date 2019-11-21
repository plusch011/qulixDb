import React from 'react';
import ToolBar from "../toolbar";
import Loading from "../loading";

export default function AppLayout(props) {
    return (
        <>
            { props.children }
            <Loading />
            <ToolBar />
        </>
    );
}
