import React from 'react';
import Navbar from './components/shared/Navbar/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './components/shared/graphqlApi';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

const Foods = React.lazy(() => import('./components/Foods/Foods'));

const App: React.FC<any> = () => {

  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <ApolloProvider client={client}>
        <Navbar />
        <Foods />
      </ApolloProvider>
    </React.Suspense>
  );
}

export default App;
