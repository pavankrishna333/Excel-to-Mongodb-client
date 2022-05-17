import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-regular-svg-icons";
import UploadFile from "./components/UploadFile";
import "./App.css";

const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-5">
      <FontAwesomeIcon icon={faFileExcel} />
      Upload your excel file
    </h4>
    <UploadFile />
  </div>
);

export default App;
