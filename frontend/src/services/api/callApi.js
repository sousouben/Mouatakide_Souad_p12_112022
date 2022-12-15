import { ActivityData } from "../classModel/classActivityData";
import { MainData } from "../classModel/ClassMainData";
import { AverageSessionsData } from "../classModel/classAverageSessionsData";
import { PerformanceData } from "../classModel/classPerformanceData";

const url = "http://localhost:3000/user";

console.log(url);

const getData = async (id, categorie) => {
  let urlDemande = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
  console.log(urlDemande);

  const data = await fetch(urlDemande);
  console.log(data);

  const dataFetch = await data.json();
  console.log(dataFetch);

  switch (categorie) {
    case "activity":
      return new ActivityData(dataFetch.data);
    case "average-sessions":
      return new AverageSessionsData(dataFetch.data);
    case "performance":
      return new PerformanceData(dataFetch.data);

    default:
      return new MainData(dataFetch.data);
  }
};

export default getData;
