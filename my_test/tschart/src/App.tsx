import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { Chart } from './components/Layout/Chart';
import { ChartContextProvider } from './context/chartContext';

function App() {
  return (
    <ChartContextProvider>
      <Layout>
        <Chart />
      </Layout>
    </ChartContextProvider>
  );
};

export default App;
