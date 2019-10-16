import React from "react";

const Top = ({ title }) => (
    <div className="wraper">
        <h2>TOP ATHLETES OF THE DAY!</h2>
        <div className="top-row">

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
        <style jsx>{`
.wraper{
    margin: 20px 10px;
}
.wraper h2{
    font-family: Ubuntu,sans-serif;
    font-size: 1.4rem;
    margin:0;
    padding:6px;
    font-weight: 200;
    margin-bottom: 20px;
    /* background: #ba0c2f; */
    border:1px solid #ddd;
    border-radius:4px 4px 4px 4px;
    text-align: center;
    color:#282828;
}

.top-row{
    padding:0 20px;
    /* text-align: center; */
    display: flex;
    justify-content: space-around;
}
.image-container {
    margin-top: 10px;
    padding: 0 15px;
    display: inline-block;
}

.image-container img {
    width: 100px;
    height: 100px;
    border: 5px solid #ddd;
    border-radius: 50%;
    transition: border-color 150ms ease;
}

.image-container img:hover {
    width: 100px;
    height: 100px;
    border: 5px solid #0056b8;
    border-radius: 50%;
    transition: border-color 150ms ease;
    cursor:pointer;
}
`}</style>
    </div>
);

export default Top;