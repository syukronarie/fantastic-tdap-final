/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Banner from './components/Banner/Banner';
import client from './configs/graphql';
import SetupRouters from './routes/index';
import store, { persistor } from './store';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Banner />
              <SetupRouters />
              <ToastContainer />
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
