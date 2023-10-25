import React, { type ChangeEventHandler, useState } from "react";
import { fileUpload } from "~/api/FileUpload";

export default function UploadFilesComponent() {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [file, setFile] = useState({});
  const uploadFile = (file: File | undefined | null) => {
    if (!file) return;
    fileUpload(file);
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
          onChange={(event) => {
            if (!event?.target?.files) return;
            uploadFile(event?.target?.files[0]);
          }}
        />
      )}
      <button className="btn btn-primary m-3">Create a Folder</button>
    </div>
  );
}
