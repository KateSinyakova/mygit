import React from "react";
import { useChartData } from "../hooks/useChartData";

export interface IChartContextData {
  data: any[];
};

export const chartContext = React.createContext<Array<IChartContextData>>([]);

export function ChartContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = useChartData();
  return (
    <chartContext.Provider value={data}>
      {children}
    </chartContext.Provider>
  );
};
