import React, { memo, useContext } from "react";
import Td from "./Td";
import { TableContext } from "./MineSearch";

const Tr = memo(({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tbody>
      <tr>
        {tableData[0] &&
          Array(tableData.length)
            .fill()
            .map((td, i) => <Td key={i} rowIndex={rowIndex} cellIndex={i} />)}
      </tr>
    </tbody>
  );
});

export default Tr;
