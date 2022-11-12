import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/SharedPage/Footer/Footer';
import Header from '../Page/SharedPage/Header/Header';

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