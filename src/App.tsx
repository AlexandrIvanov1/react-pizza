import React, {ReactNode, Suspense} from 'react';
import './scss/app.scss';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {Layout} from './pages/Layout';

const Cart = React.lazy(() => import('./pages/Cart/Cart'))
const PizzaItem = React.lazy(() => import('./pages/PizzaItem/PizzaItem'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

const CreateSuspenseComponent = (Component: ReactNode) => {
    return <Suspense fallback={<div className='suspense-fallback'>Загрузка</div>}>{Component}</Suspense>
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="cart" element={CreateSuspenseComponent(<Cart/>)}/>
                <Route path="pizza/:id" element={CreateSuspenseComponent(<PizzaItem/>)}/>
                <Route path="*" element={CreateSuspenseComponent(<NotFoundPage/>)}/>
            </Route>
        </Routes>
    );
}

export default App;