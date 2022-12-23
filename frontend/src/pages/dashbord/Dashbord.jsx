import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

import PropTypes from "prop-types";

/** *
 * @function Profil
 *
 * [A function that fetches and displays user data.]
 *
 * @param {number} id - The user's ID.
 * @param {string} categorie - The category of data to retrieve (optional).
 * @param {function} useParams - A hook for accessing URL parameters.
 * @param {function} useState - A hook for creating state variables.
 * @param {function} useEffect - A hook for performing side effects in a functional component.
 * @param {function} useNavigate - A hook for navigating to a different page.
 * @returns {null} If user data is not yet available.
 * @returns {JSX} The JSX for displaying the user's main data, activity data, session data, and performance data.
 *
 */
function Profil() {
  const { id } = useParams(); //useParams permet d'obtenir le paramètre id de l'URL.
  const { categorie } = useParams(); //useParams permet d'obtenir le paramètre categorie de l'URL.
  //useState créer des variables d'état qui seront utilisées pour stocker des données sur l'utilisateur, son activité, ses sessions et ses performances.
  const [userMain, setUserMain] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const navigate = useNavigate();

  /**
   * Fetches user data and stores it in state variables.
   *
   * @param {number} id - The user's ID.
   * @param {string} categorie - The category of data to retrieve (optional).
   * @param {function} navigate - A function for navigating to a different page.
   */
  useEffect(() => {
    const fetchData = () => {
      try {
        if (id === "12" || id === "18") {
          dataUser(id)
            .then((data) => {
              if (typeof data !== "undefined") {
                try {
                  setUserMain(data);
                } catch (error) {
                  console.log(
                    "Erreur des données principales de l'utilisateur:",
                    error
                  );
                }

                dataUser(id, "activity")
                  .then((data) => {
                    try {
                      setUserActivity(data);
                    } catch (error) {
                      console.log(
                        "Erreur des données d'activité de l'utilisateur:",
                        error
                      );
                    }
                  })
                  .catch((error) =>
                    console.log("Erreur des données d'activité:", error)
                  );

                dataUser(id, "average-sessions")
                  .then((data) => {
                    try {
                      setUserSessions(data);
                    } catch (error) {
                      console.log(
                        "Erreur des données des sessions utilisateur:",
                        error
                      );
                    }
                  })
                  .catch((error) =>
                    console.log("Erreur des données des sessions:", error)
                  );

                dataUser(id, "performance")
                  .then((data) => {
                    try {
                      setUserPerformance(data);
                    } catch (error) {
                      console.log(
                        "Erreur des données de performances de l'utilisateur:",
                        error
                      );
                    }
                  })
                  .catch((error) =>
                    console.log("Erreur des données de performances:", error)
                  );
              }
            })
            .catch((error) =>
              console.log("Erreur des données utilisateur:", error)
            );
        } else {
          navigate("/error");
        }
      } catch (error) {
        console.log("Erreur lors de la récupération des données:", error);
        navigate("/error");
      }
    };

    fetchData();
  }, [id, categorie, navigate]);

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

Profil.propTypes = {
  id: PropTypes.number.isRequired, // id est un nombre requis
  categorie: PropTypes.string, // categorie est une chaîne de caractères (optionnelle)
  userMain: PropTypes.object.isRequired, // userMain est un objet requis
  userActivity: PropTypes.array.isRequired, // userActivity est un tableau requis d'objets
  userSessions: PropTypes.array.isRequired, // userSessions est un tableau requis d'objets
  userPerformance: PropTypes.array.isRequired, // userPerformance est un tableau requis d'objets
};

export default Profil;
