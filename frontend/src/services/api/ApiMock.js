import { ActivityData } from "../classModel/classActivityData";
import { MainData } from "../classModel/ClassMainData";
import { AverageSessionsData } from "../classModel/classAverageSessionsData";
import { PerformanceData } from "../classModel/classPerformanceData";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../mocks/data";

function getUserMainData(id) {
  const data = USER_MAIN_DATA.find((value) => value.id.toString() === id); //rechercher dans le tableau USER_MAIN_DATA un objet avec un ID correspondant.
  //convertit l'id de chaque objet du tableau USER_MAIN_DATA en une chaîne à l'aide de la méthode toString()
  const userMain = new MainData(data); //crée un nouvel objet MainData en utilisant les données de l'objet correspondant et le renvoie.
  return userMain;
}

function getUserActivity(id) {
  const data = USER_ACTIVITY.find((value) => value.userId.toString() === id); //userActivityData = const dans le mock
  const userActivity = new ActivityData(data);
  return userActivity;
}

function getUserAverageSessions(id) {
  const data = USER_AVERAGE_SESSIONS.find(
    (value) => value.userId.toString() === id
  );
  const userSessions = new AverageSessionsData(data);
  return userSessions;
}
function getUserPerformance(id) {
  const data = USER_PERFORMANCE.find((value) => value.userId.toString() === id);
  const userPerformance = new PerformanceData(data);
  return userPerformance;
}

const getData = async (id, categorie) => {
  //async renvoie une promesse
  switch (categorie) {
    case "activity":
      return getUserActivity(id);
    case "average-sessions":
      return getUserAverageSessions(id);
    case "performance":
      return getUserPerformance(id);

    default:
      return getUserMainData(id);
  }
};

export default getData;
