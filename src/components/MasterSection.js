import React from "react";
import Workspace from "./Workspace.js";
import AsideRight from "./AsideRight.js";
import "./MasterSection.css";
export default function MasterSection() {
  return (
    <>
      <section className="w-100 bg-light p-0 d-flex flex-row justify-content-between overflow-auto">
        <Workspace />
        <AsideRight />
      </section>
    </>
  );
}
