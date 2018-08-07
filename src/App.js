import React from 'react';
import { Provider } from 'react-redux';
import Main from './pages/main';

import './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

import store from './store';

const App = () => (
    <Provider store={store}>
        <Main />
    </Provider>
);

export default App;
