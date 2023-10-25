import React, { useState } from "react";
import { fileUpload } from "~/api/FileUpload";
import { addFolder } from "~/api/Firestore";

export default function UploadFilesComponent() {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [file, setFile] = useState({});
  const uploadFile = (file: File | undefined | null) => {
    if (!file) return;
    fileUpload(file);
  };

  const uploadFolder = () => {
    const payload: { folderName: string; fileList: [] } = {
      folderName,
      fileList: [],
    };
    addFolder(payload);
    setIsFolderOpen(false);
    setFolderName("");
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
      <button
        className="btn btn-primary m-3"
        onClick={() => setIsFolderOpen((prev) => !prev)}
      >
        Create a Folder
      </button>
      {isFolderOpen && (
        <>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(event) => setFolderName(event.target.value)}
          />

          <button
            className="btn btn-primary m-3"
            onClick={() => uploadFolder()}
          >
            Create
          </button>
        </>
      )}
    </div>
  );
}
