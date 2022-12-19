import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
/**
 * Display user's performances chart
 * @component
 * @param {object} kind
 * @param {Array} userPerformance - array of performances datas
 * @returns {JSX.Element} ActivityRadarChart component
 */

function perFormence(kind) {
  switch (kind) {
    case 1:
      return "cardio";
    case 2:
      return "energy";
    case 3:
      return "endurance";
    case 4:
      return "strength";
    case 5:
      return "speed";
    case 6:
      return "intensity";
    default:
      return null;
  }
}

function ActivityRadarChart({ userPerformance }) {
  //prop userPerformance tableau d'objets représentant les données du graphique.
  return (
    <ResponsiveContainer>
      <RadarChart //graphique radar
        margin={{ top: 30, right: 30, bottom: 30, left: 70 }}
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }} //couleur d'arrière-plan et le rayon de la bordure du graphique
        data={userPerformance}
      >
        <PolarGrid radialLines={false} />
        {/*dessine des lignes de grille*/}
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={perFormence}
          tickLine={false}
          axisLine={false}
          dy={5}
          stroke="#FFF"
          tick={{ fill: "#FFFFFF", fontSize: 12 }}
        />
        {/*dessiner les axes du graphique*/}

        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

//Proptypes
ActivityRadarChart.propTypes = {
  userPerformance: PropTypes.array.isRequired,
};

export default ActivityRadarChart;
