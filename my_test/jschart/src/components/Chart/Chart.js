import { useState } from 'react';
import './chart.css';
import { Bar } from 'react-chartjs-2';
import { CustomTooltip } from '../CustomTooltip/CustomTooltip';
import {QuestionIcon} from '../../icons/QuestionIcon';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export function Chart({chartData}) {

  const [select, setSelect] = useState('#ffc107');

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const labels = chartData.map((el) => {
    return el.el.data;
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Chart',
        data: chartData.map((el) => {
          return el.el.value;
        }),
        backgroundColor: select,
      },
    ],
  };

  return (
    <div className='chart'>
      <div className='chartWrapper'>
        <CustomTooltip text="Динамика продаж" icon={<QuestionIcon/>} />
        <Bar
          data={data}
          options={options}
        />
      </div>
      <div className='selectWrapper'>
        <label className='selectLabel' >Выбрать цвет</label>
        <select  className='select' value={select} onChange={e => setSelect(e.target.value)}>
          <option value="#0dcaf0" className='option' >Голубой</option>
          <option value="red" className='option' >Красный</option>
          <option value="#20c997" className='option'>Зеленый</option>
          <option value="#ffc107"className='option' >Желтый</option>
        </select>
      </div>
    </div>
  );
};
