import { useEffect, useState } from 'react';
import axios from 'axios';

interface IChartData {
  data: any[];
};

export function useChartData() {
  const [data, setData] = useState<Array<IChartData>>([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/lotostoi/test-task.io/main/data.json', {
      headers: {'Content-Type':'application/json' }
    })
      .then((resp: any) => {
        const chartData = resp.data.map((el: any) => {
          return {el}
        });
        setData(chartData)
        })
      .catch(console.log)

  },[]);

  return [data];
};
