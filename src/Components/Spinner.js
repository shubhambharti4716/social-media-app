// Spinner.js
import React from "react";
import { css } from "@emotion/react";
import { SyncLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <SyncLoader color="#F05A22" css={override} size={15} />
    </div>
  );
};

export default Spinner;
