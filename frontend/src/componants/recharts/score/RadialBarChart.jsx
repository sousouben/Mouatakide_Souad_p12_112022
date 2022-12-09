import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

function ActivityRadialBarChart() {
  return (
    <ResponsiveContainer>
      <RadialBarChart
        cx="50%"
        cy="50%"
        style={{ backgroundColor: "var(--gris)", borderRadius: "5px" }}
        width="100%"
        height="100%"
        innerRadius={70}
        barSize={10}
        startAngle={80}
        endAngle={450}
      >
        {/*concerne le container*/}

        <circle cx="50%" cy="50%" fill="white" r="70"></circle>

        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={1}
          tick={false}
        />
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />

        <text
          className="scoreSize"
          fontWeight="700"
          fontSize={26}
          fill="#282D30"
          x="50%"
          y="45%"
          textAnchor="middle"
        ></text>

        <text
          className="graphTitle"
          fontWeight="500"
          fill="#74798C"
          x="50%"
          y="55%"
          textAnchor="middle"
        >
          de votre
        </text>

        <text
          className="graphTitle"
          fontWeight="500"
          fill="#74798C"
          x="50%"
          y="65%"
          textAnchor="middle"
        >
          objectif
        </text>

        <text
          className="graphTitle"
          x="8%"
          y="15%"
          width={147}
          height={48}
          dominantBaseline="middle"
          fill="#20253A"
          style={{ fontWeight: 500 }}
        >
          Score{" "}
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ActivityRadialBarChart;
