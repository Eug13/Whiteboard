import React from "react";
import styles from "./top.css";

const Top = ({ title }) => (
    <div className="wraper">
        <h2>TOP ATHLETES OF THE DAY!</h2>
        <div className="top-row" style={styles}>

            <div className="image-container">
                <img src="https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv" alt="" />
            </div>

            <div className="image-container">
                <img src="https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fikowski_1.jpg?itok=qAamk6Gi" alt="" />
            </div>

            <div className="image-container">
                <img src="https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_vellner.jpg?itok=ehG_HO24" alt="" />
            </div>

            <div className="image-container">
                <img src="https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/root.jpg?itok=Ur7pmhUR" alt="" />
            </div>

            <div className="image-container">
                <img src="https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/415f2-P123582_15-184.jpg?itok=A1mziHpJ" alt="" />
            </div>

            <div className="image-container">
                <img src="https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_pearce.jpg?itok=trIpkwml" alt="" />
            </div>
        </div>
    </div>
);

export default Top;