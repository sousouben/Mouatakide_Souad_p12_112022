import { ActivityData } from "../classModel/classActivityData";
import { MainData } from "../classModel/ClassMainData";
import { AverageSessionsData } from "../classModel/classAverageSessionsData";
import { PerformanceData } from "../classModel/classPerformanceData";

const url = "http://localhost:3000/user";
console.log(url);
//Ce code définit une fonction appelée getData qui envoie une requête HTTP à une URL spécifiée par la variable url.
//La fonction prend deux arguments : id et categorie.
const getData = async (id, categorie) => {
  let urlDemande = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
  console.log(urlDemande);

  const data = await fetch(urlDemande); //await est utilisé pour attendre la réponse du serveur avant de continuer.
  console.log(data);

  const dataFetch = await data.json(); //Une fois la réponse reçue, la fonction appelle la méthode json() sur l'objet de réponse pour analyser la réponse au format JSON, puis stocke le résultat dans la variable dataFetch.
  console.log(dataFetch);

  switch (
    categorie //switch pour déterminer le type d'objet de données à renvoyer, en fonction de la valeur de l'argument categorie.
  ) {
    case "activity":
      return new ActivityData(dataFetch.data); //la fonction renvoie un nouvel objet ActivityData
    case "average-sessions":
      return new AverageSessionsData(dataFetch.data); //la fonction renvoie un nouvel objet AverageSessionsData
    case "performance":
      return new PerformanceData(dataFetch.data); //la fonction renvoie un nouvel objet PerformanceData

    default:
      return new MainData(dataFetch.data); //Si aucune des instructions case ne correspond, la fonction renvoie un nouvel objet MainData.
  }
};

export default getData;
