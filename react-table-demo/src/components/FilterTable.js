import React ,{useMemo} from 'react'
import {useTable,useGlobalFilter,useFilters} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import "../table.css"
import GlobalFilter from './GlobalFilter'
import ColumnFilter from './ColumnFilter'

//Filter #GlobalFilter 
// #01 .Here we are using useGlobalFilter hook ans pass to useTable as argument
// #02 .Destructure Required items from state,setGlobalFilter

//Column Filter 
// #01. Here we are using useFilters() hook and add useFilters in useTable hook
// 02 . Add Filter key property in Columns 

// DefaultColumn Filter
//#01 .Create defaultColumn by using useMemo and  ColumnFilter ,add in useTable instance
// 02 . Remove Filter key property in Columns [Not Required]
 

const FilterTable = () => {

//Here we using useMemo [memoize (performance optimization)]
const columns=useMemo(() => COLUMNS, [])
const data =useMemo(() => MOCK_DATA, [])

//Default Filter column
const defaultColumn=useMemo(() => {
      return {
          Filter:ColumnFilter
      }
}, [])

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state,
    setGlobalFilter,
  }=useTable({
    columns,
    data,
    defaultColumn
},
useFilters,
useGlobalFilter)

const {globalFilter}=state
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}
                   <div>{column.canFilter ? column.render('Filter'):null} </div>
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
      </>
    );
}

export default FilterTable

// Get the data you want to display
// Define the columns for your table
// Use the data and columns defined to create a table instance using react-table
// Define basic table structure using plain HTML
// use table instance in before step
// include the desired css  