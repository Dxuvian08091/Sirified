import Link from "next/link";
import { classNames } from "primereact/utils";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppTopbar = forwardRef((props, ref) => {
  const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } =
    useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  return (
    <div className="layout-topbar flex justify-content-center">
      <Link href="/" className="layout-topbar-logo flex justify-content-center">
        <i
          className="pi pi-angle-left"
          style={{ fontSize: "1.5rem", color: "black" }}
        />
        <span>SIRIFY</span>
        <i
          className="pi pi-angle-right"
          style={{ fontSize: "1.5rem", color: "black" }}
        />
      </Link>
    </div>
  );
});

export default AppTopbar;
