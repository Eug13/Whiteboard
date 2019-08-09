import React from "react";

const Pages = ( props ) => (
        <span onClick={ () => props.onClick( props.page ) }>{ props.children }{ props.page }</span>
);

export default Pages;
