import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function GraphElement1() {
  return (
    <LineChart
      xAxis={[
        {
          data: ["01 Mon", "02 Tue", "03 Wed", "04 Thu", "05 Fri", "06 Sat"],
          scaleType: "point",
          labelStyle: { fill: "#00bcd4", fontSize: 14 },
          tickLabelStyle: { fill: "#00bcd4", fontSize: 12 },
          stroke: "#8884d8",
        },
      ]}
      yAxis={[
        {
          labelStyle: { fill: "#00bcd4", fontSize: 14 },
          tickLabelStyle: { fill: "#00bcd4", fontSize: 12 },
          stroke: "#8884d8",
          label: "Hashrate (TH/s)",
        },
      ]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: "rgba(254, 240, 238, 0.2)",
        },
      ]}
      height={300}
      sx={{
        ".MuiChartsAxis-line": {
          stroke: "rgba(7, 234, 211, 0.27)",
        },
        ".MuiChartsAxis-tickLabel": {
          fill: "rgba(7, 234, 211, 0.27)",
        },

        ".MuiAreaElement-series-0": {
          fill: "#ff9800",
          fillOpacity: 0.3,
        },
      }}
    />
  );
}
