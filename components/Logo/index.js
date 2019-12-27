import React from "react";

const Logo = ( props ) => (
    <span className="whiteboard"> {props.name} 
    
    <style jsx>{`
      .whiteboard{
        display: inline-block;
        height: auto;
        margin: 0;
        padding: .85em 1em .25em 1em;
        background: #212529;
        border-color: #fff;
        font-family: Ubuntu,sans-serif;
        font-weight: 400;
        color: #ba0c2f;
        transition: all 150ms ease;
        text-decoration: none;
        line-height: 1.42857;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        text-transform: uppercase;
        border: 1px solid transparent;
        border-radius: 0;
        white-space: nowrap;
        letter-spacing: 1px;
        font-size: 1.0rem;
    }
    
    .whiteboard:hover{
      color: #A81209;
    }
    `}</style>
    </span>
);

export default Logo;