import React from "react";
import Pages from "./Pages";
import Table from "./Table";
import Top from "./Top";

const pages = [ "Boys", "Girls", "'RXD", "SCALED" ];
const athletes = [
    { name: "Evgeniy", surname: "Derzhavin", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Patrik", surname: "Wellner", isStandart: true, weight: 65, reps: 12, time: 12 },
    { name: "Brent", surname: "Fikowski", isStandart: true, weight: 75, reps: 12, time: 12 },
    { name: "Scott", surname: "Panchik", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Dan", surname: "Baley", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Evgeniy", surname: "Derzhavin", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Patrik", surname: "Wellner", isStandart: true, weight: 65, reps: 12, time: 12 },
    { name: "Brent", surname: "Fikowski", isStandart: true, weight: 75, reps: 12, time: 12 },
    { name: "Scott", surname: "Panchik", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Dan", surname: "Baley", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Evgeniy", surname: "Derzhavin", isStandart: true, weight: 45, reps: 12, time: 12 },
    { name: "Patrik", surname: "Wellner", isStandart: true, weight: 65, reps: 12, time: 12 },
    { name: "Brent", surname: "Fikowski", isStandart: true, weight: 75, reps: 12, time: 12 },
];

class Stat extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind( this );
    }
    handleClick( page ) {
        console.log( `hello${ page }` );
    }

    render() {
        return (
            <div>
                <Top />
                <div className="stat">
                    <span className="page_link act">Leaderboard</span>
                    { pages.map( ( item, index ) =>
                        ( <div className="page_link"  key= { index }>
                            <Pages page={ item } onClick={ this.handleClick } />

                        </div> ) )
                    }
                    <Table athletes={ athletes } />
                </div>
                <style jsx>{`
                    .stat{
                        /* margin:0 auto; */
                        margin:0 10px;
                    }
                    
                    .page_link{
                        display: inline-block;
                        padding:10px 20px;
                        border-left:2px solid #0056b8;
                        border-right:2px solid #0056b8;
                        border-radius:4px 4px 4px 4px;
                        color:#0056b8;
                        margin:20px;
                        font-family: Ubuntu,sans-serif;
                        text-transform: uppercase;
                        font-size: 1.2rem;
                        text-align: center;
                    }
                    
                    .page_link:first-child{
                        margin-left:0;
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
                    }
               `}</style>
            </div>
          
        );
    }
}

export default Stat;
