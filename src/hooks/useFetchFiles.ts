import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";

const files = collection(database, "files");

export const fetchFiles = (parentId: string) => {
  console.log(parentId, "fetchFiles");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fileList, setFileList] = useState<ImageFile[]>([
    {
      id: "",
      imageLink: "",
      imageName: "",
      isFolder: true,
      folderName: "",
      parentId: "",
    },
  ]);

  const getFolders = () => {
    if (parentId === "") {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((item) => {
              return {
                imageLink: item.data().imageLink as string,
                id: item.id,
                imageName: item.data().imageName as string,
                isFolder: item.data().isFolder as boolean,
                folderName: item.data().folderName as string,
                parentId: item.data().parentId as string,
              };
            })
            .filter((item) => item.parentId === ""),
        );
      });
    } else {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((item) => {
              return {
                imageLink: item.data().imageLink as string,
                id: item.id,
                imageName: item.data().imageName as string,
                isFolder: item.data().isFolder as boolean,
                folderName: item.data().folderName as string,
                parentId: item.data().parentId as string,
              };
            })
            .filter((item) => {
              console.log(item, "in filter");
              return item.parentId === parentId;
            }),
        );
      });
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("useeff", parentId);
    getFolders();
  }, [parentId]);

  return { fileList };
};
