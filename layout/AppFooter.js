import React, { useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppFooter = () => {
  const { layoutConfig } = useContext(LayoutContext);

  return (
    <div className="layout-footer">
      <i
        className="pi pi-heart-fill mr-2"
        style={{ fontSize: "1.5rem", color: "black" }}
      />
      by
      <span className="font-medium ml-2">Shrisha Mulmi</span>
    </div>
  );
};

export default AppFooter;
