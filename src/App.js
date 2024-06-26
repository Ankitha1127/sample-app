import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';


function App(){

        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                   <div class="row row-offcanvas row-offcanvas-left">
                        <Sidebar/>
                        <Dashboard/>
                        <Footer/>
             </div>
            </div>  
        </div>  
        );
    }
 
export default App