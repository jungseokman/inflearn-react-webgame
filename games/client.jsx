import React from "react";
import ReactDOM from "react-dom";
import Lotto from "./lotto";

import NumberBaseball from "./NumberBaseball";
import ResponseCheck from "./ResponseCheck";
import RSP from "./RSP";

ReactDOM.render(
  <>
    <Lotto />
    <RSP />
    <NumberBaseball />
    <ResponseCheck />
  </>,
  document.getElementById("root")
);
