import Image from "next/image";
import React from "react";
import { fetchFiles } from "~/hooks/useFetchFiles";

export default function ShowFiles() {
  const { fileList } = fetchFiles();

  return (
    <div className="m-5 mt-20 grid w-[100%] grid-cols-4 justify-between gap-10">
      {fileList.map((element) => {
        return (
          <Image
            className="max-w-none object-cover"
            key={element.id}
            src={element.imageLink}
            alt="image"
            width={300}
            height={300}
          />
        );
      })}
    </div>
  );
}
