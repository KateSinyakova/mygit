import { useEffect, useState } from 'react';
import axios from 'axios';

export function useChartData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/lotostoi/test-task.io/main/data.json', {
      headers: {'Content-Type':'application/json' }
    })
      .then((resp) => {
        const chartData = resp.data.map((el) => {
          return {el}
        });

        setData(chartData)
        })
      .catch(console.log)

  }, []);

    return [data];
};
