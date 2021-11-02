import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/global.css';
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">{children}</div>
            <footer className="footer text-center p-4 bg-black text-white">
                <p className="text-white">Copyright &copy; joyonto 2021</p>
            </footer>
        </div>
    );
};

export default Layout;
