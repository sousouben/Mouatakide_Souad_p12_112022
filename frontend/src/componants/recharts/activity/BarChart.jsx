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
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    //lorsqu'on est sur une barre une légende apparait dans un cadre rouge
    return (
      <div className="customTooltip">
        <p className="tooltipData">{`${payload[0].value} `}g</p>
        <p className="tooltipData">{`${payload[1].value} `}Kcal</p>
      </div>
    );
  }
  return null;
};

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
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          stroke=" #DEDEDE"
          tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
          padding={{ left: -47, right: -48 }}
          tickMargin={16}
        />
        {/*concerne les dates*/}
        <YAxis
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
          tickMargin={45}
          minTickGap={27}
        />
        {/*concerne les valeurs y*/}
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            color: "#FFF",
            background: "red",
            border: "none",
            outline: "none",
            width: "70px",
            height: "85px",
            textAlign: "center",
            lineHeight: "2.5",
          }}
        />
        {/*concerne le cadre rouge*/}
        <Legend
          className="activityLegend"
          verticalAlign="top"
          align="right"
          iconType={"circle"}
          iconSize={8}
          width={277}
          height={25}
          wrapperStyle={{ top: 35, right: 26 }}
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
          radius={[4, 4, 0, 0]}
        />
        {/*concerne les barres des kilos*/}
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[4, 4, 0, 0]}
        />
        {/*concerne les barres des calories*/}
        <text
          className="graphTitle"
          x="5%"
          y="15%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#20253A"
          style={{ fontWeight: 500 }}
        >
          Activité quotidienne{" "}
        </text>
        {/*concerne le titre*/}
      </BarChart>
    </ResponsiveContainer>
  );
}

//Proptypes
ActivityBarChart.propTypes = {
  activity: PropTypes.array.isRequired,
};

export default ActivityBarChart;
