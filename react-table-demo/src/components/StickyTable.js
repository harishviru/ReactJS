import React ,{useMemo} from 'react'
import {useTable,useBlockLayout} from 'react-table'
import {useSticky} from 'react-table-sticky'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import {Styles} from './TableStyles'
import "../table.css"

const StickyTable = () => {

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
},
useBlockLayout,
useSticky)

const firstPageRows =rows.slice(0,10)
    return (
        <Styles>
        <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
          <div className="header">
            {headerGroups.map((headerGroup) => (
              <div {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="th">
                    {column.render('Header')}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div {...getTableBodyProps()} className="body">
            {firstPageRows.map((row) => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render('Cell')}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="footer">
            {footerGroups.map((footerGroup) => (
              <div {...footerGroup.getHeaderGroupProps()} className="tr">
                {footerGroup.headers.map((column) => (
                  <div {...column.getHeaderProps()} className="td">
                    {column.render('Footer')}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Styles>
    );
}

export default StickyTable

// Get the data you want to display
// Define the columns for your table
// Use the data and columns defined to create a table instance using react-table
// Define basic table structure using plain HTML
// use table instance in before step
// include the desired css  