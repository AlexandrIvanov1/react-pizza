import React, {useState} from 'react';
import './scss/app.scss';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Cart} from './pages/Cart/Cart';
import {NotFoundPage} from './pages/NotFoundPage';

type ContextType = {
    searchValue: string
    setSearchValue: (value: string) => void
}

export const SearchContext = React.createContext<ContextType>({searchValue: '', setSearchValue: () => {}})

function App() {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;