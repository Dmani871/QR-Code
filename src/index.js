import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Card from './styles/Card';

const theme = extendTheme({
  components: {
    Card,
  },
})
ReactDOM.render(
  <ChakraProvider theme={theme}>
      <App />
   </ChakraProvider>,
  document.getElementById('root')
);


