import './App.css';
import {Provider} from "react-redux";
import Store from "./stores/Store";
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import React from "react";

function App() {
  return (
      <>
          <ChakraProvider>
              <Provider store={Store}>
                  <BrowserRouter>
                      <Router />
                  </BrowserRouter>
              </Provider>
          </ChakraProvider>
      </>
  );
}

export default App;
