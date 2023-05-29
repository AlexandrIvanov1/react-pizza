import React, {useState} from 'react';
import './scss/app.scss';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Cart} from './pages/Cart';
import {NotFoundPage} from './pages/NotFoundPage';

function App() {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home searchValue={searchValue}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;