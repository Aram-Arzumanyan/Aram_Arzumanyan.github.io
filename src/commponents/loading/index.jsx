import React from "react";
import useLoader from "../../customhooks/useLoader";
import "./style.css";

export default function Loading() {
  const { loading } = useLoader();
  return (
    Loading && (
        <div className="bod">
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
      </div>
    )
  );
}
