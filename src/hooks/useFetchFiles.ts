import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";

const files = collection(database, "files");

export const fetchFiles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fileList, setFileList] = useState<ImageFile[]>([
    { id: "", imageLink: "", imageName: "", isFolder: true, folderName: "" },
  ]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    return onSnapshot(files, (response) => {
      setFileList(
        response.docs.map((item) => {
          return {
            imageLink: item.data().imageLink as string,
            id: item.id,
            imageName: item.data().imageName as string,
            isFolder: item.data().isFolder as boolean,
            folderName: item.data().folderName as string,
          };
        }),
      );
    });
  }, []);

  return { fileList };
};
