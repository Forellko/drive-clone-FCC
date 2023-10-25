import React, { MouseEventHandler, useState } from "react";

export default function UploadFilesComponent() {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [file, setFile] = useState({});
  const uploadFile: MouseEventHandler = (event) => {
    console.log(event);
  };

  return (
    <div className="m-4">
      <button
        className="btn btn-primary m-3"
        onClick={() => setIsFileOpen((prev) => !prev)}
      >
        Add a File
      </button>
      {isFileOpen && (
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
      )}
      <button className="btn btn-primary m-3">Create a Folder</button>
    </div>
  );
}
