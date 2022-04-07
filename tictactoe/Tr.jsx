import React, { memo } from "react";
import Td from "./Td";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tbody>
      <tr>
        {Array(rowData.length)
          .fill()
          .map((td, i) => (
            <Td
              key={i}
              rowIndex={rowIndex}
              cellIndex={i}
              cellData={rowData[i]}
              dispatch={dispatch}
            >
              {""}
            </Td>
          ))}
      </tr>
    </tbody>
  );
});
export default Tr;
