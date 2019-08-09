import React from "react";
import styles from "./table.css";

const Table = ( props ) => (
    <div className="table" style={ styles }>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Standart</th>
                    <th>Scaled</th>
                    <th>Weight</th>
                    <th>Reps</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                { props.athletes.map( ( item, index ) =>
                    ( <tr key={ index }>
                        <td>{ index + 1 }</td>
                        <td>{ item.name } { item.surname }</td>
                        <td>true</td>
                        <td>false</td>
                        <td>{ item.weight }</td>
                        <td>{ item.reps}</td>
                        <td>{ item.time }</td>
                    </tr> ) )
                }
            </tbody>
        </table>
    </div>
);

export default Table;
