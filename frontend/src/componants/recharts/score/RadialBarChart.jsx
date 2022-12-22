import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";

/**
 * [ActivityRadialBarChart is a function that returns a radial bar chart, polar angle axis, radial bar, and texts]
 * @param {Object} userMain the user's score to display on the chart
 * @returns {React.ReactElement} A radial bar chart
 */
function ActivityRadialBarChart({ userMain }) {
  const data = [
    {
      uv: userMain,
      fill: "#E60000",
    },
  ];
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
        data={data}
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
          background
          dataKey="uv"
          angleAxisId={1}
          fill="var(--red)"
          cornerRadius="10"
          data={[data[0]]}
        />
        {/*concerne le marqueur rouge*/}
        <text
          className="scoreSize"
          fontWeight="700"
          fontSize={26}
          fill="#282D30"
          x="50%"
          y="45%"
          textAnchor="middle"
        >{`${userMain}%`}</text>

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

//Proptypes
ActivityRadialBarChart.propTypes = {
  userMain: PropTypes.number.isRequired,
};
export default ActivityRadialBarChart;
