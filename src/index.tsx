import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';



const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <QueryClientProvider client={queryClient}>
         <App />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

