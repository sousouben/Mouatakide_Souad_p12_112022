import {
  mainData,
  activityData,
  averageSessionsData,
  performanceData,
} from "../ClassDataModel";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../mocks/data";

function getUserMainData(id) {
  const data = USER_MAIN_DATA.find((value) => value.id.toString() === id);
  const userMain = new mainData(data);
  return userMain;
}

function getUserActivity(id) {
  const data = USER_ACTIVITY.find((value) => value.userId.toString() === id); //userActivityData = const dans le mock
  const userActivity = new activityData(data);
  return userActivity;
}

function getUserAverageSessions(id) {
  const data = USER_AVERAGE_SESSIONS.find(
    (value) => value.userId.toString() === id
  );
  const userSessions = new averageSessionsData(data);
  return userSessions;
}
function getUserPerformance(id) {
  const data = USER_PERFORMANCE.find((value) => value.userId.toString() === id);
  const userPerformance = new performanceData(data);
  return userPerformance;
}

const getData = async (id, categorie) => {
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
