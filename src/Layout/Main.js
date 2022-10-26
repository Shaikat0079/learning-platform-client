import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='m-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;