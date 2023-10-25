import Image from "next/image";
import React from "react";
import { fetchFiles } from "~/hooks/useFetchFiles";

export default function ShowFiles() {
  const { fileList } = fetchFiles();

  return (
    <div className="m-5 mt-20 grid w-[100%] grid-cols-4 justify-between gap-10">
      {fileList.map((element) => {
        return (
          <div key={element.id} className="h-[300px] w-[300px] overflow-hidden">
            <Image
              className="max-h-full min-w-full"
              src={element.imageLink}
              alt="image"
              width={500}
              height={500}
            />
          </div>
        );
      })}
    </div>
  );
}
