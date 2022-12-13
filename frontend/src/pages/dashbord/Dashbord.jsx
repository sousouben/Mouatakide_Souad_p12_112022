import React from "react";
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

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import dataUser from "../../services/api/ApiMock";

function Profil() {
  const { id } = useParams();
  const [userMain, setUserMain] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  useEffect(() => {
    dataUser(id)
      .then((data) => {
        if (typeof data !== "undefined") {
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
        }
      })
      .catch((error) => console.log("erreur données id", error));
  }, [id]);

  if (!userMain || !userActivity || !userSessions || !userPerformance) {
    return null;
  }

  function hourOfTheDay() {
    return new Date().getHours();
  }

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
