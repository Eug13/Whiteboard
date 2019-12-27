import React from "react";

const Burger = ({ open, setOpen }) => {
    return (
      <div open={open} onClick={() => setOpen(!open)}>
        <span className={( open ? 'trans1' : 'notrans1' )} />
        <span className={( open ? 'trans2' : 'notrans2' )} />
        <span className={( open ? 'trans3' : 'notrans3' )} />
        <style jsx>{`
        div{
          position: relative;
          top: 8px;
          right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
          }
          
          div:focus {
            outline: none;
          }
        
          span {
            width: 2rem;
            height: 2px;
            background: rgba(255,255,255,.5); 
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
            }
            .notrans1{
              transform: rotate(0);
            }
        
            .notrans2{
              opacity: 1;
              transform: translateX(0);
            }
        
            .notrans3{
              transform: rotate(0);
            }

            .trans1 {
              transform: rotate(45deg);
              background:#ba0c2f;
            }
        
            .trans2 {
              opacity: 0;
              transform: translateX(20px);
              background:#ba0c2f;
            }
        
            .trans3 {
              transform: rotate(-45deg);
              background:#ba0c2f;
            }
        `}</style>
      </div>
    )
  }
  
  export default Burger;