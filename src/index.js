import ReactDOM from 'react-dom/client';
import App from "./app/App.tsx";
import { Provider } from 'react-redux';
import {store} from "./entities/Board/model/slice/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App/>
    </Provider>
);

