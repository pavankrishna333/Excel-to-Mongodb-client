import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import "./UploadFile.css";

const UploadFile = () => {
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const [msgStatus, setMsgStatus] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("api/excel/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(res.data.msg);
      setMsgStatus("success");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage(err.response.data.msg);
        setMsgStatus("failure");
      } else {
        setMessage(err.response.data.msg);
        setMsgStatus("failure");
      }
    }
  };

  return (
    <Fragment>
      {message && <Message msg={message} msgStatus={msgStatus} />}
      <form className="text-center form-container" onSubmit={onSubmit}>
        <input
          className="form-control form-control-lg mb-3"
          id="formFileLg"
          type="file"
          name="upload-file"
          onChange={onChange}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        <input
          type="submit"
          value="upload"
          className="btn btn-primary col-12 btn-block btn-lg mt-4"
        />
      </form>
    </Fragment>
  );
};

export default UploadFile;
