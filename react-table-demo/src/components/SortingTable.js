import React ,{useMemo} from 'react'
import {useTable,useSortBy} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import "../table.css"

// For Sorting
// #1 For sorting  We can use useSortBy hook and add in useTable hook as second parameter
// #2 .Add column.getSortByToggleProps() in ...column.getHeaderProps(...herer) in thead
// #3 . For identification , Add span  <span> {column.isSorted ? column.isSortedDesc ? ' 🔽': ' 🔼': ''} </span>

//For Formating and sorting date value
// #1 .install date-fns and  Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')} //Formatting Date value with required format


const SortingTable = () => {

//Here we using useMemo [memoize (performance optimization)]
const columns=useMemo(() => COLUMNS, [])
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
},useSortBy)
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                     {column.isSorted ? column.isSortedDesc ? ' 🔽': ' 🔼': ''}
                  </span>
                </th>
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

export default SortingTable

// Get the data you want to display
// Define the columns for your table
// Use the data and columns defined to create a table instance using react-table
// Define basic table structure using plain HTML
// use table instance in before step
// include the desired css  