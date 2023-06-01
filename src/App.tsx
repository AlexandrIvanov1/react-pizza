import React from 'react';
import './scss/app.scss';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Cart} from './pages/Cart/Cart';
import {NotFoundPage} from './pages/NotFoundPage';

function App() {
    return (
        <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
        </div>
    );
}

export default App;