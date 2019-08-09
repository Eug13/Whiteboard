import fetch from "isomorphic-fetch";
import { parse } from "node-html-parser";

export function fetchCircuits( ) {
    return fetch( "http://crossfit.rv.ua" )
        .then( res => res.text() )
        .then( txt => {
            const root = parse( txt );
            const data = root.querySelector( ".wodster" );
            const txt1 = data.toString().split( "No Comments</a> </span>" )[ 1 ].split( "</div>" )[ 1 ];
            const txt2 = txt1.split( ">" );
            const txt3 = [ ];
            txt2.forEach( i => {
                const item = i.split( "<" )[ 0 ];
                txt3.push( item );
            } );
            txt3.shift();
            txt3.pop();
            return txt3;
        } )
        .catch( e => console.error( e ) );
}

export const handleClick = () => {
    // console.log( "clicked!" );
    fetch( "/login?name=eug" )
        .then( () => {} );
};
