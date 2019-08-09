import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./routes";
import Layout from "./components/Layout";
import createStore, { initializeSession, storeDate } from "./store";

const d = new Date().toLocaleDateString().split( "-" );
const date = `${ d[ 2 ] }/${ d[ 1 ] }/${ d[ 0 ] }`;

const app = express();
const store = createStore( );

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

const getLogged = ( user ) => {
    console.log( "here", user );
    if ( user && user.name === "eug" ) {
        store.dispatch( initializeSession( ) );
    }
};

app.get( "/*", ( req, res ) => {
    const context = { };
    store.dispatch( storeDate( date ) );

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

    // console.log( dataRequirements );
    console.log( req.url, context );

    Promise.all( dataRequirements ).then( ( ) => {
        // const routeChecker = routes.map( i => i.path );

        // if ( !routeChecker.includes( req.url ) ) {
        //     console.log( "here should be 404 page!" );
        // } else {
        getLogged( req.query );

        // }

        const jsx = (
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <Layout />
                </StaticRouter>
            </ReduxProvider>
        );
        const reactDom = renderToString( jsx );
        const reduxState = store.getState();
        const helmetData = Helmet.renderStatic( );

        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
    } );
} );

app.listen( 2048 );

function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
            <link rel="stylesheet" type="text/css" href="./styles.css" />
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
