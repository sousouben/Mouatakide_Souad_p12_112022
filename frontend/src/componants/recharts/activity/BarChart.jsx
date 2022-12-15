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

/**
 *
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @prop {Array}  userActivity Data from a user to BarChart
 * @returns {JSX.Element} an activ tooltip or null
 */

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

const customTickDay = (day) => {
  console.log(day);
  return Number(day.slice(8));
};

const customTickKg = (kilogram) => {
  console.log(kilogram);
  return kilogram;
};

function ActivityBarChart({ userActivity }) {
  console.log(userActivity);
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
        barGap={6} //espace entre chaque barre
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey={"day"}
          axisLine={false}
          domain={["dataMin + 1", "dataMax + 1"]}
          tickLine={false}
          tickFormatter={customTickDay}
        />
        {/*concerne les dates*/}
        <YAxis
          hide
          tickLine={false}
          orientation="right"
          interval={"preserveStartEnd"}
          axisLine={false}
          allowDecimals={false}
          dataKey={"kilogram"}
          yAxisId={1}
          domain={["dataMin + 1", "dataMax + 1"]}
          tickFormatter={customTickKg}
        />
        <YAxis
          dataKey={"calories"}
          tickFormatter={customTickKg}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        {/*concerne les valeurs y*/}
        <Tooltip
          content={<CustomTooltip />}
          labelStyle={{
            display: "none",
          }}
          wrapperStyle={{
            color: "#FFF",
            background: "red",
            border: "none",
            outline: "none",
            width: "50px",
            height: "70px",
            textAlign: "center",
            lineHeight: "1.5",
          }}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
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
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default ActivityBarChart;
