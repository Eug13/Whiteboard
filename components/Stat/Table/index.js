import React from "react";

const Table = ( props ) => (
    <div className="table" >
        <table>
            <thead>
                <tr>
                    <th>ID</th>
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
                        <td className="image-container"><img src={item.photo} alt="" width='50' height='50' /></td>
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
        <style jsx>{`

.table{
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    border-radius:4px 4px 4px 4px;
    margin:10px 0;
    padding:10px 0;
    font-family: Ubuntu,sans-serif;
    text-transform: uppercase;
}
/* Table head */
th{
    background: #0056b8;
    color:white;
    padding:10px 40px;
}
th:first-child{
    border-radius:4px 0 0 0 ;
}
th:last-child{
    border-radius:0 4px 0 0 ;
}

/* Table Row */

tr{
    text-align: center;
}
tr:last-child td:first-child{
    border-radius:0 0 0 4px ;
}
tr:last-child td:last-child{
    border-radius:0 0 4px 0 ;
}

td{
    padding:10px 10px;
}

tr:nth-child(odd){
    background: rgb(243, 243, 243);
}

tr:hover{
    color:#ba0c2f;
    cursor:pointer;
    background: #fffecf;
}

.image-container img {
    width: 50px;
    height: 50px;
    border: 5px solid #ddd;
    border-radius: 50%;
    transition: border-color 150ms ease;
}
`}</style>
    </div>
);

export default Table;
