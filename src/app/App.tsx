import './styles/index.css';
import {Main} from '../pages/Main';
import {Header} from '../widgets/Header/'
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <div className="app-content">
            <BrowserRouter>
                    <Header/>
                    <Main/>
            </BrowserRouter>
        </div>
    );
};

export default App;
