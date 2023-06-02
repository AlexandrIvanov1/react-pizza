import React from 'react';
import './scss/app.scss';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Cart} from './pages/Cart/Cart';
import {NotFoundPage} from './pages/NotFoundPage';
import {PizzaItem} from './pages/PizzaItem/PizzaItem';
import {Layout} from './pages/Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="pizza/:id" element={<PizzaItem/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;