/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Chart} from './components/Chart'
import {useChartData} from './hooks/useChartData'

function App() {
  const [chartData] = useChartData([]);

  return (
    <div className="App">
      <Chart chartData={chartData}/>
    </div>
  );
};

export default App;
