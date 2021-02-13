import React from 'react'
import Columns from './Columns'

function Table() {
    return (
          <table>
                   <thead>
                       <tr>
                           <th>SNO</th>
                           <th>Name</th>
                       </tr>
                   </thead>
                    <tbody>
                        {/* Columns and rows */}
                          <Columns/>
                    </tbody>
          </table>
    )
}

export default Table
