import React from "react";
import Pages from "./Pages";
import Table from "./Table";
import Cards from "./Cards";
import Top from "./Top";

const pages = [ "Boys", "Girls", "'RXD", "SCALED" ];
const athletes = [
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Evgeniy", surname: "Derzhavin", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Patrik", surname: "Wellner", isStandart: true, weight: 65, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Brent", surname: "Fikowski", isStandart: true, weight: 75, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Scott", surname: "Panchik", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Dan", surname: "Baley", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Evgeniy", surname: "Derzhavin", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Patrik", surname: "Wellner", isStandart: true, weight: 65, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Brent", surname: "Fikowski", isStandart: true, weight: 75, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Scott", surname: "Panchik", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Dan", surname: "Baley", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Evgeniy", surname: "Derzhavin", isStandart: true, weight: 45, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Patrik", surname: "Wellner", isStandart: true, weight: 65, reps: 12, time: 12 },
    { photo:"https://games-assets.crossfit.com/styles/featured_athlete/s3/featured_athlete/athleteheadshot_fraser.jpg?itok=_hs0DUCv",name: "Brent", surname: "Fikowski", isStandart: true, weight: 75, reps: 12, time: 12 },
];

class Stat extends React.Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind( this );
    }
    handleClick( page ) {
        console.log( `hello${ page }` );
    }

    render() {
        const { screen, box } = this.props;
       
        return (
            <div>
                {/* <Top /> */}
                <div className={( screen < 572 ? `stat` :`stat1`)}>
                    <span className={( screen<= 572 ? `${box} act` :`${box} act1`)} >Leaderboard</span>
                    { pages.map( ( item, index ) =>
                        ( <div className={`${box}`}  key= { index }>
                            <Pages page={ item } onClick={ this.handleClick } />
                        </div> ) )
                    }
                    { screen <= 576 ?
                        <Cards athletes={ athletes } />
                      : <Table athletes={ athletes } />
                    }
                </div>
                <style jsx>{`
                    .stat{
                        flex-wrap:wrap;
                        text-align:center;
                    }

                    .stat1{
                        flex-wrap:wrap;
                    }
                    
                    .boxw{
                        display: inline-block;
                        margin:10px;
                        background-color:white;
                        border-radius:4px 4px 4px 4px;
                        box-shadow: 0px 0px 5px 1px #99999966;
                        padding:20px;
                        color:black;
                        font-family: Ubuntu,sans-serif;
                        text-transform: uppercase;
                    }

                    .box{
                        display: inline-block;
                        margin:12px;
                        background-color:white;
                        border-radius:4px 4px 4px 4px;
                        box-shadow: 0px 0px 5px 1px #99999966;
                        padding:10px;
                        color:black;
                        font-family: Ubuntu,sans-serif;
                        text-transform: uppercase;
                    }
                    
                    .page_link:first-child{
                       
                    }
                    .page_link:hover{
                        background: #0056b8;
                        color:#fff;
                        cursor:pointer;
                    }
                    
                    .act{
                        background: #0056b8;
                        color:#fff;
                        cursor:pointer;
                        width:89%;
                    }
                    .act1{
                        background: #0056b8;
                        color:#fff;
                        cursor:pointer;
                    }
               `}</style>
            </div>
          
        );
    }
}

export default Stat;
