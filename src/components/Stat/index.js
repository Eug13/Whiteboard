import React from "react";
import styles from "./stat.css";
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
                        ( <div className="page_link" style={ styles } key={ index }>
                            <Pages page={ item } onClick={ this.handleClick } />
                        </div> ) )
                    }
                    <Table athletes={ athletes } />
                </div>
            </div>
          
        );
    }
}

export default Stat;
