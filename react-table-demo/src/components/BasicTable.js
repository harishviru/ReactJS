import React ,{useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS,GROUPED_COLUMNS} from './columns'
import "../table.css"

const BasicTable = () => {

//Here we using useMemo [memoize (performance optimization)]

const columns=useMemo(() => COLUMNS, [])
//const columns=useMemo(() => GROUPED_COLUMNS, [])
const data =useMemo(() => MOCK_DATA, [])

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups
  }=useTable({
    columns,
    data
})
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    );
}

export default BasicTable

// Get the data you want to display
// Define the columns for your table
// Use the data and columns defined to create a table instance using react-table
// Define basic table structure using plain HTML
// use table instance in before step
// include the desired css  