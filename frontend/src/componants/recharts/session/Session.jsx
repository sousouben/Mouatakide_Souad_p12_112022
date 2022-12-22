import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";

/**
 * [CustomTooltip Custom tooltip component]
 *
 * @param {Object} props Component properties
 * @param {Boolean} props.active Boolean that determines if the tooltip should be displayed or not
 * @param {Object[]} props.payload Array of data objects containing the values ​​to display in the tooltip
 * @returns {JSX.Element} The custom tooltip component
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="customTooltipSession">
        <p className="tooltipDataSession">{`${payload[0].value} `}min</p>
        {/*affiche la valeur du premier objet du tableau, suivie de la chaîne "min".*/}
      </div>
    );
  }
  return null;
};

const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  );
};

/**
 * [daySemaine is a function which generates the days of the week]
 * @param {string} day
 * @returns days of the week
 */
function daySemaine(day) {
  switch (day) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";

    default:
      return null;
  }
}

/**
 * [ActivitySession is a function that returns a line graph, line, y-axis, x-axis, and tooltip]
 * @prop {Object} userSessionsData from a user to LineChart
 * @returns {React.ReactElement} A graph line chart
 */
function ActivitySession({ userSessions }) {
  return (
    <ResponsiveContainer>
      <LineChart
        style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
        data={userSessions}
        margin={{ top: 50, right: -2, left: -60, bottom: 10 }}
      >
        <CartesianGrid vertical={false} horizontal={false} />

        <XAxis
          dataKey="day"
          tickFormatter={daySemaine}
          tickLine={false}
          fillOpacity={0.5}
          style={{ transform: "scale(0.9)", transformOrigin: "bottom" }}
          tick={{ fill: "#FFFFFF", fontWeight: 500, fontSize: 12 }}
          tickMargin={10}
          axisLine={false}
          interval="preserveStartEnd"
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
          domain={["dataMin - 5", "dataMax + 5"]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
          wrapperStyle={{
            background: "#FFFFFF",
            textAlign: "center",
            color: "#000000",
            width: "55px",
            height: "25px",
            outline: "none",
            marginTop: "15",
          }}
        />

        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ stroke: "red", strokeWidth: 2, r: 5 }}
          stroke={"#FFF"}
        />

        <text
          className="graphTitle"
          x="8%"
          y="12%"
          width={147}
          height={48}
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          {" "}
          Durée moyenne des{" "}
        </text>

        <text
          className="graphTitle"
          x="8%"
          y="20%"
          width={147}
          height={48}
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          {" "}
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

//Proptypes
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};
ActivitySession.propTypes = {
  userSessions: PropTypes.array.isRequired,
};

export default ActivitySession;
