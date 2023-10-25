import Image from "next/image";
import React from "react";
import { fetchFiles } from "~/hooks/useFetchFiles";
import { AiFillFolder } from "react-icons/ai";

export default function ShowFiles() {
  const { fileList } = fetchFiles();

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  return (
    <div className="m-5 mt-20 grid w-[90%] grid-cols-4 justify-between gap-10">
      {fileList.map((file) => {
        return (
          <div
            onClick={() => openFile(file.imageLink)}
            key={file.id}
            className="flex flex-col items-center justify-center overflow-hidden"
          >
            {file.isFolder ? (
              <>
                <AiFillFolder size={70}></AiFillFolder>
                <div>{file.folderName}</div>
              </>
            ) : (
              <>
                <div>
                  <Image
                    className="max-h-80 min-h-full min-w-full max-w-xs "
                    src={file.imageLink}
                    alt="image"
                    width={100000}
                    height={100000}
                  />
                </div>
                <div>{file.imageName}</div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
