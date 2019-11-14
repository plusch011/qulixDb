import React from 'react';
import HeaderLayout from "./header/HeaderLayout";
import MainLayout from "./main/MainLayout";
import "./index.css";

export default function App() {
    return (
        <div className="App">
            <HeaderLayout />
            <MainLayout />
        </div>
    );
}
