import React from "react";
import calories from "../../assets/images/calories-icon.png";
import proteines from "../../assets/images/protein-icon.png";
import glucides from "../../assets/images/carbs-icon.png";
import lipides from "../../assets/images/fat-icon.png";
import "./Profil.css";
import BarChart from "../../componants/recharts/activity/BarChart";
import RadarChart from "../../componants/recharts/radars/RadarChart";
import RadialBarChart from "../../componants/recharts/score/RadialBarChart";
import Session from "../../componants/recharts/session/Session";
import NavVertical from "../../componants/nav/vertical/NavVertical";

function Home() {
  return (
    <>
      <NavVertical />
      <div className="pageProfil">
        <div className="bonjour">
          <h1>
            Bonjour {""}
            <span></span>
          </h1>
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="graphiques">
          <section className="horizonGauche">
            <div className="activity">
              <BarChart />
            </div>
            <div className="carre">
              <div className="sessions">
                <Session />
              </div>

              <div className="performance">
                <RadarChart />
              </div>

              <div className="score">
                <RadialBarChart />
              </div>
            </div>
          </section>
          <section className="iconDroite">
            <div className="calories">
              <img src={calories} alt="icon calorie" />
              <div className="infos">
                <h3>kCal</h3>
                <p>Calories</p>
              </div>
            </div>
            <div className="proteines">
              <img src={proteines} alt="icon proteine" />
              <div className="infos">
                <h3>g</h3>
                <p>Proteines</p>
              </div>
            </div>
            <div className="glucides">
              <img src={glucides} alt="icone glucide" />
              <div className="infos">
                <h3>g</h3>
                <p>Glucides</p>
              </div>
            </div>
            <div className="lipides">
              <img src={lipides} alt="icon lipide" />
              <div className="infos">
                <h3>g</h3>
                <p>Lipides</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
