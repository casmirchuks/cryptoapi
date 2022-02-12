import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllCoins from './routes/AllCoin';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter,  Routes, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
        <ChakraProvider>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="allcoins" element={<AllCoins />} />
            </Route>

          </Routes>
          </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

