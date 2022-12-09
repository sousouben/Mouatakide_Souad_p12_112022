import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ActivityBarChart({ userActivity }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={userActivity}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7} //epaisseur de la barre
        barGap={8} //espace entre chaque barre
      >
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          className="activityLegend"
          verticalAlign="top"
          align="right"
          iconType={"circle"}
          iconSize={8}
          width={277}
          height={25}
          wrapperStyle={{ top: 35, right: 20 }}
          formatter={(value) => {
            return (
              <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            );
          }}
        />
        {/*concerne les légendes*/}
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />
        {/*concerne les barres des kilos*/}
        <Bar
          dataKey="calories"
          name="Calories brulées (kCal)"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />
        {/*concerne les barres des calories*/}

        <text
          className="graphTitle"
          x="4%"
          y="15%"
          width={147}
          height={48}
          fill="#20253A"
          style={{ fontWeight: 500 }}
        >
          {" "}
          Activité quotidienne{" "}
        </text>
        {/*concerne le titre*/}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivityBarChart;
