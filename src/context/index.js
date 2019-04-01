import { createContext } from 'react';

export const MonitoringContext = createContext({
  monitoringItems: [],
  isMonitoring: false,
  startMonitoring: () => null,
  endMonitoring: () => null,
});
