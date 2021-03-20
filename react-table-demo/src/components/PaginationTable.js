import React ,{useMemo} from 'react'
import {useTable,usePagination} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import "../table.css"

// For Pagination
//#01 .usePagination hook  and page from useTable hook instance
// and replace with rows with page,
// nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state


const PaginationTable = () => {

//Here we using useMemo [memoize (performance optimization)]

const columns=useMemo(() => COLUMNS, [])
const data =useMemo(() => MOCK_DATA, [])

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize
  }=useTable({
    columns,
    data,
    initialState:{pageIndex:2}
},usePagination)

const {pageIndex,pageSize}=state

    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
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
        </table>
        <div>
          <span>
            page :{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page :{""}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                show {pageSize}
              </option>
            ))}
          </select>
          <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
            {"<<"}
          </button>
          <button disabled={!canPreviousPage} onClick={() => previousPage()}>
            Previous
          </button>
          <button disabled={!canNextPage} onClick={() => nextPage()}>
            Next
          </button>
          <button
            disabled={!canNextPage}
            onClick={() => gotoPage(pageCount - 1)}
          >
            {">>"}
          </button>
        </div>
      </>
    );
}

export default PaginationTable

// Get the data you want to display
// Define the columns for your table
// Use the data and columns defined to create a table instance using react-table
// Define basic table structure using plain HTML
// use table instance in before step
// include the desired css  