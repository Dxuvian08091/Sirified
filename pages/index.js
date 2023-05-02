import React, { useRef, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";

const PanelDemo = () => {
  const [value, setValue] = useState("");
  const menu1 = useRef(null);
  const toolbarItems = [
    {
      label: "Save",
      icon: "pi pi-check",
    },
    {
      label: "Update",
      icon: "pi pi-sync",
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
    },
    {
      label: "Home Page",
      icon: "pi pi-home",
    },
  ];

  const clearBtnHandler = () => {
    setValue("");
  };
  const toolbarLeftTemplate = () => {
    return (
      <>
        <Button label="New" icon="pi pi-plus" style={{ marginRight: ".5em" }} />
        <Button label="Open" icon="pi pi-folder-open" severity="secondary" />

        <i
          className="pi pi-bars p-toolbar-separator"
          style={{ marginRight: ".5em" }}
        ></i>

        <Button
          icon="pi pi-check"
          severity="sucess"
          style={{ marginRight: ".5em" }}
        />
        <Button
          icon="pi pi-trash"
          severity="warning"
          style={{ marginRight: ".5em" }}
        />
        <Button icon="pi pi-print" severity="danger" />
      </>
    );
  };
  const toolbarRightTemplate = (
    <SplitButton
      label="Options"
      icon="pi pi-check"
      model={toolbarItems}
      menuStyle={{ width: "12rem" }}
    ></SplitButton>
  );
  const cardHeader = (
    <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
      <h5 className="m-0">Card</h5>
      <Button
        icon="pi pi-plus"
        text
        onClick={(event) => menu1.current.toggle(event)}
      />
      <Menu
        ref={menu1}
        popup
        model={[
          { label: "Add New", icon: "pi pi-fw pi-plus" },
          { label: "Remove", icon: "pi pi-fw pi-minus" },
          { label: "Update", icon: "pi pi-fw pi-sync" },
        ]}
      />
    </div>
  );

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card">
          <h5>Sirify</h5>
          <div className="grid">
            <div className="col-5 flex align-items-center justify-content-center">
              <div className="p-fluid">
                <div className="field">
                  <label htmlFor="content">Content</label>
                  <InputTextarea
                    id="content"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={12}
                    cols={60}
                  />
                </div>
                <Button label="Clear" onClick={clearBtnHandler}></Button>
              </div>
            </div>
            <div className="col-1">
              <Divider layout="vertical"></Divider>
            </div>
            <div className="col-5 align-items-center justify-content-center">
              <p>{value}</p>

              <Divider layout="horizontal" align="center">
                <span className="p-tag">Sirified</span>
              </Divider>

              <p>
                {value.split(" ").map((word, index) => {
                  let bold = "";
                  let normal = "";
                  if (word.length >= 6) {
                    bold = word.slice(0, 3);
                    normal = word.slice(3);
                  } else {
                    bold = word.slice(0, 2);
                    normal = word.slice(2);
                  }
                  return (
                    <>
                      <b>{bold}</b>
                      {normal}{" "}
                    </>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelDemo;
