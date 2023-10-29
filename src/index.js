import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './GlobalStyle';

const theme = {
  colors: {
    while: '#FFFFFF',
    black: '#111111',
    bluViolet: '#4F2EE8',
    yellow: '#EAC645',
    gray: '#D3D3D3',
  },
  colorsUploadStats: {
    deepBlu: '#00BFFF',
    violet: '#EE82EE',
    deepPink: '#FF1493',
    lastBlu: '#1E90FF',
  },
  freendsList: {
    hotPink: '#FF69B4',
    green: '#7CFC00',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
