import { ActivityData } from "../classModel/classActivityData";
import { MainData } from "../classModel/ClassMainData";
import { AverageSessionsData } from "../classModel/classAverageSessionsData";
import { PerformanceData } from "../classModel/classPerformanceData";
import PropTypes from "prop-types";

const url = "http://localhost:3000/user";
//console.log(url);

//Ce code définit une fonction appelée getData qui envoie une requête HTTP à une URL spécifiée par la variable url.
//La fonction prend deux arguments : id et categorie.

/**
 * [getData Retrieves data for a user based on the specified ID and category.]
 *
 * @param {number} id - The ID of the user whose data should be retrieved.
 * @param {string} categorie - The category of data to retrieve.
 * @returns {Promise} A promise that resolves with the data for the user.
 */
const getData = async (id, categorie) => {
  //Créez l'URL de la demande en fonction de l'ID et de la catégorie spécifiés.
  let urlDemande = categorie ? `${url}/${id}/${categorie}/` : `${url}/${id}/`;

  console.log(urlDemande);

  const data = await fetch(urlDemande); //Récupérez les données de l'API.
  console.log(data);

  const dataFetch = await data.json(); //Analysez la réponse au format JSON.
  console.log(dataFetch);

  switch (
    categorie //Déterminez le type d'objet de données à renvoyer en fonction de la catégorie.
  ) {
    case "activity":
      return new ActivityData(dataFetch.data);
    case "average-sessions":
      return new AverageSessionsData(dataFetch.data);
    case "performance":
      return new PerformanceData(dataFetch.data);

    default:
      return new MainData(dataFetch.data); //Si aucune des instructions case ne correspond, la fonction renvoie un nouvel objet MainData.
  }
};

getData.propTypes = {
  id: PropTypes.number.isRequired,
  categorie: PropTypes.string,
};

export default getData;
