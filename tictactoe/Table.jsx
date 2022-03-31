import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr dispatch={dispatch} key={i} rowIndex={i} rowData={tableData[i]} />
        ))}
    </table>
  );
};

export default Table;
