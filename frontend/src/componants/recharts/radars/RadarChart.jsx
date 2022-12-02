import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function radarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        margin={{ top: 30, right: 30, bottom: 30, left: 70 }}
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          tickLine={false}
          axisLine={false}
          dy={5}
          stroke="#FFF"
          tick={{ fill: "#FFFFFF", fontSize: 12 }}
        />

        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default radarChart;
