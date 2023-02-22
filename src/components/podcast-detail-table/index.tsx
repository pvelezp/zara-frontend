import { useTable } from "react-table";
import styled from "styled-components"

const TableContainer = styled.section`
  table {
    border-collapse: collapse;
    width: 100%;

    th, td {
      text-align: left;
      padding: 8px;
      border-bottom:1px solid lightgray;
      }
  
      tr{
        &:hover{
          background-color: #f4f4f4;
          cursor:pointer;
          }
          &:nth-child(even) {
            background-color: #f2f2f2;
        }
      }
    }
    

`

export default function Table({ columns, data, handleRowClick }) {
  
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  });

  return (
      <TableContainer>
          <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => {
            
            return(
          <tr {...headerGroup.getHeaderGroupProps()} >
            {headerGroup.headers.map(column => (
              <th style={{width:i===0 ?"75%": "default", textAlign:'left'}} {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        )})}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr 
            onClick={()=>handleRowClick(row.original)}
            {...row.getRowProps()} >
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </TableContainer>

  );
}