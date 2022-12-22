import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
//styles css
import "./Dashbord.css";
//icones
import calories from "../../assets/images/calories-icon.png";
import proteines from "../../assets/images/protein-icon.png";
import glucides from "../../assets/images/carbs-icon.png";
import lipides from "../../assets/images/fat-icon.png";
//graphiques
import ActivityBarChart from "../../componants/recharts/activity/BarChart";
import ActivityRadarChart from "../../componants/recharts/radars/RadarChart";
import ActivityRadialBarChart from "../../componants/recharts/score/RadialBarChart";
import ActivitySession from "../../componants/recharts/session/Session";
import NavVertical from "../../componants/nav/vertical/NavVertical";

//import dataUser from "../../services/api/ApiMock";
import dataUser from "../../services/api/callApi";

function Profil() {
  const { id } = useParams(); //useParams permet d'obtenir le paramètre id de l'URL.
  const { categorie } = useParams(); //useParams permet d'obtenir le paramètre categorie de l'URL.
  //useState créer des variables d'état qui seront utilisées pour stocker des données sur l'utilisateur, son activité, ses sessions et ses performances.
  const [userMain, setUserMain] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  /**
   *
   * [handleError Function that handles errors returned by the dataUser function]
   * @param {Error} error - The error returned by dataUser
   */
  function handleError(error) {
    console.log("erreur données id", error);
    return <Navigate to="/Error"></Navigate>;
  }
  useEffect(() => {
    //useEffect appele la fonction dataUser avec l'identifiant de l'utilisateur et récupérer des données sur l'utilisateur, son activité, ses sessions et ses performances.
    dataUser(id)
      /**
       * [dataUser Function that allows retrieving user data with user id]
       * @param {number} id - User ID
       * @param {string} categorie - The category of data to recover (optional)
       * @return {Promise} A promise that resolves with user data or rejects with an error on failure
       */
      .then((data) => {
        if (typeof data !== "undefined") {
          //Ces données sont ensuite stockées dans les variables d'état respectives à l'aide des fonctions setUserMain, setUserActivity, setUserSessions et setUserPerformance.
          setUserMain(data);

          dataUser(id, "activity")
            .then((data) => setUserActivity(data))
            .catch((error) => console.log("erreur activity", error));

          dataUser(id, "average-sessions")
            .then((data) => setUserSessions(data))
            .catch((error) => console.log("erreur sessions", error));

          dataUser(id, "performance")
            .then((data) => setUserPerformance(data))
            .catch((error) => console.log("erreur performance", error));
        } else {
          return <Navigate to="/Error"></Navigate>;
        }
      })
      .catch((error) => handleError(error));
  }, [id, categorie]); //récupérer les données de l'utilisateur

  if (!userMain || !userActivity || !userSessions || !userPerformance) {
    return null;
  }

  /**
   * [hourOfTheDay Function that returns the current time of day]
   * @return {number} L'heure actuelle de la journée (entre 0 et 23)
   */
  function hourOfTheDay() {
    return new Date().getHours();
  }

  /**
   * [renderSalut Function that returns a greeting based on the time of day]
   * @return {string} A greeting according to the time of day: 'Good morning' if the time is less than 5 p.m. and greater than 5 a.m., 'Good evening' otherwise
   */
  function renderSalut() {
    const hour = hourOfTheDay();
    if (hour >= 17 || hour < 5) {
      return "Bonsoir";
    }
    return "Bonjour";
  }
  const salutation = renderSalut();
  return (
    <>
      <NavVertical />
      <div className="pageProfil">
        <div className="bonjour">
          <h1>
            {salutation} <span>{userMain.firstName}</span>
          </h1>
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="graphiques">
          <section className="horizonGauche">
            <div className="activity">
              <ActivityBarChart userActivity={userActivity.sessions} />
            </div>
            <div className="carre">
              <div className="sessions">
                <ActivitySession userSessions={userSessions.sessions} />
              </div>

              <div className="performance">
                <ActivityRadarChart userPerformance={userPerformance.data} />
              </div>

              <div className="score">
                <ActivityRadialBarChart userMain={userMain.todayScore * 100} />
              </div>
            </div>
          </section>
          <section className="iconDroite">
            <div className="calories">
              <img src={calories} alt="icon calorie" />
              <div className="infos">
                <h3>{userMain.calorie}kCal</h3>
                <p>Calories</p>
              </div>
            </div>
            <div className="proteines">
              <img src={proteines} alt="icon proteine" />
              <div className="infos">
                <h3>{userMain.proteine}g</h3>
                <p>Proteines</p>
              </div>
            </div>
            <div className="glucides">
              <img src={glucides} alt="icone glucide" />
              <div className="infos">
                <h3>{userMain.glucide}g</h3>
                <p>Glucides</p>
              </div>
            </div>
            <div className="lipides">
              <img src={lipides} alt="icon lipide" />
              <div className="infos">
                <h3>{userMain.lipide}g</h3>
                <p>Lipides</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Profil;
