import React from 'react';
import './config/reactotronConfigure'
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import {Provider} from 'react-redux'
import Routes from './routes';
import store from './store'
import GlobalStyles from './styles/global'
function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
        <Header/> 
        <Routes/>
        <GlobalStyles/>
      </BrowserRouter>
    </Provider>
   
  );
}

export default App;
