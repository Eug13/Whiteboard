import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";
import styles from "./css/wod.css";

class Wod extends React.Component {
    constructor() {
        super();
        this.setFontSize = this.setFontSize.bind( this );
        this.fzChecker = this.fzChecker.bind( this );
        this.state = {
            fz: "fz_3",
        };
    }
    componentDidMount( ) {
        if ( this.props.wod.length <= 0 ) {
            this.props.fetchData( );
        }

        const lng = this.props.wod.length - 5;
        this.fzChecker( lng );
    }

    setFontSize( fz ) {
        this.setState( { fz } );
    }

    fzChecker( lng ) {
        if ( lng > 14 ) {
            this.setFontSize( "fz_0" );
        } else if ( lng > 12 && lng < 15 ) {
            this.setFontSize( "fz_1" );
        } else if ( lng > 10 && lng < 13 ) {
            this.setFontSize( "fz_2" );
        } else if ( lng < 11 && lng > 8 ) {
            this.setFontSize( "fz_3" );
        } else if ( lng < 9 && lng > 5 ) {
            this.setFontSize( "fz_4" );
        } else if ( lng < 6 && lng > 4 ) {
            this.setFontSize( "fz_5" );
        } else if ( lng < 5 ) {
            this.setFontSize( "fz_6" );
        } else {
            this.setFontSize( "fz_3" );
        }
    }

    render( ) {
        const { wod, date } = this.props;
        const className = this.state.fz;
        // console.log( "used state fz render", this.state.fz );
        return (
            <div className="wrapper" style={ styles }>
                <div className="wod_b fz_b">
                    <div
                        className="training_b"
                        ref={ r => {
                            this.workout = r;
                        } }
                    >
                        <h2>WORKOUT OF THE DAY { date }</h2>
                        { wod.map( ( item, index ) => (
                            <div
                                key={ index }
                                className={ `item_b ${ className }` }
                            >
                                { item }
                            </div>
                        ) ) }
                    </div>
                </div>
            </div>
        );
    }
}
Wod.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    wod: state.data,
    date: state.date,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Wod );
