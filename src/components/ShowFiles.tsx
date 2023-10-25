import Image from "next/image";
import React from "react";
import { fetchFiles } from "~/hooks/useFetchFiles";

export default function ShowFiles() {
  const { fileList } = fetchFiles();

  return (
    <div>
      {fileList.map((element) => {
        return (
          <Image
            key={element.id}
            src={element.imageLink}
            alt="image"
            width={100}
            height={100}
          />
        );
      })}
    </div>
  );
}
