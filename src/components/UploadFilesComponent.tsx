import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { fileUpload } from "~/api/FileUpload";
import { addFolder } from "~/api/Firestore";

export default function UploadFilesComponent({
  parentId,
}: {
  parentId: string;
}) {
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [file, setFile] = useState({});
  const { data: session } = useSession();

  const uploadFile = (file: File | undefined | null) => {
    if (!file) return;
    fileUpload(file, parentId);
  };

  const uploadFolder = () => {
    const payload: {
      folderName: string;
      fileList: [];
      parentId: string;
      userEmail: string;
    } = {
      folderName,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email ?? "",
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
