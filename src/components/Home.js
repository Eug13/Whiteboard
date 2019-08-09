import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";
import styles from "./css/home.css";
import Stat from "./Stat";
import Sidebar from "./Sidebar";

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.wod.length <= 0 ) {
            this.props.fetchData( );
        }
    }

    render( ) {
        const { wod, date } = this.props;

        return (
            <div className="wrapper" style={ styles }>
                <div className="wod" >
                    <div className="training">
                        <h2>WORKOUT OF THE DAY { date }</h2>
                        { wod.map( ( item, index ) => (
                            <div key={ `${ index }w` } className="item">{ item }</div>
                        ) ) }
                    </div>
                </div>
                <Stat />
                <Sidebar />
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    wod: state.data,
    date: state.date,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
