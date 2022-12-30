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
 * [CustomTooltip is a function that returns a red frame with the data contained in it]
 * @param {Object} props containing active and payload
 * @param {boolean} active indicates whether the tooltip should be displayed or not
 * @param {array} payload an array of data objects containing the values to be displayed in the tooltip
 * @returns {JSX}} A custom tooltip
 */
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="customTooltip">
        <p className="tooltipData">{`${payload[0].value} `}g</p>
        <p className="tooltipData">{`${payload[1].value} `}Kcal</p>
      </div>
    );
  }
  return null;
};

/**
 * [customTickDay is a function that returns the last two characters of the day string as a number]
 * @param {string} day - a string representing a day
 * @returns {number} the last two characters of the day string as a number
 */
const customTickDay = (day) => {
  //console.log(day);
  return Number(day.slice(8)); //méthode slice() pour extraire les deux derniers caractères de la chaîne day et Number() est utilisée pour convertir la chaîne extraite en nombre.
};
//Par exemple, si l'argument du jour est la chaîne "2022-12-19", la fonction enregistrera "19" sur la console et renverra le nombre 19.

/**
 * [customTickKg is a function that returns a custom tick for the y-axis of a bar chart]
 * @param {number} kilogram
 * @returns {number} The custom tick
 */
const customTickKg = (kilogram) => {
  //console.log(kilogram);
  return kilogram;
};

/**
 * @component Activity bar chart component.
 * @param {array} userActivity - An array of objects representing the data for the chart. Each object has properties for day, kilogram, and calories.
 * @returns {JSX.Element} A bar chart displaying the user's daily activity.
 *
 */
function ActivityBarChart({ userActivity }) {
  //console.log(userActivity);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart //graphique à barres
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
        <XAxis //axe des x
          dataKey={"day"}
          axisLine={false}
          domain={["dataMin + 1", "dataMax + 1"]}
          tickLine={false}
          tickFormatter={customTickDay}
        />
        {/*concerne les dates*/}
        <YAxis //axe des y
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
        {/*CustomTooltip est utilisé pour personnaliser l'apparence de l'info-bulle qui apparaît lors du survol d'une barre dans le graphique.*/}
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
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ActivityBarChart;
