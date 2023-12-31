import React from 'react';
import Footer from '../Page/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;